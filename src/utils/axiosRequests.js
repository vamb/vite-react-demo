import axios from "axios";
import { stringify } from "qs";
import { notification } from "antd";
import { isArray } from 'lodash';

export const TOKEN_KEY = 'SELF_TOKEN_KEY';

// // 移除所有值为null、undefined的字段
export function removeInvalidKey(originData) {
  const targetData = {};
  Object.keys(originData).forEach((key) => {
    const value = originData[key];
    if (value !== null && value !== undefined) {
      targetData[key] = value;
    }
  });
  return targetData;
}

// // 把原始对象转成formdata格式，暂时仅支持1层
export function convertToFormData(originData) {
  const formData = new FormData();
  Object.keys(originData).forEach((key) => {
    if (isArray(originData[key])) {
      // 数组
      originData[key].forEach((file, index) => {
        formData.append(`${key}`, file);
      });
    } else {
      formData.append(key, originData[key]);
    }
  });
  return formData;
}

const handleRequest = (url, options) => {
  const result = { ...options };
  // 如果body或params里有值就转化一次，移除不可用的值
  result.data = result.data && removeInvalidKey(result.data);
  result.params = result.params && removeInvalidKey(result.params);
  // 将query中的数组参数转化为逗号分隔形式 {a: ['b', 'c']} => a=b,c
  result.paramsSerializer = (params) => stringify(params, { arrayFormat: 'comma' });
  // 根据配置转成特定的格式
  if (result.formdata) {
    result.data = convertToFormData(result.data);
  }
  // 如果是登录接口，不传Authorization
  if (url.indexOf('/api/user/login') !== -1) {
    result.headers = {
      ...result.headers
    };
  } else {
    result.headers = {
      ...result.headers,
      Authorization: `${localStorage.getItem(TOKEN_KEY) || ''}`
    };
  }
  return {
    url,
    options: {
      ...result,
      interceptors: true
    }
  };
}

const handleResponse = (reqParams, resolve, reject) =>  {
  const { url, options } = reqParams

  const finalReqParams = {
    url: options?.urlPrefix + url,
    method: options?.method,
    data: options?.data,
    headers: options?.headers,
    params: options?.params
  }

  if( 'blob' === options?.responseType) {
    finalReqParams['responseType'] = 'blob'
  }
  // console.log('finalReqParams', finalReqParams)

  axios({
    ...finalReqParams
  }).then( async res=>{
    // console.log('handleResponse res', res, url)
    const { status, data } = res
    // console.log('handleResponse status data', status, data)
    if (status >= 200 && status <= 299) {

      // 如果是下载
      if('blob' === options?.responseType) {
        resolve(data)
      } else {
        if(data?.code && data?.code.toString().startsWith('20')) {
          resolve(data?.data)
        }else {
          console.log('status not 200', data)
          if(url.includes('recreate_vector_store')) {
            resolve(data?.data)
          }else{
            reject({ code: data?.code, message: data?.message })
            notification.error({
              message: `请求错误 ${data?.code}`,
              description: data?.message || data?.msg
            });
          }
        }
      }
    }else{
      // console.log('handleResponse status not 200', res)
      reject()
    }
  }).catch(err=>{
    console.log('handleResponse err', err)
    reject()
    notification.error({
      message: `请求错误 ${err?.code}`,
      description: err?.message
    });
  })
}

export const axiosRequests = (url, options) => {
  const reqParams = handleRequest(url, options)
  // console.log('axiosRequests reqParams', reqParams)
  return new Promise((resolve, reject)=>{
    handleResponse(reqParams, resolve, reject)
  })
}
