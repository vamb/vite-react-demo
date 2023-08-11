import React from 'react'
import styled from "styled-components"
import UnitContent from "../../components/UnitContent";

const Demo25_2 = () => {
  return (
    <UnitContent title={'Demo25_2 box-sizing'}>
      <Wrapper>
        <div className={'common-box'}>
          <div>
            <div>content-box</div>
          </div>
          <div>
            <div>border-box</div>
          </div>
          <div className={'unit-tips'}>width: 300px</div>
        </div>
        <div className={'padding-box'}>
          <div style={{padding: '50px', boxSizing: 'content-box'}}>
            <div>content-box</div>
          </div>
          <div style={{padding: '50px', boxSizing: 'border-box'}}>
            <div>border-box</div>
          </div>
          <div className={'unit-tips'}>add padding: 50px</div>
        </div>
        <div className={'border-box'}>
          <div style={{border: '30px solid blue', boxSizing: 'content-box'}}>
            <div>content-box</div>
          </div>
          <div style={{border: '30px solid blue', boxSizing: 'border-box'}}>
            <div>border-box</div>
          </div>
          <div className={'unit-tips'}>add border: 30px</div>
        </div>
        <div className={'border-padding-box'}>
          <div style={{padding: '50px',border: '30px solid blue', boxSizing: 'content-box'}}>
            <div>content-box</div>
          </div>
          <div style={{padding: '50px',border: '30px solid blue', boxSizing: 'border-box'}}>
            <div>border-box</div>
          </div>
          <div className={'unit-tips'}>add padding: 50px + add border: 30px</div>
        </div>
        <div className={'outer-border'} />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  position: relative;
  .outer-border {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid red;
    height: 100%;
    background: transparent;
    width: 310px;
  }
  & > div {
    background: lightblue;
    border: 1px solid lightgray;
    padding: 30px;
    border-radius: 4px;
  }
  .common-box, .border-box, .padding-box, .border-padding-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    position: relative;
    & > div {
      margin: 5px;
      width: 300px;
      height: 20px;
      align-items: center;
      text-align: center;
      background: orange;
      & > div {
        background: #fff;
      }
    }
  }
  .unit-tips {
    position: absolute;
    left: 20px;
    top: 20px;
    background: transparent !important;
    font-size: 18px;
    font-weight: 700;
    width: 350px !important;
  }
`

export default Demo25_2
