import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo25_1_2 = () => {

  return (
    <UnitContent title={`25_1_2 flex-grow:填充父元素空闲空间的比例    ||    flex-shark:缩小自身的比例使得整体不会溢出父元素    ||    flex-basis:设定基准宽度`}>
      <Wrapper>
        <div className={'second-part'}>
          <div className={'test-content'}>
            <div/><div/><div/><div/><div/><div/>
          </div>
          <div className={'divide-line'} />
          <div className={'test-content2'}>
            <div /><div /><div /><div />
            <div />
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  .second-part {
    display: flex;
    width: 100%;
  }
  .divide-line {
    border-right: 1px solid blueviolet;
    width: 1px;
    box-sizing: border-box;
    margin: 0 20px;
  }
  .test-content {
    width: 350px;
    height: 100px;
    border: 1px solid #c3c3c3;
    display: flex;
  }
  .test-content> div:nth-child(1) { flex-grow: 1; background: coral; }
  .test-content> div:nth-child(2) { flex-grow: 3; background-color:lightblue; }
  .test-content> div:nth-child(3) { flex-grow: 1; background-color:khaki; }
  .test-content> div:nth-child(4) { flex-grow: 1; background-color:pink; }
  .test-content> div:nth-child(5) { flex-grow: 1; background-color:lightgrey; }
  .test-content> div:nth-child(6) { flex-grow: 2; background-color: blueviolet; }
  
  .test-content2 {
    display: flex;
    width: 500px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid #c3c3c3;
  }
  .test-content2>div {
    flex-basis: 120px;
    border: 3px solid blueviolet;
    box-sizing: border-box;
  }
  .test-content2> div:nth-child(1) { flex-shrink: 1; background: coral; }
  .test-content2> div:nth-child(2) { flex-shrink: 1; background-color:lightblue; }
  .test-content2> div:nth-child(3) { flex-shrink: 1; background-color:khaki; }
  .test-content2> div:nth-child(4) { flex-shrink: 4; background-color:pink; }
  .test-content2> div:nth-child(5) { flex-shrink: 4; background-color:lightgrey; }
`

export default Demo25_1_2
