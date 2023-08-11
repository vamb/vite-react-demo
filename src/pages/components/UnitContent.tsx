import React from 'react'
import styled from "styled-components";

interface ContentProps {
  idx?: any,
  unitTitle?: any,
  title?: any,
  children: any,
}

const UnitContent = (props: ContentProps) =>{
  const { idx, unitTitle, title } = props
  return (
    <Wrapper>
      {props.children}
      {
        (idx || unitTitle || title) &&
        <div className={'common-unit-content-idx-display'}>{`${idx? idx: ''} ${unitTitle || title}`}</div>
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
`

export default UnitContent
