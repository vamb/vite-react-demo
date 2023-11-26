import React from 'react'
import styled from "styled-components";
import { CloseCircleOutlined } from '@ant-design/icons';

const ToolPage = props => {
  const { handleHideTool } = props

  return (
    <Wrapper>
      <div className={'mask-area'} onClick={()=>handleHideTool()} />
      <CloseCircleOutlined
        className={'tool-page-icon'}
        onClick={()=>handleHideTool()}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  transition: all 0.3s;
  width: 100vw;
  height: 100vh;
  position: relative;
  align-items: center; 
  .mask-area {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .tool-page-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 6px;
    font-size: 24px;
    color: #000;
    cursor: pointer;
  }
`

export default ToolPage
