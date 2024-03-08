import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Tabs } from 'antd'
import BFDagConstant from "./BFDagConstant";
import { DEFAULT_TAB_HEIGHT, findPageContentHeight } from "@/utils/utils";
import {
  Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7, Demo8, Demo9, Demo10,
  Demo11, Demo12, Demo13, Demo14, Demo15, Demo16, Demo17, Demo18, Demo19, Demo20,
  Demo21, Demo22, Demo23, Demo24, Demo25, Demo26, Demo27, Demo28
} from './Page15Index'

const ButterflyDagPage = () => {
  const [ activeKey, setActiveKey ] = useState(BFDagConstant.TABS_MAP.TAB4.key)
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
          {
            label: BFDagConstant.TABS_MAP.TAB3.label,
            key: BFDagConstant.TABS_MAP.TAB3.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo3 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB4.label,
            key: BFDagConstant.TABS_MAP.TAB4.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo4 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB5.label,
            key: BFDagConstant.TABS_MAP.TAB5.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo5 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB6.label,
            key: BFDagConstant.TABS_MAP.TAB6.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo6 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB7.label,
            key: BFDagConstant.TABS_MAP.TAB7.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo7 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB8.label,
            key: BFDagConstant.TABS_MAP.TAB8.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo8 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB9.label,
            key: BFDagConstant.TABS_MAP.TAB9.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo9 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB10.label,
            key: BFDagConstant.TABS_MAP.TAB10.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo10 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB11.label,
            key: BFDagConstant.TABS_MAP.TAB11.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo11 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB12.label,
            key: BFDagConstant.TABS_MAP.TAB12.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo12 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB13.label,
            key: BFDagConstant.TABS_MAP.TAB13.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo13 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB14.label,
            key: BFDagConstant.TABS_MAP.TAB14.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo14 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB15.label,
            key: BFDagConstant.TABS_MAP.TAB15.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo15 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB16.label,
            key: BFDagConstant.TABS_MAP.TAB16.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo16 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB17.label,
            key: BFDagConstant.TABS_MAP.TAB17.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo17 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB18.label,
            key: BFDagConstant.TABS_MAP.TAB18.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo18 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB19.label,
            key: BFDagConstant.TABS_MAP.TAB19.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo19 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB20.label,
            key: BFDagConstant.TABS_MAP.TAB20.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo20 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB21.label,
            key: BFDagConstant.TABS_MAP.TAB21.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo21 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB22.label,
            key: BFDagConstant.TABS_MAP.TAB22.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo22 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB23.label,
            key: BFDagConstant.TABS_MAP.TAB23.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo23 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB24.label,
            key: BFDagConstant.TABS_MAP.TAB24.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo24 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB25.label,
            key: BFDagConstant.TABS_MAP.TAB25.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo25 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB26.label,
            key: BFDagConstant.TABS_MAP.TAB26.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo26 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB27.label,
            key: BFDagConstant.TABS_MAP.TAB27.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo27 />
              </div>
            )
          },
          {
            label: BFDagConstant.TABS_MAP.TAB28.label,
            key: BFDagConstant.TABS_MAP.TAB28.key,
            children: (
              <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
                <Demo28 />
              </div>
            )
          },
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    flex-wrap: wrap;
  }
`

export default ButterflyDagPage
