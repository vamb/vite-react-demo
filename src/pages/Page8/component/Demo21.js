import React, { memo, useEffect, useState } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo21 = memo(()=>{
  const [clientWidth, setClientWidth] = useState(0)
  const [offsetWidth, setOffsetWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [ pageDiv, setPageDiv ] = useState(null)

  useEffect(()=>{
    let pageDiv = document.querySelector('.page-div')
    setClientWidth(pageDiv.clientWidth)
    setOffsetWidth(pageDiv.offsetWidth)
    setScrollWidth(pageDiv.scrollWidth)
    setPageDiv(pageDiv)
  },[])

  return(
    <UnitContent title={'Demo21'}>
      <Wrapper>
        <div className={'page-div'} >
          sfsdfsdfsdfsfsdfsdfsdfsfsdfsdfsdfsfsdfsdfsdfsfsdfsdfsdfsfsdfsdfsdfsfsdfsdfsdf
        </div>
        <div className={'info-msg'}>
          <div>{`clientWidth: ${clientWidth}, clientTop: ${pageDiv?.clientTop}, clientLeft: ${pageDiv?.clientLeft}`}</div>
          <div>{`offsetWidth ${offsetWidth}, offsetTop: ${pageDiv?.offsetTop}, offsetLeft: ${pageDiv?.offsetLeft} `}</div>
          <div>{`scrollWidth ${scrollWidth}, scrollTop: ${pageDiv?.scrollTop}, scrollLeft: ${pageDiv?.scrollLeft}`}</div>
          <div>check DraggerDemo v1 ~ v2 || Demo20</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  background-color: #ffffe055;
  padding: 10px;
  .page-div {
    // box-sizing: content-box;
    // box-sizing: border-box;
    width: 200px;
    height: 200px;
    background: skyblue;
    border: 2px solid blueviolet;
    margin-right: 10px;
  }
  .info-msg {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info-msg > div {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }
`

export default Demo21
