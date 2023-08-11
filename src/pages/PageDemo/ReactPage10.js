import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Tabs } from 'antd'
import P10Constant from "./P10Constant";
import Demo10_1 from "./component/Demo10_1";

const { TabPane } = Tabs

const ReactPage10 = () => {
  const [ activeKey, setActiveKey ] = useState(P10Constant.TABS_MAP.TAB1.key)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(P10Constant.STORE_KEY, key)
  }

  useEffect(()=>{
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
          <Demo10_1 />
        </TabPane>
      </Tabs>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default ReactPage10
