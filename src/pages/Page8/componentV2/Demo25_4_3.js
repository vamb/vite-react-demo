import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Form, Tabs, InputNumber, Tooltip, Image } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons';
import img11 from './assets/11.awebp'
import img12 from './assets/12.awebp'

const { TabPane } = Tabs
const SELF_TAB = {
  TAB1: { key: 'tab1', label: 'flex-grow', inlineSizeVal: 500 },
  TAB2: { key: 'tab2', label: 'flex-shrink', inlineSizeVal: 300 }
}

const DEFAULT = {
  FLEX_GROW: 0,
  TARGET_GROW: 0,
  FLEX_SHRINK: 0,
  TARGET_SHRINK: 0
}

const Demo25_4_3 = () => {
  const [ activeKey, setActiveKey ] = useState(SELF_TAB.TAB1.key)
  const [ inlineSizeVal, setInlineSizeVal ] = useState(SELF_TAB.TAB1.inlineSizeVal)

  const [ flexGrowVal, setFlexGrowVal ] = useState(DEFAULT.FLEX_GROW)
  const [ targetGrowVal, setTargetGrowVal ] = useState(DEFAULT.TARGET_GROW)

  const [ flexShrinkVal, setFlexShrinkVal ] = useState(DEFAULT.FLEX_SHRINK)
  const [ targetShrinkVal, setTargetShrinkVal ] = useState(DEFAULT.TARGET_SHRINK)

  useEffect(()=>{
    if(SELF_TAB.TAB1.key === activeKey){
      setFlexShrinkVal(DEFAULT.FLEX_SHRINK)
      setTargetShrinkVal(DEFAULT.TARGET_SHRINK)
      setInlineSizeVal(SELF_TAB.TAB1.inlineSizeVal)
    }else{
      setFlexGrowVal(DEFAULT.FLEX_GROW)
      setTargetGrowVal(DEFAULT.TARGET_GROW)
      setInlineSizeVal(SELF_TAB.TAB2.inlineSizeVal)
    }
  },[activeKey])

  return (
    <Wrapper>
      <Tabs activeKey={activeKey} onChange={e=>setActiveKey(e)}>
        <TabPane tab={SELF_TAB.TAB1.label} key={SELF_TAB.TAB1.key}>
          <Form layout={'inline'}>
            <Form.Item label={'flex-grow'}>
              <InputNumber
                style={{width: '100%'}} step={1}
                min={0} max={1} value={flexGrowVal}
                onChange={e=>setFlexGrowVal(e)}
              />
            </Form.Item>
            <Form.Item label={"Book's flex-grow"}>
              <InputNumber
                style={{width: '100%'}} step={1}
                min={0} max={3} value={targetGrowVal}
                onChange={e=>setTargetGrowVal(e)}
              />
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab={SELF_TAB.TAB2.label} key={SELF_TAB.TAB2.key}>
          <Form layout={'inline'}>
            <Form.Item label={'flex-shrink'}>
              <InputNumber
                style={{width: '100%'}} step={1}
                min={0} max={1} value={flexShrinkVal}
                onChange={e=>setFlexShrinkVal(e)}
              />
            </Form.Item>
            <Form.Item label={"Book's flex-shrink"}>
              <InputNumber
                style={{width: '100%'}} step={1}
                min={0} max={3} value={targetShrinkVal}
                onChange={e=>setTargetShrinkVal(e)}
              />
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
      <div className={'flex-size-demo'}>
        <div className={'main-content'} style={{inlineSize: `${inlineSizeVal}px`}}>
          <div
            className={'item-unit'} title={'A long long word'}
            style={{flexGrow: flexGrowVal, flexShrink: flexShrinkVal}}>
            <div className={'word-start'}>A</div>
            <div className={'word-main'}>longlongword</div>
          </div>
          <div
            className={'item-unit'}  title={'book'}
            style={{flexGrow: targetGrowVal, flexShrink: targetShrinkVal}}>
            <div className={'word-start'}>B</div>
            <div className={'word-main'}>ook</div>
          </div>
          <div
            className={'item-unit'} title={'Countries in the east'}
            style={{flexGrow: flexGrowVal, flexShrink: flexShrinkVal}}>
            <div className={'word-start'}>C</div>
            <div className={'word-main'}>ountries in the east</div>
          </div>
          <div
            className={'item-unit'} title={'Discuss'}
            style={{flexGrow: flexGrowVal, flexShrink: flexShrinkVal}}>
            <div className={'word-start'}>D</div>
            <div className={'word-main'}>iscuss</div>
          </div>
          <div
            className={'item-unit'} title={'Eastern'}
            style={{flexGrow: flexGrowVal, flexShrink: flexShrinkVal}}>
            <div className={'word-start'}>E</div>
            <div className={'word-main'}>astern</div>
          </div>
        </div>
      </div>
      <div className={'images'}>
        <div><Image width={280} src={img11} /></div>
        <div><Image width={280} src={img12} /></div>
      </div>
      <div className={'tips-unit'}>
        <Tooltip
          title={
            SELF_TAB.TAB1.key === activeKey?
              'flex-grow 使得子元素得以按照设定的值去分配父元素剩余的空间':
              'flex-shrink 使得子元素按照设定好的比较缩小其宽度'
          }
        ><InfoCircleOutlined style={{fontSize: '24px'}} />
        </Tooltip>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  place-content: center;
  position: relative;
  height: 100%;
  .flex-size-demo {
    .main-content {
      display: flex;
      border-radius: 4px;
      border: 1px dashed #000;
      flex-wrap: nowrap;
      overflow: hidden;
      .item-unit {
        padding: 5px;
        display: flex;
        align-items: baseline;
        flex-basis: auto;
      }
      .word-start {
        font-size: 24px;
        font-weight: 700;
      }
      .word-main {
        font-size: 14px;
        font-weight: 500;
      }
      &>:nth-child(1) {
        background-color: hsl(270.4 95.1% 84.1%);
      }
      &>:nth-child(2) {
        background-color: hsl(177 70.1% 84.1%);
      }
      &>:nth-child(3) {
        background-color: hsl(60 90.1% 80.1%);
      }
      &>:nth-child(4) {
        background-color: hsl(90 90.1% 84.1%);
      }
      &>:nth-child(5) {
        background-color: hsl(6.2, 85.1%, 84.1%);
      }
    }
  }
  .tips-unit {
    position: absolute;
    top: 66px;
    right: 25px;
    cursor: pointer;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 10px 10px;
    place-content: center;
  }
`

export default Demo25_4_3
