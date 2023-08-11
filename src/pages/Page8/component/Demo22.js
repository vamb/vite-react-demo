import React, { memo, useEffect, useState } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Button } from 'antd'

const Demo22 = memo(()=>{

  useEffect(()=>{
    const fatherDiv = document.querySelector('.father-div')
    const childDiv = document.querySelector('.child-div')

    // fatherDiv.addEventListener('mouseover', ()=>{
    //   console.log('11')
    // })
    // fatherDiv.addEventListener('mouseenter', ()=>{
    //   console.log('11')
    // })
    fatherDiv.addEventListener('mouseleave', ()=>{
      console.log('22')
    })

    // fatherDiv.addEventListener('mouseout', ()=>{
    //   console.log('33')
    // })

    // 自定一个是事件，并且通过代码来触发该事件
    const target = document.getElementById('dispatchEvent')
    const newEvent = new CustomEvent('myEvent', {
      detail: {
        username: 'zhangxinxu.com',
        userid: '20200820'
      }
    })
    console.log('23')
    target.addEventListener('myEvent', function(event){
      console.log(`my event triggered event`, event?.detail)
    })
    console.log('24')
    target.dispatchEvent(newEvent)
    console.log('25')
  },[])

  return(
    <UnitContent title={'Demo22'}>
      <Wrapper>
        <div className={'father-div'}>
          <div className={'child-div'} />
        </div>
        <div className={'info-tips'}>
          <div>mouseover: 移入本身和其子元素都会触发</div>
          <div>mouseenter: 移入本身才会触发</div>
          <div>mouseout: 移入本身的子元素，移出本身的子元素，移出本身都会触发</div>
          <div>mouseleave: 只有移出本身才会触发，子元素不会干扰</div>
        </div>
        <div className={'divide-dash'} />
        <div className={'info-tips'}>
          <div>document.getElementById</div>
          <div>{'document.getElementsByClassName => 更具类名返回结果，不用加点'}</div>
          <div>document.getElementsByName</div>
          <div>document.getElementsByTagName</div>
          <div className={'tips-important'}>{'document.querySelector => 返回指定选择结果的第一个元素'}</div>
          <div className={'tips-important'}>{'document.querySelectorAll => 返回选择器的所有结果'}</div>
        </div>
        <div className={'divide-dash'} />
        <div className={'info-tips'}>
          <div id={'dispatchEvent'}>dispatchEvent 可是触发事前定义并且绑定对象的事件</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  .father-div {
    width: 150px;
    height: 150px;
    background: #19CAAD;
    margin-right: 10px;
  }
  .child-div {
    width: 100px;
    height: 100px;
    background: #BEE7E9;
  }
  .info-tips: {
    display: flex;
    flex-direction: column;
  }
  .info-tips > div {
    font-size: 14px;
    font-weight: 700;
  }
  .divide-dash {
    border-right: 1px dashed;
    margin: 0 30px;
  }
  .tips-important {
    color: red
  }
`

export default Demo22
