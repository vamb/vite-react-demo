import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import Page2Constant from "./Page2Constant";
import styled from "styled-components";
import SelfCount from "./SelfCount/SelfCount";
import PracticeMemo from "./PraciticeMemo/PracticeMemo";
import TwoUseEffect from "./TwoUseEffect";
import BigTest from "./BigTest";
import Comp from "./BigTest/Comp";
import Demo2_1 from "./Demo2_1";
import Demo2_2 from "./Demo2_2";
import Demo2_3 from "./Demo2_3";
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '@/utils/utils'

const SecondPageCombine = () => {
  const [ activeKey, setActiveKey ] = useState(Page2Constant.P2_TABS_MAP.TAB2.key)
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(Page2Constant.STORE_KEY, key)
  }

  useEffect(()=>{
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
    const storeKey = localStorage.getItem(Page2Constant.STORE_KEY)
    if(storeKey) {
      updateActiveKey(storeKey)
    }
    return () => localStorage.removeItem(Page2Constant.STORE_KEY)
  },[])

  return (
    <Wrapper>
      <Tabs
        defaultActiveKey={activeKey}
        onChange={updateActiveKey}
        items={[
          {
            label: Page2Constant.P2_TABS_MAP.TAB1.label,
            key: Page2Constant.P2_TABS_MAP.TAB1.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <SelfCount />
                <PracticeMemo />
                <TwoUseEffect />
                <BigTest />
                <Comp />
              </div>
            )
          },
          {
            label: Page2Constant.P2_TABS_MAP.TAB2.label,
            key: Page2Constant.P2_TABS_MAP.TAB2.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo2_1 />
                <Demo2_2 />
                <Demo2_3 />
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

export default SecondPageCombine
