import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { findPageContentHeight, DEFAULT_TAB_HEIGHT } from '../utils/utils'
import Demo5_1 from "./Demo5_1";
import Demo5_2 from "./Demo5_2";
import Demo5_3 from "./Demo5_3";
import Demo5_3_1 from "./Demo5_3_1";
import Demo5_3_2 from "./Demo5_3_2";
import Demo5_3_3 from "./Demo5_3_3";
import Demo5_4 from "./Demo5_4";
import Demo5_5 from "./Demo5_5";
import Demo5_6 from "./Demo5_6";
import Demo5_7 from "./Demo5_7";
import Demo5_8 from "./Demo5_8";

const FifthPage = () =>{
  const [ tabChildHeight, setTabChildHeight ] = useState(0)

  useEffect(()=>{
    setTabChildHeight(findPageContentHeight() - DEFAULT_TAB_HEIGHT)
  },[])

  return (
    <Wrapper>
      <div className={'tab-child-content'} style={{height: `${tabChildHeight}px`, overflowY: 'scroll'}}>
        <Demo5_1 />
        <Demo5_2 />
        <Demo5_3 />
        <Demo5_3_1 />
        <Demo5_3_2 />
        <Demo5_3_3 />
        <Demo5_4 />
        <Demo5_5 />
        <Demo5_6 />
        <Demo5_7 />
        <Demo5_8 />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
`

export default FifthPage
