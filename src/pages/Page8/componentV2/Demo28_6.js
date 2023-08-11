import React, { useState, useMemo } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo28_6 = () => {
  const [isCtlActive, setIsCtlActive] = useState(false)
  const [chosenIdx, setChosenIdx] = useState(0)

  useMemo(()=>{
    if(!isCtlActive){
      setChosenIdx(0)
    }
  },[isCtlActive])

  return (
    <UnitContent title={'28_6 旋转菜单'}>
      <Wrapper>
        <div className={'main-content'}>
          <div>
            <div
              className={'ring-content'}
              style={
                isCtlActive?
                  { transform: 'scale(1)', }:
                  { transform: 'scale(0)', }
              }
            >
              <div onClick={()=>{setChosenIdx(1)}}>
                <span className="iconfont icon">&#xe658;</span>
              </div>
              <div onClick={()=>{setChosenIdx(2)}}>
                <span className="iconfont icon">&#xe611;</span>
              </div>
              <div onClick={()=>{setChosenIdx(3)}}>
                <span className="iconfont icon">&#xe617;</span>
              </div>
              <div onClick={()=>{setChosenIdx(4)}}>
                <span className="iconfont icon">&#xe69d;</span>
              </div>
              <div onClick={()=>{setChosenIdx(5)}}>
                <span className="iconfont icon">&#xe65d;</span>
              </div>
              <div onClick={()=>{setChosenIdx(6)}}>
                <span className="iconfont icon">&#xe65e;</span>
              </div>
              <div onClick={()=>{setChosenIdx(7)}}>
                <span className="iconfont icon">&#xe698;</span>
              </div>
              <div onClick={()=>{setChosenIdx(8)}}>
                <span className="iconfont icon">&#xe65c;</span>
              </div>
              <div
                className={'active-box'}
                style={{
                  transform: `rotate(${chosenIdx>0? (chosenIdx-1)*45: 0}deg) translateX(${chosenIdx > 0? -70: 0}px) scale(${chosenIdx > 0? 1: 0})`
                }}
              />
            </div>
          </div>
          <div>
            <div
              className={'ctl-content'}
              onClick={()=>setIsCtlActive(!isCtlActive)}
            >
              <span
                className="iconfont"
                style={
                  isCtlActive?
                    { transform: 'scale(1) rotate(135deg)', }:
                    { transform: 'scale(1.5)', }
                }
              >&#xe662;</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  height: 300px;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  .iconfont {
    user-select: none;
    cursor: pointer;
  }
  .icon {
    font-size: 28px;
    transition: all 0.5s;
  }
  .main-content {
    width: 200px;
    height: 200px;
    // background-color: lightblue;
    position: relative;
    & > div:nth-child(1) {
      width: 200px;
      height: 200px;
      // background-color: lightgreen;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    & > div:nth-child(2) {
      width: 60px;
      height: 60px;
      position: absolute;
      border-radius: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .ring-content {
    width: 100%;
    height: 100%;
    background-color: #bd9d62;
    filter: drop-shadow(0px 0px 8px orange);
    border-radius: 100%;
    transition: all 0.5s;
    position: relative;
    .active-box {
      position: absolute;
      top: calc(100px - 25px);
      left: calc(100px - 25px);
      width: 50px;
      height: 50px;
      background-color: orange;
      border: 5px solid #222;
      border-radius: 100%;
      // transform: translateX(-70px);
      transform: scale(0);
      transition: all 0.3s;
    }
    & > div {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: calc(100px - 20px);
      left: calc(100px - 20px);
    }
    & > div:nth-child(1) {
      z-index: 2;
      transform: translateX(-70px);
    }
    & > div:nth-child(2) {
      z-index: 2;
      transform: rotate(45deg) translateX(-70px);
      .iconfont {
        transform: rotate(-45deg);
      }
    }
    & > div:nth-child(3) {
      z-index: 2;
      transform: rotate(calc(45deg*2)) translateX(-70px);
      .iconfont {
        transform: rotate(calc(-45deg*2));
      }
    }
    & > div:nth-child(4) {
      z-index: 2;
      transform: rotate(calc(45deg*3)) translateX(-70px);
      .iconfont {
        transform: rotate(calc(-45deg*3));
      }
    }
    & > div:nth-child(5) {
      z-index: 2;
      transform: rotate(calc(45deg*4)) translateX(-70px);
      .iconfont {
        transform: rotate(calc(-45deg*4));
      }
    }
    & > div:nth-child(6) {
      z-index: 2;
      transform: rotate(calc(45deg*5)) translateX(-70px);
      .iconfont {
        transform: rotate(calc(-45deg*5));
      }
    }
    & > div:nth-child(7) {
      z-index: 2;
      transform: rotate(calc(45deg*6)) translateX(-70px);
      .iconfont {
        transform: rotate(calc(-45deg*6));
      }
    }
    & > div:nth-child(8) {
      z-index: 2;
      transform: rotate(calc(45deg*7)) translateX(-70px);
      .iconfont {
        transform: rotate(calc(-45deg*7));
      }
    }
  }
  .ctl-content {
    width: 100%;
    height: 100%;
    background-color: #222;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    & > .iconfont {
      transition: all 0.5s;
      width: 100%;
      height: 100%;
      font-size: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
  }
`

export default Demo28_6
