import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Button } from 'antd'

const Demo12_1 = () =>{

  function wait500 (input) {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log('wait500', input + 500)
        resolve(input + 500)
      }, 500)
    })
  }

  function wait1000 (input) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        console.log('wait1000', input + 1000)
        resolve(input + 1000)
      }, 1000)
    })
  }

  const promiseLinkCall = () =>{
    const p = new Promise((resolve, reject)=>{
      console.log('promiseLinkCall 1')
      resolve(1)
    }).then(wait500).then(wait1000).then(wait500).then(wait1000)
  }

  const promiseAllCall = async () => {
    const p = await Promise.all([wait500(1), wait1000(1)]).then(result=>{
      console.log('promiseAllCall result', result[0], result[1])
    })
  }

  const promiseRaceCall = async () => {
    const p = await Promise.race([wait500(1), wait1000(1)]).then(result=>{
      console.log('promiseRaceCall result', result)
    })
  }

  return (
    <UnitContent title={'Demo12_1'}>
      <Wrapper>
        <Button type={'primary'} onClick={()=>promiseLinkCall()}>promise 链式调用</Button>
        <Button type={'primary'} onClick={()=>promiseAllCall()}>promise.all</Button>
        <Button type={'primary'} onClick={()=>promiseRaceCall()}>promise.race</Button>
        <div>MyPromiseClass - 手写的promise demo</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > button {
    margin-right: 10px;
  }
`

export default Demo12_1
