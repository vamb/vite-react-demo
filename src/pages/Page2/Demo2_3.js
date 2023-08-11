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

    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    }catch (e) {
      this.reject(e)
    }

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
    let promise2 = new myPromise((resolve, reject) => {
      // onFulfilled = typeof onFulfilled === 'function' ? onFulfilled: value => value
      // onRejected = typeof onRejected === 'function' ? onRejected: reason => {
      //   throw reason
      // }

      if (this.state === 'fulfilled') {
        setTimeout(()=> {

          try {

            if (typeof onFulfilled !== 'function') {
              resolve(this.result)
            } else {
              let x = onFulfilled(this.result)
              resolvePromise(promise2, x, resolve, reject)
            }

          }catch (e) {
            reject(e)
          }

        })
      }else if(this.state === 'rejected') {
        setTimeout(()=> {

          try {

            if(typeof onRejected !== 'function') {
              reject(this.reason)
            }else {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            }

          }catch (e) {
            reject(e)
          }

        })
      }else if(this.state === 'pending') {
        this.onFulfilledCallbacks.push(()=>{
          setTimeout(()=> {

            try {

              if(typeof onFulfilled !== 'function') {
                resolve(this.result)
              }else {
                let x = onFulfilled(this.result)
                resolvePromise(promise2, x, resolve, reject)
              }

            }catch (e) {
              reject(e)
            }

          })
        })

        this.onRejectedCallbacks.push(()=>{
          setTimeout(()=> {

            try {

              if (typeof onRejected !== 'function') {
                reject(this.reason)
              }else {
                let x = onRejected(this.reason)
                resolvePromise(promise2, x, resolve, reject)
              }

            }catch (e) {
              reject(e)
            }

          })
        })
      }
    })

    return promise2
  }
}

function resolvePromise (promise2, x, resolve, reject) {
  if (x === promise2) {
    throw new TypeError('promise error')
  }
  if (x instanceof myPromise) {
    x.then(y => {
      resolvePromise(promise2, y, resolve, reject)
    }, reject)
  } else if (x !== null && ((typeof x === 'object' || typeof x === 'function'))) {
    let then
    try {
      then = x.then
    }catch (e) {
      return reject(e)
    }

    if ( typeof then === 'function' ) {
      let called = false // 加锁
      try {
        then.call(
          x,
          y => {
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          r => {
            if (called) return
            called = true
            reject(r)
          }
        )
      }catch (e) {
        if (called) return
        called = true
        reject(e)
      }
    } else {
      resolve(x)
    }
  }else {
    return resolve(x)
  }
}


const Demo2_3 = () => {

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
    <UnitContent title={'Demo2_2 myPromise 链式调用'}>
      <Wrapper>
        <Button type={'primary'} onClick={triggerFun}>myPromise</Button>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo2_3
