import React, { useRef, forwardRef } from "react";
import styled from "styled-components";
import { Button, Tooltip } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';

const Demo2_2_1 = () => {
  const childRef = useRef(null)

  const Demo2_1_child = forwardRef((props, childRef) => {
    return (
      <div className={'one-line child-1-content'}>
        <div
          ref={childRef}
          style={{
            width: '150px', height: '40px', backgroundColor: 'greenyellow',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
        >Demo2_1_child</div>
      </div>
    )
  })

  const consoleChild = () => {
    console.log('consoleChild', childRef.current)
  }

  return (
    <Wrapper>
      <Demo2_1_child ref={childRef} />
      <div className={'one-line'}>
        <Button type={'primary'} onClick={consoleChild}>child dom ref</Button>
        <div>{`child width: ${childRef.current?.style?.width}, height: ${childRef.current?.style?.height}`}</div>
        <Tooltip placement="right" title={'使用 forwardRef 包住子组件，从而让 ref 可以穿透并绑定任意子组件的某个元素'}>
          <InfoCircleOutlined className={'info-icon'} />
        </Tooltip>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .child-1-content {
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center !important;
    align-items: center;
    background-color: lightblue;
  }
`

export default Demo2_2_1