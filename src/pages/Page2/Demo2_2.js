import React, { useEffect } from 'react'
import UnitContent from "../components/UnitContent";
import styled from "styled-components";
import { Button } from 'antd'

class myPromise {
  constructor(executor) {
    this.state = 'pending'
    this.reason = null
    this.result = null
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    executor(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve(result) {
    if (this.state === 'pending') {
      this.state = 'fulfilled'
      this.result = result
      this.onFulfilledCallbacks.forEach(callback => {
        callback(result)
      })
    }
  }

  reject(reason) {
    if (this.state === 'pending') {
      this.state = 'rejected'
      this.reason = reason
      this.onRejectedCallbacks.forEach(callback => {
        callback(reason)
      })
    }
  }

  then(onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled: value => value
    onRejected = typeof onRejected === 'function' ? onRejected: reason => {
      throw reason
    }

    if (this.state === 'fulfilled') {
      setTimeout(()=> {
        onFulfilled(this.result)
      })
    }else if(this.state === 'rejected') {
      setTimeout(()=> {
        onRejected(this.reason)
      })
    }else if(this.state === 'pending') {
      this.onFulfilledCallbacks.push(()=>{
        setTimeout(()=> {
          onFulfilled(this.result)
        })
      })

      this.onRejectedCallbacks.push(()=>{
        setTimeout(()=> {
          onRejected(this.reason)
        })
      })
    }
  }
}


const Demo2_2 = () => {

  const triggerFun = () =>{
    let p = new myPromise((resolve, reject)=>{
      // console.log('sfsdfsdfds')
      setTimeout(function () {
        const num = Math.floor(Math.random() * 100)
        if (num <= 50) {
          resolve(num)
        }else {
          reject(`生成的数字大于50: ${num}`)
        }
      }, 1000)
    }).then(res=>{
      console.log(`执行结果 resolved: ${res}`)
    }, err=>{
      console.log(`执行结果 rejected: ${err}`)
    })
  }

  useEffect(()=>{
    triggerFun()
  },[])

  return (
    <UnitContent title={'Demo2_2 myPromise'}>
      <Wrapper>
        <Button type={'primary'} onClick={triggerFun}>myPromise</Button>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo2_2
