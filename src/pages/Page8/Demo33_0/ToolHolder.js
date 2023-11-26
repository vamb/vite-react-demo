import React, { useState } from 'react'
import styled from "styled-components";
import ToolPage from './ToolPage'
import ReactDOM from 'react-dom';

const ToolHolder = props => {
  const [ container, setContainer ] = useState(null);
  const [ isFocus, setIsFocus ] = useState(false)

  const handleDisplayTool = () => {
    setIsFocus(true)
    // 创建一个新的 div 元素
    const newContainer = document.createElement('div');
    newContainer.style.position = 'fixed'
    newContainer.style.left = '0'
    newContainer.style.top = '0'
    newContainer.style.zIndex = '1000'

    // 将新的 div 元素添加到 body 节点上
    document.body.appendChild(newContainer);
    // 设置状态
    setContainer(newContainer);
    setIsFocus(true)
  }

  const handleHideTool = () => {
    setIsFocus(false)
    document.body.removeChild(container);
  }

  return (
    <Wrapper>
      <div onClick={()=>handleDisplayTool()}>{props.children}</div>
      {
        isFocus && container ?
          ReactDOM.createPortal(
            <ToolPage
              handleHideTool={handleHideTool}
            />,
            container): null
      }
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 5px;
`

export default ToolHolder
