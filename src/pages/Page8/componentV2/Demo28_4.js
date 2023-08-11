import React, { useState, useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import '../../font.css'

const leftOffset = 25;

const Demo28_4 = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(()=>{

  },[])

  return (
    <UnitContent title={'28_4 果冻导航'}>
      <Wrapper>
        <div className={'direct-content'}>
          <div className={'direct-item'} onClick={()=>setActiveIdx(0)}>
            <div style={{transform: `translateY(${0===activeIdx?-30: 0}px)`}}>
              <span className={'iconfont'}>&#xe611;</span>
            </div>
            <div
              style={
                0===activeIdx?
                {
                  opacity: 1,
                  transform: `translateY(-5px)`
                }:
                {
                  opacity: 0,
                  transform: `translateY(0px)`
                }
              }
            >三明治</div>
          </div>
          <div className={'direct-item'} onClick={()=>setActiveIdx(1)}>
            <div style={{transform: `translateY(${1===activeIdx?-30: 0}px)`}}>
              <span className={'iconfont'}>&#xe65e;</span>
            </div>
            <div
              style={
                1===activeIdx?
                  {
                    opacity: 1,
                    transform: `translateY(-5px)`
                  }:
                  {
                    opacity: 0,
                    transform: `translateY(0px)`
                  }
              }
            >汉堡</div>
          </div>
          <div className={'direct-item'} onClick={()=>setActiveIdx(2)}>
            <div style={{transform: `translateY(${2===activeIdx?-30: 0}px)`}}>
              <span className={'iconfont'}>&#xe698;</span>
            </div>
            <div
              style={
                2===activeIdx?
                  {
                    opacity: 1,
                    transform: `translateY(-5px)`
                  }:
                  {
                    opacity: 0,
                    transform: `translateY(0px)`
                  }
              }
            >沙冰</div>
          </div>
          <div className={'direct-item'} onClick={()=>setActiveIdx(3)}>
            <div style={{transform: `translateY(${3===activeIdx?-30: 0}px)`}}>
              <span className={'iconfont'}>&#xe65c;</span>
            </div>
            <div
              style={
                3===activeIdx?
                  {
                    opacity: 1,
                    transform: `translateY(-5px)`
                  }:
                  {
                    opacity: 0,
                    transform: `translateY(0px)`
                  }
              }
            >可乐</div>
          </div>
          <div className={'active-circle'} style={{transform: `translateX(${leftOffset + 15 + 100*activeIdx}px)`}}>
            <div className={'circle-content'} />
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  // :root {
  //   --color: #222;
  //   --bg: orange;
  //   --w: 100px;
  //   --t: 450px;
  //   --c: 70px;
  // }
  height: 150px;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  .direct-content {
    margin-top: 20px;
    height: 70px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    padding: 0 25px;
    position: relative;
    & > div {
      flex-grow: 1;
    }
    .direct-item {
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 15px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      & > div:nth-child(1) {
        z-index: 1;
        transition: all 0.5s;
      }
      & > div:nth-child(2) {
        transition: all 0.5s;
        opacity: 0;
      }
    }
    .direct-item:hover {
      & > div:nth-child(1) {
        transform: translateY(-30px) !important;
      }
      & > div:nth-child(2) {
        opacity: 1 !important;
        transform: translateY(-5px) !important;
      }
    }
    .active-circle {
      position: absolute;
      left: 0;
      top: -35px;
      width: 70px;
      height: 70px;
      background-color: orange;
      border-radius: 100%;
      transition: all 0.5s;
      box-sizing: border-box;
      border: 4px solid #222;
    }
    .circle-content {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .circle-content::before, .circle-content::after {
      content: '';
      width: 20px;
      height: 20px;
      position: absolute;
      top: 31px;
    }
    .circle-content::before {
      left: -20px;
      box-shadow: 0 -10px 0 0 #222;
      border-radius: 0 20px 0 0;
    }
    .circle-content::after {
      right: -20px;
      box-shadow: 0 -10px 0 0 #222;
      border-radius: 20px 0 0 0;
    }
  }
`

export default Demo28_4
