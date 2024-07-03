import React, { useState, useEffect } from 'react'
import PageConstant from "./PageConstant";
import { Demo9_1, Demo9_2, Demo9_2_index, Demo9_3, Demo9_4, Demo9_5, Demo9_6 } from './PageIndex'
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '@/utils/utils'
import styled from "styled-components";
import { Tabs } from 'antd'

const ReactPage9 = () =>{
  const [ activeKey, setActiveKey ] = useState(PageConstant.TABS_MAP.TAB4.key)
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
      <Tabs
        activeKey={activeKey} onChange={e=>updateActiveKey(e)}
        items={[
          {
            label: PageConstant.TABS_MAP.TAB1.label, key: PageConstant.TABS_MAP.TAB1.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo9_1 />
              </div>
            )
          },
          {
            label: PageConstant.TABS_MAP.TAB2.label, key: PageConstant.TABS_MAP.TAB2.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo9_2 />
              </div>
            )
          },
          {
            label: PageConstant.TABS_MAP.TAB3.label, key: PageConstant.TABS_MAP.TAB3.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <div className={'spec-tip'}>此页面有自己独立的createContext，被父的createContext包裹，可以正常使用</div>
                <Demo9_2_index />
              </div>
            )
          },
          {
            label: PageConstant.TABS_MAP.TAB4.label, key: PageConstant.TABS_MAP.TAB4.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo9_4 />
                <Demo9_5 />
                <Demo9_6 />
              </div>
            )
          },
        ]}
      >
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
