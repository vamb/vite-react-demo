import { message } from "antd";
import React from 'react'

// 浅拷贝
export const shallowClone = (source) => {
  let target = {};
  for(let i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }
  return target;
}

// 深拷贝
export const deepClone = source => {
  if (source === null) return source;
  if (source instanceof Date) return new Date(source);
  if (source instanceof RegExp) return new RegExp(source);
  if (typeof source !== "object") return source;
  let cloneObj = new source.constructor();
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(source[key]);
    }
  }
  return cloneObj;
}

export const handleCopyAction = (str, subCount) => {
  const textValue = document.createElement('textarea');
  textValue.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
  textValue.value = str; //上面selectText函数返回值赋给textarea的value
  document.body.appendChild(textValue); //将textarea添加为body子元素
  textValue.select();

  document.execCommand('copy');
  document.body.removeChild(textValue);//移除DOM元素

  const newSubCount = subCount || 10
  const displayPrefix = str?.length > newSubCount? str.substring(0, newSubCount) + '...': str

  message.success(`【${displayPrefix}】 已复制到剪切板`)
}

export const DEFAULT_TAB_HEIGHT = 62
export const findPageContentHeight = () => {
  const pageContentDom = document.getElementsByClassName('page-content')?.[0]
  return pageContentDom? pageContentDom.clientHeight: 0
}

export const generateRandomArr = (length, limit) => {
  const tempArr = []
  if(length) {
    if(limit) {
      for(let i=0;i<length;i++){
        tempArr.push(Math.floor(Math.random() * limit))
      }
    }else{
      for(let i=0;i<length;i++){
        tempArr.push(Math.floor(Math.random()))
      }
    }
  }
  return tempArr
}

/**
 * 自定义点击跳转
 * @param url 跳转链接
 * @param isBlank =》 true 则打开新窗口跳转，不填或者否则在当前窗口跳转
 */
export const selfHref = (url, isBlank) =>{
  const oa = document.createElement('a');
  oa.href = url;
  if(true === isBlank){
    oa.setAttribute('target', '_blank');
  }
  document.body.appendChild(oa);
  oa.click();
  oa.remove()
}

const PLACEHOLDER = '--'

export const checkInputNone = (input, placeHolder, suffix)=>{
  let result = ''
  const finalPlaceholder = placeHolder? placeHolder: PLACEHOLDER
  if(isNaN(input)){
    result = input? input: finalPlaceholder
  }else{
    if(Array.isArray(input)) {
      if(input.length>0){
        let tempStr = ''
        input.map((item, idx)=>{
          tempStr = tempStr + item
          if(idx !== input.length -1){
            tempStr = tempStr + ', '
          }
        })
        result = tempStr
      }else {
        result = finalPlaceholder
      }
    }else {
      result = input !== null && input !== undefined && input !== ''? input: finalPlaceholder
    }
  }
  if(suffix && result !== finalPlaceholder){
    return result + ' ' + suffix
  }else if(suffix && result === finalPlaceholder){
    return finalPlaceholder
  }else{
    return result
  }
}
