import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Page1Constant from "./Page1Constant";
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '@/utils/utils'
import { Tabs } from 'antd'
import {
  Example, Example2, Example4, Demo4_2,
  Example5, Example6, Example7,
  Demo1_9, Demo1_9_2, Demo1_9_3,
  Demo1_9_4, Demo1_9_5, Demo1_9_6, Demo1_9_7, Demo2_0, Demo2_1, Demo2_2,
  Demo7_0
} from "./Page1Idx"

const FirstPageCombine = () => {
  const [ activeKey, setActiveKey ] = useState(Page1Constant.TABS_MAP.TAB7.key)
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(Page1Constant.STORE_KEY, key)
  }

  useEffect(()=>{
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
    const storeKey = localStorage.getItem(Page1Constant.STORE_KEY)
    if(storeKey) {
      updateActiveKey(storeKey)
    }
    return ()=> localStorage.removeItem(Page1Constant.STORE_KEY)
  },[])

  return(
    <Wrapper>
      <Tabs
        defaultActiveKey={activeKey}
        onChange={updateActiveKey}
        items={[
          {
            label: Page1Constant.TABS_MAP.TAB1.label,
            key: Page1Constant.TABS_MAP.TAB1.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Example />
                <Example2 />
              </div>
            )
          },
          {
            label: Page1Constant.TABS_MAP.TAB2.label,
            key: Page1Constant.TABS_MAP.TAB2.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo4_2 />
                <Example4 />
              </div>
            )
          },
          {
            label: Page1Constant.TABS_MAP.TAB3.label,
            key: Page1Constant.TABS_MAP.TAB3.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Example5 />
                <Example6 />
                <Example7 />
              </div>
            )
          },
          {
            label: Page1Constant.TABS_MAP.TAB4.label,
            key: Page1Constant.TABS_MAP.TAB4.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo1_9 />
                <Demo1_9_2 />
                <Demo1_9_3 />
                <Demo1_9_4 />
                <Demo1_9_5 />
              </div>
            )
          },
          {
            label: Page1Constant.TABS_MAP.TAB5.label,
            key: Page1Constant.TABS_MAP.TAB5.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo1_9_6 />
                <Demo1_9_7 />
              </div>
            )
          },
          {
            label: Page1Constant.TABS_MAP.TAB6.label,
            key: Page1Constant.TABS_MAP.TAB6.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo2_0 />
                <Demo2_1 />
                <Demo2_2 />
              </div>
            )
          },
          {
            label: Page1Constant.TABS_MAP.TAB7.label,
            key: Page1Constant.TABS_MAP.TAB7.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo7_0 />
              </div>
            )
          },
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .flex-col {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .label-area {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .one-line {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
  }
  .w-half {
    width: 50%;
    height: 100%;
    align-self: stretch;
  }
  .w-three {
    width: 30%;
    height: 100%;
    align-self: stretch;
  }
  .info-icon {
    cursor: pointer;
    font-size: 1.5rem;
  }
  .child-holder {
    border: 1px dashed #232323;
    display: flex;
    padding: 1.5rem;
    justify-content: center;
    align-items: center;
  }
`

export default FirstPageCombine
