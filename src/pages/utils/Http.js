import { message } from 'antd'

const TOKEN_KEY = 'TOKEN_KEY'
const TOKEN_PREFIX_TEXT = 'Bearer '

export const autoLogin = () => {
  const data = {
    username: 'admin',
    password: 1234
  }
  Http({
    url: 'http://localhost:3000/auth/login',
    method: 'POST',
    data: data
  }).then(res=>{
    const access_token = res?.['access_token']
    if(access_token){
      localStorage.setItem(TOKEN_KEY, TOKEN_PREFIX_TEXT + access_token)
      message.success('自动登录成功，已保存 token 到 localstorage ')
    }
  }).catch(err=>{
    message.error('自动登录异常')
    console.error('login error', err)
  })
}

const getStoreToken = async ()=> {
  const token = localStorage.getItem(TOKEN_KEY)
  if(!token){
    await autoLogin()
    console.log('getStoreToken rest', localStorage.getItem(TOKEN_KEY))
    return localStorage.getItem(TOKEN_KEY)
  }else {
    return token
  }
}

export const Http = async (obj)=>{
  let { method, url, params, data, headers } = obj
  // console.log('Http obj', obj)

  if ( params ) {
    const urlPrefix = new URLSearchParams(params).toString()
    url = `${url}?${urlPrefix}`
    // console.log('newUrl', url)
  }

  const options = {
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    method: method || 'get',
    body: data? JSON.stringify(data): null
  }

  // 如果不是登录接口，需要把token带上
  if ( url.indexOf('/auth/login') === -1 ){
    const userToken = await getStoreToken()
    options.headers = { ...options.headers, Authorization: userToken }
  }
  options.headers = { ...options.headers, ...headers }

  let res = null
  res = await fetch(url, options)

  // console.log('res', res)
  const restData = await res.json()
  // console.log('restData', restData)
  return restData
}
