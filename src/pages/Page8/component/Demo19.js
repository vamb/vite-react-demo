import React, { memo, useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo19 = memo(() =>{

  useEffect(()=>{

    console.log('Demo19', 1)
    setTimeout(()=>{
      console.log('Demo19', 4)
    },2)
    setTimeout(()=>{
      console.log('Demo19', 3)
    },1)
    console.log('Demo19', 2)

  },[])

  return(
    <UnitContent title={'Demo19'}>
      <Wrapper>
        <p>Javascript 是单线程</p>
        <p>HTML5 提出 Web Worker 标准，允许Javascript脚本创建多个线程。于是，JS中出现了 同步 和 异步</p>
        <p>优先执行主线程任务，遇到回调函数，将回调函数放在微任务的任务队列里面（eventLoop）</p>

        <h3>location</h3>
        <p>{`location.assign() => 和 location.href一样，可以跳转页面（也称为重定向页面，具有回退功能）`}</p>
        <p>{`location.replace() => 替换当前页面，因为不记录历史，所以不可以回退到上一个页面`}</p>
        <p>{`location.reload() => 重新加载页面，相当于刷新按钮或者F5，如果参数为true，则标识进行强制刷新操作`}</p>

        <h3>navigator </h3>
        <p>对象包含了浏览器相关信息，其userAgent可以返回客户端信息（window.navigator.userAgent）</p>

        <h3>history</h3>
        <p>history.forward() 页面前进</p>
        <p>history.back() 页面后退</p>
        <p>history.go() 参数-1表示后退，1表示前进，数字表示前进或者后退的步数</p>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`

`

export default Demo19
