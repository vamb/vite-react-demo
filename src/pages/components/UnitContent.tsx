import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Button } from 'antd'

interface ContentProps {
  idx?: any,
  unitTitle?: any,
  title?: any,
  children: any,
  disBtn?: boolean
}

const UnitContent = (props: ContentProps) =>{
  const { idx, unitTitle, title, disBtn } = props
  const [ hideContent, setHideContent ] = useState(false)

  useEffect(()=>{
    disBtn? setHideContent(disBtn): null
  },[disBtn])

  return (
    <Wrapper>
      { !hideContent && props.children }
      {
        (idx || unitTitle || title) &&
        <div className={'common-unit-content-idx-display'}>{`${idx? idx: ''} ${unitTitle || title}`}</div>
      }
      {
        disBtn &&
        <Button
          type={'primary'} size={'small'} className={'common-unit-content-btn-display'}
          onClick={()=>setHideContent(!hideContent)}
        >{hideContent? '展示': '隐藏'}</Button>
      }
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  padding: 20px;
  border: 1px dashed #ddd;
  margin: 20px 0;
  position: relative;
  .common-unit-content-idx-display {
    position: absolute;
    top: 1px;
    left: 10px;
    font-size: 12px;
    font-weight: 500;
    opacity: 0.6;
  }
  .common-unit-content-btn-display {
    position: absolute;
    top: 1px;
    right: 10px;
  }
`

export default UnitContent
