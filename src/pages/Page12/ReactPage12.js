import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Tabs } from 'antd';
import P12Constant from "./P12Constant";
import Demo12_1 from "./component/Demo12_1";

const { TabPane } = Tabs

const ReactPage12 = () => {
  const [ activeKey, setActiveKey ] = useState(P12Constant.TABS_MAP.TAB1.key)

  const updateActiveKey = key => {
    setActiveKey(key)
    localStorage.setItem(P12Constant.STORE_KEY, key)
  }

  useEffect(()=>{
    const storeKey = localStorage.getItem(P12Constant.STORE_KEY)
    if(storeKey) {
      updateActiveKey(storeKey)
    }
    return ()=> {
      localStorage.removeItem(P12Constant.STORE_KEY)
    }
  },[])

  return (
    <Wrapper>
      <Tabs activeKey={activeKey} onChange={e=>updateActiveKey(e)}>
        <TabPane tab={P12Constant.TABS_MAP.TAB1.label} key={P12Constant.TABS_MAP.TAB1.key}>
          <Demo12_1 />
        </TabPane>
      </Tabs>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default ReactPage12
