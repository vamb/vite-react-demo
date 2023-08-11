import React, { useState, useEffect, useMemo } from 'react'
import styled from "styled-components";
import { Form, Select, InputNumber } from 'antd'
import UnitContent from "../../components/UnitContent";

const { Item }= Form
const { Option } = Select
const initOrderVal = 1

const Demo27_4 = () => {
  const [ boxArr, setBoxArr ] = useState([])
  const [ justifyContentVal, setJustifyContent ] = useState('center')
  const [ alignContentVal, setAlignContent ] = useState('center')
  const [ alignItemsVal, setAlignItemsVal ] = useState('center')
  const [ boxNum , setBoxNum ] = useState(15)
  const [ flexDirectionVal, setFlexDirectionVal ] = useState('row')
  const [ targetOrderVal, setTargetOrderVal ] = useState(initOrderVal)
  const [ normalOrderVal, setNormalOrderVal ] = useState(initOrderVal)

  const initBoxArr = (num) => {
    const tempArr = []
    for(let i=0;i<num;i++){
      tempArr.push(
        <div
          key={`classic_2_box-${i}`}
          style={{ order: i===3? targetOrderVal: normalOrderVal, }}
          title={ i===3? 'Target': 'Normal' }
        >{ i===3? 'T': 'N' }
        </div>
      )
    }
    setBoxArr(tempArr)
  }

  useMemo(()=>{
    initBoxArr(boxNum)
  },[boxNum, targetOrderVal, normalOrderVal])

  useEffect(()=>{
    initBoxArr(boxNum)
  },[])

  return (
    <UnitContent title={'Demo27_4 flex demo'}>
      <Wrapper>
        <div className={'classic-2-ctl-group'}>
          <Form layout="inline" style={{height: '80px', lineHeight: '40px'}}>
            <Item label={'box-num'}>
              <InputNumber
                min={1} max={20} step={1} value={boxNum}
                style={{width: '120px'}} onChange={e=>setBoxNum(e)}
              />
            </Item>
            <Item label={'flex-direction'}>
              <Select
                allowClear={false}
                style={{width: '120px'}}
                value={flexDirectionVal}
                onChange={e=>setFlexDirectionVal(e)}
              >
                <Option value={'row'}>row</Option>
                <Option value={'column'}>column</Option>
              </Select>
            </Item>
            <Item label={'justify-content'}>
              <Select
                allowClear={false}
                style={{width: '120px'}}
                value={justifyContentVal}
                onChange={e=>setJustifyContent(e)}
              >
                <Option value={'start'}>start</Option>
                <Option value={'end'}>end</Option>
                <Option value={'center'}>center</Option>
                <Option value={'space-around'}>space-around</Option>
                <Option value={'space-between'}>space-between</Option>
              </Select>
            </Item>
            <Item label={'align-items'}>
              <Select
                allowClear={false}
                style={{width: '120px'}}
                value={alignItemsVal}
                onChange={e=>setAlignItemsVal(e)}
              >
                <Option value={'start'}>start</Option>
                <Option value={'end'}>end</Option>
                <Option value={'center'}>center</Option>
              </Select>
            </Item>
            <Item label={'align-content'}>
              <Select
                allowClear={false}
                style={{width: '120px'}}
                value={alignContentVal}
                onChange={e=>setAlignContent(e)}
              >
                <Option value={'start'}>start</Option>
                <Option value={'end'}>end</Option>
                <Option value={'center'}>center</Option>
                <Option value={'normal'}>normal</Option>
              </Select>
            </Item>
            <Item label={'target order'}>
              <InputNumber
                min={-1} max={3} step={1} value={targetOrderVal}
                style={{width: '120px'}} onChange={e=>setTargetOrderVal(e)}
              />
            </Item>
            <Item label={'normal order'}>
              <InputNumber
                min={-1} max={3} step={1} value={normalOrderVal}
                style={{width: '120px'}} onChange={e=>setNormalOrderVal(e)}
              />
            </Item>
          </Form>
        </div>
        <div
          className={'classic-2-content'}
          style={{
            justifyContent: justifyContentVal,
            alignItems: alignItemsVal,
            alignContent: alignContentVal,
            flexDirection: flexDirectionVal
          }}
        >
          {boxArr}
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  .classic-2-ctl-group {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .classic-2-content {
    width: 40%;
    min-width: 600px;
    min-height: 200px;
    max-height: 400px;
    border: 1px solid lightgray;
    border-radius: 4px;
    background-color: #1aa885;
    display: flex;
    padding: 5px;
    gap: 10px;
    flex-wrap: wrap;
  }
  .classic-2-content > div {
    background-color: #85c0be;
    width: 50px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #fff;
    user-select: none;
    cursor: pointer;
  }
`

export default Demo27_4
