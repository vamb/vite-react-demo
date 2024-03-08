import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Tabs } from 'antd'
import PageConstant from "./PageConstant";
import Demo9_1 from './component/Demo9_1'
import Demo9_2 from "./component/Demo9_2";
import Demo9_2_index from "./component/Demo9_2_index";
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '@/utils/utils'

const { TabPane } = Tabs

const ReactPage9 = () =>{
  const [ activeKey, setActiveKey ] = useState(PageConstant.TABS_MAP.TAB1.key)
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(PageConstant.STORE_KEY, key)
  }

  useEffect(()=> {
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
    const storeKey = localStorage.getItem(PageConstant.STORE_KEY)
    if(storeKey){
      updateActiveKey(storeKey)
    }
    return ()=>{
      localStorage.removeItem(PageConstant.STORE_KEY)
    }
  },[])

  return (
    <Wrapper>
      <Tabs activeKey={activeKey} onChange={e=>updateActiveKey(e)}>
        <TabPane tab={PageConstant.TABS_MAP.TAB1.label} key={PageConstant.TABS_MAP.TAB1.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo9_1 />
          </div>
        </TabPane>
        <TabPane tab={PageConstant.TABS_MAP.TAB2.label} key={PageConstant.TABS_MAP.TAB2.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo9_2 />
          </div>
        </TabPane>
        <TabPane tab={PageConstant.TABS_MAP.TAB3.label} key={PageConstant.TABS_MAP.TAB3.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <div className={'spec-tip'}>此页面有自己独立的createContext，被父的createContext包裹，可以正常使用</div>
            <Demo9_2_index />
          </div>
        </TabPane>
      </Tabs>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .spec-tip {
    position: absolute;
    top: 0px;
    font-size: 12px;
    font-weight: 700;
  }
`

export default ReactPage9
