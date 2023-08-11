import React, { useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo4 = ()=>{

  /**
   * progress events
   * loadstart: 在接受到响应的第一个字节是触发
   * progress：再接收响应期间反复触发
   * error：再请求出错时触发
   * abort：再调用abort() 终止连接是触发
   * load：再成功接收完响应时触发
   * loadend：再通信完成时，且在error、abort、load之后触发
   *
   *
   * 每次请求都会首先触发loadstart事件，
   * 之后时一个或多个progress事件，
   * 接着是error、abort、load中的一个
   * onload === (xhr.readyState === 4)
   * 最后以loadend结束
   */

  /**
   * xhr.onload = function(){}
   * xhr.onProgress = function(){}
   */

  //P719
  const sentMsg2 = () =>{
    let xhr = new XMLHttpRequest()
    xhr.onload = () => {
      console.log('onload called xhr', xhr,
        // xhr.responseText
      )
    }
    xhr.onloadstart =()=> {
      console.log('onloadstart called xhr', xhr,
        // xhr.responseText
      )
    }
    xhr.onprogress=()=>{
      console.log('onprogress called xhr', xhr,
        // xhr.responseText
      )
    }
    xhr.onloadend=()=>{
      console.log('onloadend called xhr', xhr,
        // xhr.responseText
      )
    }
    xhr.open('get', 'https://jsonplaceholder.typicode.com/users?_limit=5', true)
    xhr.send(null)
  }

  useEffect(()=>{
    // sentMsg2()
  },[])

  return(
    <UnitContent title={'6 - Demo4: onloadStart => onprogress => ( onerror || onabort || onload) => onloadend'}>
      <Wrapper>
        Demo4
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo4
