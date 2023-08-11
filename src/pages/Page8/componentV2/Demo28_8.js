import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo28_8 = () => {
  return (
    <UnitContent title={'28_8 爱心'}>
      <Wrapper>
        <div className={'shape-content'}>
          <div /><div /><div />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #222;
  .shape-content {
    width: 200px;
    height: 200px;
    position: relative;
    background: lightyellow;
    transition: all 0.2s;
    & > div:nth-child(1) {
      width: 50%;
      height: 50%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -21%) rotate(45deg);
      background-color: #ff5d47;
      transition: all 0.2s;
      border-bottom-right-radius: 4px;
    }
    & > div:nth-child(2) {
      position: absolute;
      background: #ff5d47;
      width: 50%;
      height: 50%;
      top: 20%;
      left: 5%;
      border-radius: 100%;
      transition: all 0.2s;
    }
    & > div:nth-child(3) {
      position: absolute;
      background: #ff5d47;
      width: 50%;
      height: 50%;
      top: 20%;
      right: 5%;
      border-radius: 100%;
      transition: all 0.2s;
    }
  }
`

export default Demo28_8
