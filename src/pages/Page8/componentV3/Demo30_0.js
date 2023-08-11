import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo30_0 = () => {
  return (
    <UnitContent title={'30_0 perspective:透视 translateZ 可以实现一定的视差效果'}>
      <Wrapper>
        <div className={'box-1'}>
          <div /><div />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #557;
  .box-1 {
    width: 150px;
    height: 150px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid lightgray;
    border-radius: 6px;
    cursor: pointer;
    & > div {
      position: absolute;
      top: 35px;
      left: 35px;
      width: 80px;
      height: 80px;
      box-sizing: border-box;
      border-radius: 6px;
      transition: all 0.5s;
    }
  }
  .box-1 > :nth-child(1) {
    background-color: #2ecc71;
    transform: perspective(900px) rotateY(45deg);
  }
  .box-1 > :nth-child(2) {
    background-color: #e67e22;
    transform: perspective(900px) rotateY(45deg) translate3D(0%, 0%, 0px);
  }
  .box-1:hover > :nth-child(1) {
    transform: perspective(900px) rotateY(45deg) translate3D(60%, 60%, 600px);
  }
`

export default Demo30_0
