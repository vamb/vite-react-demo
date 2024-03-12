import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import SideMenu from "./SideMenu";
import PageContent from "./PageContent";
import PageHeader from "./PageHeader";
import routerConfig from "@/NewLayout/routerConfig";

const BasicLayout = () => {
  const [ contentBodyHeight, setContentBodyHeight ] = useState(0)
  const [ contentMenuHeight, setContentMenuHeight ] = useState(0)

  const calculateContentBodyHeight = () => {
    const contentBodyDom = document.getElementsByClassName('content-body')?.[0]
    setContentBodyHeight(contentBodyDom?.clientHeight)
  }

  const calculateContentMenuHeight = () => {
    const contentMenuDom = document.getElementsByClassName('content-menus')?.[0]
    setContentMenuHeight(contentMenuDom?.clientHeight)
  }

  const handleResize = () => {
    const isClient = typeof window === 'object'
    if(!isClient){
      return
    }
    calculateContentBodyHeight()
    calculateContentMenuHeight()
  }

  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <Wrapper>
      <div className={'layout-header'}>
        <PageHeader />
      </div>
      <div className={'layout-content'}>
        <div className={'content-menus'}>
          <SideMenu routers={routerConfig?.[0]?.children} parentHeight={contentMenuHeight} />
        </div>
        <div className={'content-body'}>
          <PageContent routers={routerConfig?.[0].children} parentHeight={contentBodyHeight} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .layout-header {
    min-height: 100px;
    width: 100%;
    box-sizing: border-box;
  }
  .layout-content {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 100px - 10px);
    gap: 10px;
    .content-menus {
      box-sizing: border-box;
      width: 250px;
      overflow-y: scroll;
      
    }
    .content-body {
      box-sizing: border-box;
      overflow: hidden;
      width: calc(100vw - 150px);
      border-radius: 6px;
    }
    .content-menus > div > div::-webkit-scrollbar {
      display: none;
    }
    .content-menus::-webkit-scrollbar {
      display: none;
    }
    .content-body > div > div::-webkit-scrollbar {
      display: none;
    }
    .content-body::-webkit-scrollbar {
      display: none;
    }
  }
  .tab-child-content {
    // background-color: lightblue;
  }
  .tab-child-content::-webkit-scrollbar {
    display: none;
  }
`

export default BasicLayout
