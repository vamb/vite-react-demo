import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Tabs } from 'antd'
import P10Constant from "./P10Constant";
import Demo10_1 from "./component/Demo10_1";
import Demo10_2 from "./component/Demo10_2";
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '@/utils/utils'

const { TabPane } = Tabs

const ReactPage10 = () => {
  const [ activeKey, setActiveKey ] = useState(P10Constant.TABS_MAP.TAB2.key)
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(P10Constant.STORE_KEY, key)
  }

  useEffect(()=>{
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
    const storeKey = localStorage.getItem(P10Constant.STORE_KEY)
    if(storeKey){
      updateActiveKey(storeKey)
    }
    return () => {
      localStorage.removeItem(P10Constant.STORE_KEY)
    }
  },[])

  return (
    <Wrapper>
      <Tabs activeKey={activeKey} onChange={e=>updateActiveKey(e)}>
        <TabPane tab={P10Constant.TABS_MAP.TAB1.label} key={P10Constant.TABS_MAP.TAB1.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo10_1 />
          </div>
        </TabPane>
        <TabPane tab={P10Constant.TABS_MAP.TAB2.label} key={P10Constant.TABS_MAP.TAB2.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo10_2 />
          </div>
        </TabPane>
      </Tabs>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default ReactPage10
