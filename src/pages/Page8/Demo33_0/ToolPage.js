import React from 'react'
import styled from "styled-components";
import { CloseCircleOutlined } from '@ant-design/icons';

const ToolPage = props => {
  const { handleHideTool } = props

  return (
    <Wrapper>
      <CloseCircleOutlined
        className={'tool-page-icon'}
        onClick={()=>handleHideTool()}
      />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  transition: all 0.3s;
  width: 100px;
  height: 60px;
  background-color: lightpink;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center; 
  .tool-page-icon {
    font-size: 24px;
    color: #000;
    cursor: pointer;
  }
`

export default ToolPage
