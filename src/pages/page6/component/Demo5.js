import React, { useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo5 = ()=>{

  // fetch最基础的用法
  const fetchTest = () =>{
    let payload = JSON.stringify({
      foo: 'bar'
    })
    let jsonHeaders = new Headers({
      'Content-Type': 'application/json'
    })
    fetch('http://ajax-base-api-t.itheima.net/api/getbooks',{
      method: 'get',
      // body: payload,
      // headers: jsonHeaders
    }).then(data=>{
      // 直接得到的返回，是一个response对象，需要使用特定的方法来获取其中的内容
      console.log('data', data)

      // data.json() 是一个异步操作，表示去除所有的内容，并将其转换为JSON对象
      // console.log(data.json())
      return data.json()
    }).then(result=>{
      // 获取经过data.json()处理之后的数据
      console.log('result', result)
    }).catch(err=>{
      // 捕获错误信息
      console.log('catch err', err)
    })
  }

  // 通过async && await使得方法变简单的写法
  const fetchTest2 = async () =>{
    let res = await fetch('http://ajax-base-api-t.itheima.net/api/getbooks')
    console.log('fetchTest2 res', res)
    let restData = await res.text()
    console.log('fetchTest2 restData', restData)
  }

  // 添加异常捕获
  const fetchTest3 = async (id) =>{
    try {
      let res = await fetch(`http://ajax-base-api-t.itheima.net/api/getbooks?id=${id}`)
      console.log('fetchTest2 res', res)
      let restData = await res.json()
      console.log('fetchTest2 restData', restData)
    }catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    // fetchTest()
    // fetchTest2()
    // fetchTest3(2)

  },[])

  return (
    <UnitContent title={'6 - Demo5: fetch basic'}>
      <Wrapper>
        Demo5
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo5
