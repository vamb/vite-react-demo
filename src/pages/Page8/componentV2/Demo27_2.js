import React, { useState } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Select, Form } from 'antd'

const Demo27_2 = () => {
  const [ disVal, setDisVal ] = useState('grid')

  return (
    <UnitContent title={'27_2 grid || inline-grid'}>
      <Wrapper>
        <div>
          <Form.Item label={'display'}>
            <Select
              style={{width: 200}}
              allowClear={false}
              value={disVal}
              onChange={e=>setDisVal(e)}
            >
              <Select.Option value={'grid'}>grid</Select.Option>
              <Select.Option value={'inline-grid'}>inline-grid</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className="container" style={{display: disVal}}>
          Text Node
          <div className="item">Grid项目</div>
          <div className="item">Grid项目</div>
          <div className="item">Grid项目</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  padding: 10px;
  background-color: #557;
  width: 100%;
  height: 100%;
  & > :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  } 
  .ant-form-item-label > label {
    color: #fff;
    font-weight: 700;
  }
  .container {
    // width: 100%;
    border: 3px solid #88978a;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
  .item {
    background: #e8f0fe;
    border: 2px solid #2938e9;
    border-radius: 4px;
    color: #000;
    padding: 10px;
  }
  .container::after {
    content: "After 伪元素";
    background-color: #ddefae;
    border: 2px solid #2938e9;
    border-radius: 4px;
    color: #000;
    padding: 10px;
  }
  .item:nth-child(2) {
    background-color: #efe1ff;
  }
  
  .item:nth-child(3) {
    background-color: #bbd7af;
  }
`

export default Demo27_2
