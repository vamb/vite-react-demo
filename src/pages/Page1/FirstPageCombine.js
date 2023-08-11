import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Page1Constant from "./Page1Constant";
import { Tabs } from 'antd'
import Example from "./Example";
import Example2 from "./Example2";
import Example3 from "./Example3/Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";
import Example6 from "./Example6";
import Example7 from "./Example7/Example7";
import Example8 from "./Example8/Example8";
import Demo1_9 from "./Demo1_9";
import Demo1_9_2 from "./Demo1_9_2";
import Demo1_9_3 from "./Demo1_9_3";
import Demo1_9_4 from './Demo1_9_4/App'
import Demo1_9_5 from './Demo1_9_5/App'
import Demo1_9_6 from './Demo1_9_6/App'
import Demo1_9_7 from './Demo1_9_7/App'
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '../utils/utils'

const FirstPageCombine = () => {
  const [ activeKey, setActiveKey ] = useState(Page1Constant.TABS_MAP.TAB3.key)
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
                <Example3 />
                <Example4 />
                <Example5 />
                <Example6 />
                <Example7 />
                <Example8 />
              </div>
            )
          },
          {
            label: Page1Constant.TABS_MAP.TAB2.label,
            key: Page1Constant.TABS_MAP.TAB2.key,
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
            label: Page1Constant.TABS_MAP.TAB3.label,
            key: Page1Constant.TABS_MAP.TAB3.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo1_9_6 />
                <Demo1_9_7 />
              </div>
            )
          }
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default FirstPageCombine
