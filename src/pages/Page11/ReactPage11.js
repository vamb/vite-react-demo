import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Tabs } from 'antd'
import P11Constant from "./P11Constant";
import Demo11_01 from "./component/Demo11_01";
import Demo11_02 from "./component/Demo11_02";
import Demo11_03 from "./component/Demo11_03";
import Demo11_04 from "./component/Demo11_04";
import Demo11_05 from "./component/Demo11_05";
import Demo11_06 from "./component/Demo11_06";
import Demo11_07 from "./component/Demo11_07";
import Demo11_08 from "./component/Demo11_08";
import Demo11_09 from "./component/Demo11_09";
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '../utils/utils'

const { TabPane } = Tabs

const ReactPage11 = () => {
  const [ activeKey, setActiveKey ] = useState(P11Constant.TABS_MAP.TAB2.key)
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(P11Constant.STORE_KEY, key)
  }

  useEffect(()=>{
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
    const storeKey = localStorage.getItem(P11Constant.STORE_KEY)
    if(storeKey) {
      updateActiveKey(storeKey)
    }
    return ()=> {
      localStorage.removeItem(P11Constant.STORE_KEY)
    }
  },[])

  return(
    <Wrapper>
      <Tabs activeKey={activeKey} onChange={e=>updateActiveKey(e)}>
        <TabPane tab={P11Constant.TABS_MAP.TAB1.label} key={P11Constant.TABS_MAP.TAB1.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo11_01 />
            <Demo11_02 name={'test name'} />
          </div>
        </TabPane>
        <TabPane tab={P11Constant.TABS_MAP.TAB2.label} key={P11Constant.TABS_MAP.TAB2.key}>
          <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
            <Demo11_03 />
            <Demo11_04 />
            <Demo11_05 />
            <Demo11_06 />
            <Demo11_07 />
            <Demo11_08 />
            <Demo11_09 />
          </div>
        </TabPane>
      </Tabs>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default ReactPage11
