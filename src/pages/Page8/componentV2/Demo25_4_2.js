import React, { useState } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Form, InputNumber } from 'antd'

const Demo25_4_2 = () => {
  const [ orderVal, setOrderVal ] = useState(0)

  return (
    <Wrapper>
      <UnitContent title={'Demo25_4_2'}>
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
      </UnitContent>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .flex-order-demo {
    padding: 2rem;
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
`

export default Demo25_4_2
