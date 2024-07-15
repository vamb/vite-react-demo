import React, { useRef, forwardRef, useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import CommTips from "@/pages/Page1/component/CommTips";

const Demo2_2_1 = () => {
  const childRef = useRef(null)
  const [ childDom, setChildDom ] = useState(null)

  const Demo2_1_child = forwardRef((props, childRef) => {
    return (
      <div className={'one-line child-1-content'}>
        <div ref={childRef} className={'demo2_1_child'}>Demo2_1_child</div>
      </div>
    )
  })

  const consoleChild = () => {
    console.log('consoleChild', childRef.current,)
    setChildDom(childRef.current)
  }

  return (
    <Wrapper>
      <Demo2_1_child ref={childRef} />
      <div className={'one-line'}>
        <Button type={'primary'} onClick={consoleChild}>child dom ref</Button>
        <div>{`child width: ${childDom?.clientWidth || 0}px, height: ${childDom?.clientHeight || 0}`}</div>
        <CommTips title={'使用 forwardRef 包住子组件，从而让 ref 可以穿透并绑定任意子组件的某个元素'} />
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
  .demo2_1_child {
    width: 150px;
    height: 40px;
    background-color: greenyellow;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Demo2_2_1
