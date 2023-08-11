import React, { memo, useEffect } from 'react'
import UnitContent from "../components/UnitContent";
import styled from "styled-components";

const Demo3 = memo(()=>{

  /**
   * responseText: 作为响应体返回的文本
   * responseXML: 如果响应的内容类型是
   * status: 响应的HTTP状态
   * statusText: 响应的HTTP状态描述
   */

  /**
   * readyStatus
   * 0: 未初始化，尚未调用 open() 方法
   * 1: 已打开（open），已调用 open() 方法，尚未调用 send() 方法
   * 2: 已发送（send），已调用 send() 方法，尚未收到响应
   * 3: 接受中(receiving), 已经收到部分响应
   * 4: 完成（complete）, 已经收到所有响应，可以使用返回数据
   */

  /**
   * Accept: 浏览器可以处理的内容类型
   * Accept-Charset： 浏览器可以显示的字符集
   * Accept-Encoding：浏览器可以处理的压缩编码类型
   * Accept-Language: 浏览器使用的语言
   * Connection：浏览器与服务器的连接类型
   * Cookie：页面中设置的cookie
   * Host：发送请求的页面所在的域
   * Referer： 发送请求的页面的URL
   * user-agent：浏览器的用户代理字符串
   */

  let data = new FormData()
  data.append('key', 'value')

  const sendMsg = () =>{
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () =>{
      if(xhr.readyState === 4) {
        let allHeaders = xhr.getAllResponseHeaders();
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
          console.log('allHeaders', allHeaders)
          // alert(xhr.responseText)
          console.log(xhr.responseText)
        }else {
          // alert('request was unsuccessful" ' + xhr.status)
          console.log(`request was unsuccessful ${xhr.status}`)
        }
      }
    }
    xhr.open('get', 'example.txt', true)
    xhr.setRequestHeader('MyHeader', "myValue")
    xhr.timeout = 1000 //设置超时时间1s
    xhr.ontimeout = () =>{
      // alert('request did not return in 1 second')
      console.log('request did not return in 1 second')
    }
    // xhr.overrideMimeType("text/xml") //用于修改MIME的响应类型，必须在send之前调用
    // xhr.send(null)
    xhr.send(data)
  }

  useEffect(()=>{
    // sendMsg()
  },[])

  return(
    <UnitContent title={'6 - Demo3'}>
      <Wrapper>
        XHR level1 demo
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`

`

export default Demo3
