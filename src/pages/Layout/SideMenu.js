import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideMenu = props => {
  const { parentHeight, routers } = props
  const [ activeKey, setActiveKey ] = useState('/main/firstPage')

  useEffect(()=>{
    if(window.location.pathname !== activeKey) {
      setActiveKey(window.location.pathname)
    }
  },[window.location.pathname])

  const checkActive = (availableKey, currentKey) =>{
    return availableKey === currentKey? 'router-unit-active': 'router-unit'
  }

  return (
    <Wrapper>
      <div style={{height: `${parentHeight}px`, overflowY: 'scroll'}}>
        {
          Array.isArray(routers) && routers.length>0 &&
          routers?.map((item, idx) => {
            return (
              <div key={`main-child-menu-${idx}`} className={checkActive(activeKey, item?.path)}>
                <Link
                  to={item?.path} title={item?.title}
                  onClick={()=>setActiveKey(item?.path)}
                >{item?.title}</Link>
                <div className={'bottom-mark'} />
              </div>
            )
          })
        }
        {/*<div className={checkActive(activeKey, '/main/firstPage')}>*/}
        {/*  <Link*/}
        {/*    to='/main/firstPage' title={'1 Page'}*/}
        {/*    onClick={()=>setActiveKey('/main/firstPage')}*/}
        {/*  >1 - Hooks Related</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/secondPage')}>*/}
        {/*  <Link*/}
        {/*    to='/main/secondPage' title={'2 Page'}*/}
        {/*    onClick={()=>setActiveKey('/main/secondPage')}*/}
        {/*  >2 - Page</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/thirdPage')}>*/}
        {/*  <Link*/}
        {/*    to='/main/thirdPage' title={'3 Lifecycle'}*/}
        {/*    onClick={()=>setActiveKey('/main/thirdPage')}*/}
        {/*  >3 - LifeCycle</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/forthPage')}>*/}
        {/*  <Link*/}
        {/*    to='/main/forthPage' title={'4 Page'}*/}
        {/*    onClick={()=>setActiveKey('/main/forthPage')}*/}
        {/*  >4 - Page</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/fifThPage')}>*/}
        {/*  <Link*/}
        {/*    to='/main/fifThPage' title={'5 Page'}*/}
        {/*    onClick={()=>setActiveKey('/main/fifThPage')}*/}
        {/*  >5 - Canvas</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/sixthPage')}>*/}
        {/*  <Link*/}
        {/*    to='/main/sixthPage' title={'6 Page xhr'}*/}
        {/*    onClick={()=>setActiveKey('/main/sixthPage')}*/}
        {/*  >6 - XHR & Fetch</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/seventhPage')}>*/}
        {/*  <Link*/}
        {/*    to='/main/seventhPage' title={'7 Page(metamask)'}*/}
        {/*    onClick={()=>setActiveKey('/main/seventhPage')}*/}
        {/*  >7 - Web3.0</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/eighthPage')}>*/}
        {/*  <Link*/}
        {/*    to={'/main/eighthPage'} title={'React 18 test'}*/}
        {/*    onClick={()=>setActiveKey('/main/eighthPage')}*/}
        {/*  >8 - CSS</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/ninthPage')}>*/}
        {/*  <Link*/}
        {/*    to={'/main/ninthPage'} title={'React 9Page'}*/}
        {/*    onClick={()=>setActiveKey('/main/ninthPage')}*/}
        {/*  >9 - Page</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/tenthPage')}>*/}
        {/*  <Link*/}
        {/*    to={'/main/tenthPage'} title={'threeJs'}*/}
        {/*    onClick={()=>setActiveKey('/main/tenthPage')}*/}
        {/*  >10 - threeJs</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/eleventhPage')}>*/}
        {/*  <Link*/}
        {/*    to={'/main/eleventhPage'} title={'JS练习'}*/}
        {/*    onClick={()=>setActiveKey('/main/eleventhPage')}*/}
        {/*  >11 - JS练习</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/twelvePage')}>*/}
        {/*  <Link*/}
        {/*    to={'/main/twelvePage'} title={'爪哇'}*/}
        {/*    onClick={()=>setActiveKey('/main/twelvePage')}*/}
        {/*  >12 - 爪哇</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/fourteenPage')}>*/}
        {/*  <Link*/}
        {/*    to={'/main/fourteenPage'} title={'状态托管'}*/}
        {/*    onClick={()=>setActiveKey('/main/fourteenPage')}*/}
        {/*  >14状态托管</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
        {/*<div className={checkActive(activeKey, '/main/butterflyDag')}>*/}
        {/*  <Link*/}
        {/*    to={'/main/butterflyDag'} title={'流程图'}*/}
        {/*    onClick={()=>setActiveKey('/main/butterflyDag')}*/}
        {/*  >15 Butterfly Dag</Link>*/}
        {/*  <div className={'bottom-mark'} />*/}
        {/*</div>*/}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  // background-color: #f7f8ee;
  border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
  .router-unit, .router-unit-active {
    // background-color: lightblue;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    transition: all 0.2s;
    height: 30px;
    margin-bottom: 3px;
    & > a {
      transition: all 0.2s;
      padding: 4px 4px 4px 15px;
      width: 100%;
    }
  }
  .router-unit-active {
    & > a {
      background-color: #e6f4ff;
      padding-left: 13px;
      color: #1677ff;
    }
  }
  .router-unit-active::before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: #1677ff;
  }
  .router-unit > a {
    color: rgba(0, 0, 0, 0.88);
  }
  .router-unit:hover {
    & > a {
      background-color: rgba(150,150,150,.4);
    }
  }
`

export default SideMenu
