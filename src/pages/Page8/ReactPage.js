import React, { useState, useEffect } from 'react'
import TestConstant from "./TestConstant";
import { Tabs } from 'antd'
import styled from "styled-components";
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '../utils/utils'

import {
  SinglePage, Demo1, Demo2, Demo3, Demo3_1, Demo3_2, Demo3_3, Demo4,
  Demo5, Demo6, Demo7, Demo8, Demo8_2, Demo8_3, Demo8_4, Demo9,
  Demo10, Demo11, Demo12, Demo13, Demo14, Demo15, Demo15_2, Demo16,
  Demo17, Demo18, Demo19, Demo20, Demo21, Demo22, Demo23, Demo23_5,
  Demo23_6, Demo24, Demo25, Demo25_1_2, Demo25_2, Demo25_3, Demo25_4,
  Demo26, Demo27, Demo27_1, Demo27_2, Demo27_3, Demo27_4, Demo27_5, Demo28_1,
  Demo28_2, Demo28_3, Demo28_4, Demo28_5, Demo28_6, Demo28_7, Demo28_8, Demo28_9,
  Demo28_10, Demo29_0, Demo29_1, Demo29_2, Demo30_0, Demo30_1,
  Demo31_0, Demo31_1, Demo31_2, Demo30_2, Demo30_3, Demo31_3,
  Demo28_11, Demo28_12, Demo28_13, Demo28_14, Demo28_15, Demo28_16, Demo28_17, Demo29_3,
  Demo32_0, Demo32_1, Demo32_2, Demo32_3, Demo32_4, Demo33_0, Demo34_0, Demo34_1, Demo34_2,
  Demo35,
} from './PageIndex'

const ReactPage = () =>{
  const [ activeKey, setActiveKey ] = useState(TestConstant.TABS_MAP.TAB16.key)
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  const updateActiveKey = (key) =>{
    setActiveKey(key)
    localStorage.setItem(TestConstant.STORE_KEY, key)
  }

  useEffect(()=>{
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
    const storeKey = localStorage.getItem(TestConstant.STORE_KEY)
    if(storeKey){
      updateActiveKey(storeKey)
    }
    return ()=>{
      localStorage.removeItem(TestConstant.STORE_KEY)
    }
  },[])

  return (
    <Wrapper>
      <Tabs
        defaultActiveKey={activeKey}
        onChange={e=>updateActiveKey(e)}
        items={[
          {
            label: TestConstant.TABS_MAP.TAB1.label,
            key: TestConstant.TABS_MAP.TAB1.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo1 />
                <Demo2 />
                <Demo3 />
                <Demo3_1 />
                <Demo3_2 />
                <Demo3_3 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB2.label,
            key: TestConstant.TABS_MAP.TAB2.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo4 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB3.label,
            key: TestConstant.TABS_MAP.TAB3.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo5 />
                <Demo6 />
                <Demo7 />
                <Demo8 />
                <Demo8_2 />
                <Demo8_3 />
                <Demo8_4 />
                <Demo9 />
                <Demo27_2 />
                <Demo27_3 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB4.label,
            key: TestConstant.TABS_MAP.TAB4.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo10 />
                <Demo11 />
                <Demo12 />
                <Demo13 />
                <Demo14 />
                <Demo15 />
                <Demo15_2 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB5.label,
            key: TestConstant.TABS_MAP.TAB5.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo16 />
                <Demo17 />
                <Demo18 />
                <Demo19 />
                <Demo20 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB6.label,
            key: TestConstant.TABS_MAP.TAB6.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo21 />
                <Demo22 />
                <Demo23 />
                <Demo23_5 />
                <Demo23_6 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB7.label,
            key: TestConstant.TABS_MAP.TAB7.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo24 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB8.label,
            key: TestConstant.TABS_MAP.TAB8.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo25 />
                <Demo25_1_2 />
                <Demo25_2 />
                <Demo25_3 />
                <Demo25_4 />
                <Demo26 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB9.label,
            key: TestConstant.TABS_MAP.TAB9.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo27 />
                <Demo27_1 />
                <Demo27_4 />
                <Demo27_5 />
                {/*<Demo27_6 />*/}
                {/*<Demo27_7 />*/}
                {/*<Demo27_8 />*/}
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB10.label,
            key: TestConstant.TABS_MAP.TAB10.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo33_0 />
                <Demo28_17 />
                <Demo28_16 />
                <Demo28_15 />
                <Demo28_14 />
                <Demo28_13 />
                <Demo28_12 />
                <Demo28_1 />
                <Demo28_2 />
                <Demo28_3 />
                <Demo28_4 />
                <Demo28_5 />
                <Demo28_6 />
                <Demo28_7 />
                <Demo28_8 />
                <Demo28_9 />
                <Demo28_10 />
                <Demo28_11 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB13.label,
            key: TestConstant.TABS_MAP.TAB13.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo31_0 />
                <Demo31_1 />
                <Demo31_2 />
                <Demo31_3 />
                <Demo30_2 />
                <Demo30_3 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB11.label,
            key: TestConstant.TABS_MAP.TAB11.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo29_0 />
                <Demo29_3 />
                <Demo29_1 />
                <Demo29_2 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB12.label,
            key: TestConstant.TABS_MAP.TAB12.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo30_0 />
                <Demo30_1 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB14.label,
            key: TestConstant.TABS_MAP.TAB14.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo32_3 />
                <Demo32_4 />
                <Demo32_0 />
                <Demo32_1 />
                <Demo32_2 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB15.label,
            key: TestConstant.TABS_MAP.TAB15.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo34_0 />
                <Demo34_1 />
                <Demo34_2 />
              </div>
            )
          },
          {
            label: TestConstant.TABS_MAP.TAB16.label,
            key: TestConstant.TABS_MAP.TAB16.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <SinglePage />
                <Demo35 />
              </div>
            )
          }
        ]}
      />
      <div className={'fixed-demo'}>fixed position</div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .fixed-demo {
    // 这玩意儿的表现和absolute一样，都是后面的元素可以覆盖前面的元素，要么html放在最后，要么设置z-index
    position: fixed; 
    // z-index: 1;
    bottom: 50px; 
    right: 40px;
    padding: 3px 5px;
    // width: 100px;
    // height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
    color: #fff;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
  }
`

export default ReactPage
