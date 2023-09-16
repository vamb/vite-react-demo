import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Tabs } from 'antd'
import BFDagConstant from "./BFDagConstant";
import { DEFAULT_TAB_HEIGHT, findPageContentHeight } from "../utils/utils";
import Demo1 from './component/Demo1/index'
import Demo2 from './component/Demo2/index'

const ButterflyDagPage = () => {
  const [ activeKey, setActiveKey ] = useState(BFDagConstant.TABS_MAP.TAB2.key)
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(BFDagConstant.STORE_KEY, key)
  }

  useEffect(()=>{
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
    const storeKey = localStorage.getItem(BFDagConstant.STORE_KEY)
    if(storeKey) {
      updateActiveKey(storeKey)
    }
    return () => {
      localStorage.removeItem(BFDagConstant.STORE_KEY)
    }
  },[])

  return (
    <Wrapper>
      <Tabs
        defaultActiveKey={activeKey}
        onChange={e=>updateActiveKey(e)}
        items={[
          {
            label: BFDagConstant.TABS_MAP.TAB1.label,
            key: BFDagConstant.TABS_MAP.TAB1.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo1 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB2.label,
            key: BFDagConstant.TABS_MAP.TAB2.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo2 />
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

export default ButterflyDagPage
