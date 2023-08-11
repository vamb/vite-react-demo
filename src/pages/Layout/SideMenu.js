import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideMenu = (props) => {
  const { parentHeight } = props
  const [ activeKey, setActiveKey ] = useState('/')

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
        <div className={checkActive(activeKey, '/')}>
          <Link
            to='/' title={'1 Page'}
            onClick={()=>setActiveKey('/')}
          >1 - Hooks Related</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/secondPage')}>
          <Link
            to='/secondPage' title={'2 Page'}
            onClick={()=>setActiveKey('/secondPage')}
          >2 - Page</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/thirdPage')}>
          <Link
            to='/thirdPage' title={'3 Lifecycle'}
            onClick={()=>setActiveKey('/thirdPage')}
          >3 - LifeCycle</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/forthPage')}>
          <Link
            to='/forthPage' title={'4 Page'}
            onClick={()=>setActiveKey('/forthPage')}
          >4 - Page</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/fifThPage')}>
          <Link
            to='/fifThPage' title={'5 Page'}
            onClick={()=>setActiveKey('/fifThPage')}
          >5 - Canvas</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/sixthPage')}>
          <Link
            to='/sixthPage' title={'6 Page xhr'}
            onClick={()=>setActiveKey('/sixthPage')}
          >6 - XHR & Fetch</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/seventhPage')}>
          <Link
            to='/seventhPage' title={'7 Page(metamask)'}
            onClick={()=>setActiveKey('/seventhPage')}
          >7 - Web3.0</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/eighthPage')}>
          <Link
            to={'/eighthPage'} title={'React 18 test'}
            onClick={()=>setActiveKey('/eighthPage')}
          >8 - CSS</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/ninthPage')}>
          <Link
            to={'/ninthPage'} title={'React 9Page'}
            onClick={()=>setActiveKey('/ninthPage')}
          >9 - Page</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/tenthPage')}>
          <Link
            to={'/tenthPage'} title={'threeJs'}
            onClick={()=>setActiveKey('/tenthPage')}
          >10 - threeJs</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/eleventhPage')}>
          <Link
            to={'/eleventhPage'} title={'JS练习'}
            onClick={()=>setActiveKey('/eleventhPage')}
          >11 - JS练习</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/twelvePage')}>
          <Link
            to={'/twelvePage'} title={'爪哇'}
            onClick={()=>setActiveKey('/twelvePage')}
          >12 - 爪哇</Link>
          <div className={'bottom-mark'} />
        </div>
        <div className={checkActive(activeKey, '/fourteenPage')}>
          <Link
            to={'/fourteenPage'} title={'状态托管'}
            onClick={()=>setActiveKey('/fourteenPage')}
          >14状态托管</Link>
          <div className={'bottom-mark'} />
        </div>
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
