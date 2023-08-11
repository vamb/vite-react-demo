import React, { useState } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Form, InputNumber } from 'antd'
import Demo25_4_3 from "./Demo25_4_3";

const Demo25_4 = () => {
  const [ orderVal, setOrderVal ] = useState(0)
  return (
    <UnitContent title={'Demo25_4'}>
      <Wrapper>
        <div className={'phone-view'}>
          <div className={'msg-unit'}>
            <div className={'img-area'} />
            <div className={'msg-content'}>
              <div className={'msg-title'}>UX Design</div>
              <div className={'msg-text'}>Make it easier to search and filter</div>
              <div className={'msg-sender'}>XXXXX</div>
            </div>
          </div>
          <div className={'msg-unit'}>
            <div className={'img-area'} />
            <div className={'msg-content'}>
              <div className={'msg-title'}>UX Design</div>
              <div className={'msg-text'}>Make it easier to search and filter</div>
              <div className={'msg-sender'}>XXXXX</div>
            </div>
          </div>
          <div className={'msg-unit'}>
            <div className={'img-area'} />
            <div className={'msg-content'}>
              <div className={'msg-title'}>UX Design</div>
              <div className={'msg-text'}>Make it easier to search and filter</div>
              <div className={'msg-sender'}>XXXXX</div>
            </div>
          </div>
          <div className={'msg-unit'}>
            <div className={'img-area'} />
            <div className={'msg-content'}>
              <div className={'msg-title'}>UX Design</div>
              <div className={'msg-text'}>Make it easier to search and filter</div>
              <div className={'msg-sender'}>XXXXX</div>
            </div>
          </div>
          <div className={'msg-unit'}>
            <div className={'img-area'} />
            <div className={'msg-content'}>
              <div className={'msg-title'}>UX Design</div>
              <div className={'msg-text'}>Make it easier to search and filter</div>
              <div className={'msg-sender'}>XXXXX</div>
            </div>
          </div>
          <div className={'msg-unit'}>
            <div className={'img-area'} />
            <div className={'msg-content'}>
              <div className={'msg-title'}>UX Design</div>
              <div className={'msg-text'}>Make it easier to search and filter</div>
              <div className={'msg-sender'}>XXXXX</div>
            </div>
          </div>
        </div>
        <div className={'flex-order-demo'}>
          <Form.Item label={'flex Order'}>
            <InputNumber
              style={{width: '150px'}}
              min={-1} max={1} step={1} value={orderVal}
              onChange={e=>setOrderVal(e)}
            />
          </Form.Item>
          <div className={'demo-box'} />
          <div className={'demo-box'} />
          <div className={'demo-box'} />
          <div className={'demo-box'} style={{order: orderVal}}>target</div>
          <div className={'demo-box'} />
        </div>
        <div className={'mark_3'}>
          <Demo25_4_3 />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 10px;
  & > div {
    border: 1px solid gray;
    border-radius: 6px;
    padding: 5px;
  }
  .phone-view {
    display: flex;
    flex-direction: column;
    & > .msg-unit:nth-child(2n) {
      flex-direction: row-reverse;
      & > .img-area {
        margin-left: 10px;
      }
    }
  }
  .msg-unit {
    display: flex;
    flex-direction: row;
    border: 1px solid gray;
    border-radius: 6px;
    padding: 5px;
    margin-bottom: 5px;
    .img-area {
      width: 70px;
      min-width: 70px;
      height: 70px;
      min-height: 70px;
      border-radius: 6px;
      background-color: lightblue;
      margin-right: 10px;
      box-sizing: border-box;
      border: 1px solid lightgray;
    }
    .msg-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      .msg-title {
        font-sizing: 14px;
        font-weight: 700;
        margin-bottom: 1px;
      }
      .msg-text {
        font-sizing: 18px;
        font-weight: 500;
      }
      .msg-sender {
        display: flex;
        justify-content: end;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
  .flex-order-demo {
    display: flex;
    flex-direction: column;
    gap: 10px 10px;
    background: lightyellow;
    & > .demo-box {
      width: 100%;
      height: 50px;
      border: 1px solid lightgray;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 700;
      color: #fff;
    }
    & > .demo-box:nth-child(2) {
      background-color: coral;
    }
    & > .demo-box:nth-child(3) {
     background-color: lightgreen;
    }
    & > .demo-box:nth-child(4) {
      background-color: pink;
    }
    & > .demo-box:nth-child(5) {
      background-color: lightblue;
    }
    & > .demo-box:nth-child(6) {
      background-color: lightseagreen;
    }
  }
 .mark_3 {
    grid-column-start: 3;
    grid-column-end: 5;
 } 
`

export default Demo25_4
