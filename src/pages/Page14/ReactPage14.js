import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Tabs } from 'antd'
import P14Constant from "./P14Constant";
import Demo14_1 from "./component/Demo14_1";
import Demo14_2 from "./component/Demo14_2";
import Demo14_3 from "./component/Demo14_3";
import Demo14_4 from "./component/Demo14_4";
import Demo14_5 from "./component/Demo14_5";
import Demo14_6 from './component/Demo14_6'
import Demo14_7 from "./component/Demo14_7";
import Demo14_8 from "./component/Demo14_8";
import Demo14_9 from "./component/Demo14_9";
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '../utils/utils'

const ReactPage14 = () => {
  const [ activeKey, setActiveKey ] = useState(P14Constant.TABS_MAP.TAB3.key)
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(P14Constant.STORE_KEY, key)
  }

  useEffect(()=>{
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
    const storeKey = localStorage.getItem(P14Constant.STORE_KEY)
    if(storeKey){
      updateActiveKey(storeKey)
    }
    return () => {
      localStorage.removeItem(P14Constant.STORE_KEY)
    }
  },[])

  return (
    <Wrapper>
      <Tabs
        defaultActiveKey={activeKey}
        onChange={e=>updateActiveKey(e)}
        items={[
          {
            label: P14Constant.TABS_MAP.TAB1.label,
            key: P14Constant.TABS_MAP.TAB1.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo14_1 />
                <Demo14_2 />
                <Demo14_3 />
                <Demo14_4 />
                <Demo14_5 />
              </div>
            )
          },
          {
            label: P14Constant.TABS_MAP.TAB2.label,
            key: P14Constant.TABS_MAP.TAB2.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo14_6 />
              </div>
            )
          },
          {
            label: P14Constant.TABS_MAP.TAB3.label,
            key: P14Constant.TABS_MAP.TAB3.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo14_7 />
                <Demo14_8 />
                <Demo14_9 />
              </div>
            )
          },
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default ReactPage14
