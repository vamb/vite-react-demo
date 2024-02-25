import React, { useState, useEffect } from 'react'
import Demo1 from "./demo1/demo1";
import Demo2 from './demo2/demo2'
import styled from "styled-components";
import { Tabs } from 'antd'
import Constant6 from "./Constant6";
import Demo3 from './Demo3'
import Demo4 from "./component/Demo4";
import Demo5 from "./component/Demo5";
import Demo6 from "./component/Demo6";
import Demo7 from "./component/Demo7";
import Demo8Page from "./component/Demo8Index";
import Demo9 from "./component/Demo9";
import Demo10 from "./component/Demo10";
import Demo6_5_1 from "./IndexedDB/Demo6_5_1";
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '../utils/utils'

const { TabPane } = Tabs

const Page6 = () =>{
  const [ pageKey, setPageKey ] = useState(KEYS.DEMO1)
  const [ activeKey, setActiveKey ] = useState(Constant6.TABS_MAP.TAB5.key)
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  const updateActiveKey = key =>{
    setActiveKey(key)
    localStorage.setItem(Constant6.STORE_KEY, key)
  }

  useEffect(()=>{
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
    const storeKey = localStorage.getItem(Constant6.STORE_KEY)
    if(storeKey){
      updateActiveKey(storeKey)
    }
    return ()=>{
      localStorage.removeItem(Constant6.STORE_KEY)
    }
  },[])

  return(
    <Wrapper>
      <Tabs activeKey={activeKey} onChange={(e)=>updateActiveKey(e)}>
        <TabPane tab={Constant6.TABS_MAP.TAB1.label} key={Constant6.TABS_MAP.TAB1.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <div className={'btn-group'}>
              <button className={'self-btn'} onClick={()=>setPageKey(KEYS.DEMO1)}>Demo1</button>
              <button className={'self-btn'} onClick={()=>setPageKey(KEYS.DEMO2)}>Demo2</button>
            </div>
            <div className={'page-content'}>
              {
                pageKey && KEYS.DEMO1 === pageKey &&
                <Demo1 />
              }
              {
                pageKey && KEYS.DEMO2 === pageKey &&
                <Demo2 />
              }
            </div>
          </div>
        </TabPane>
        <TabPane tab={Constant6.TABS_MAP.TAB2.label} key={Constant6.TABS_MAP.TAB2.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo3 />
            <Demo4 />
            <Demo5 />
            <Demo6 />
            <Demo7 />
          </div>
        </TabPane>
        <TabPane tab={Constant6.TABS_MAP.TAB3.label} key={Constant6.TABS_MAP.TAB3.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo8Page />
          </div>
        </TabPane>
        <TabPane tab={Constant6.TABS_MAP.TAB4.label} key={Constant6.TABS_MAP.TAB4.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo9 />
            <Demo10 />
          </div>
        </TabPane>
        <TabPane tab={Constant6.TABS_MAP.TAB5.label} key={Constant6.TABS_MAP.TAB5.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo6_5_1 />
          </div>
        </TabPane>
      </Tabs>
    </Wrapper>
  )
}

const KEYS = {
  DEMO1: 'demo1',
  DEMO2: 'demo2'
}

const Wrapper = styled('div')`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  .btn-group {
    display: flex;
    margin-bottom: 10px;
  }
  .self-btn {
    margin-right: 10px;
  }
`

export default Page6
