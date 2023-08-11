import React, { memo } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo14 = memo(() =>{
  return(
    <UnitContent unitTitle={'Demo14'}>
      <Wrapper>
        <div className={'demo-title'}>box-sizing</div>
        <div className={'demo-area'}>
          <div className={'demo-box'}>
            <div>box-sizing: content-box;</div>
          </div>
          <div className={'demo-box'}>
            <div>box-sizing: border-box;</div>
          </div>
          <div className={'tips'}>
            <div>{'content-box = content => 会直接往外扩'}</div>
            <div>{`border-box = content + padding + border =>会往里面挤压，如果不够了再往外扩`}</div>
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  .demo-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    font-size: 14px;
    font-weight: 700;
  }
  .demo-area {
    display: flex;
    flex-wrap: wrap;
  }
  .demo-area >: nth-child(1) {
    box-sizing: content-box;
    border: 10px solid #ECAD9E;
    padding: 10px;
  }
  .demo-area >: nth-child(2) {
    boz-sizing: border-box;
    border: 10px solid #19CAAD;
    padding: 10px;
  }
  .demo-area >: nth-child(1), .demo-area >: nth-child(2){
    background-color: lightblue;
  }
  .demo-box {
    width: 300px;
    height: 250px;
    margin: 10px;
    border: 1px solid #E6CEAC;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo-box >: nth-child(1) {
    width: 180px;
    height: 180px;
    background-color: green;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tips {
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
  }
`

export default Demo14
