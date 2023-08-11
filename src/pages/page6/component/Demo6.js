import React, { useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo6 = ()=> {

  const fetchData = async () =>{
    let res = await fetch('http://ajax-base-api-t.itheima.net/api/getbooks')
    console.log('res', res)
    console.log('res.ok', res.ok) //返回一个boolean value，表示请求是否成功
    console.log('res.status', res.status) //返回一个http code，200+表示成功
    //返回状态的文本信息（例如：请求成功之后，服务器返回'OK' || 'Not Found'）
    console.log('res.statusText', res.statusText)
    console.log('res.url', res.url) // 返回请求url

    // res.json() 获取返回的json对象
    // res.text() 得到文本字符串 （可以直接当作对象处理的一个string串）
    // res.blob() 得到二进制Blob对象
    // res.formData() 得到FormData表单对象
    // res.arrayBuffer() 得到二进制ArrayBuffer对象

    // fetch(url, options) 第一个参数是url，第二个请求定义了method，body，headers等
  }

  const fetchPost = async () =>{
    const obj = {
      bookname: '罗小黑 - 罗小黑战记',
      author: 'MTJJ',
      publisher: '格兰芬多'
    }
    const url = 'http://ajax-base-api-t.itheima.net/api/addbook'
    const res = await fetch(url, {
      body: JSON.stringify(obj),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let restData = await res.json()
    console.log('fetchPost restData', restData)
    // fetchPost restData {status: 201, msg: '添加图书成功'}
  }

  useEffect(()=>{
    // fetchData()
    // fetchPost()
  },[])

  return (
    <UnitContent title={'6 - Demo6: fetch advance'}>
      <Wrapper>
        Demo6
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo6
