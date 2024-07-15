import React, { useRef, useImperativeHandle, forwardRef, useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import CommTips from "@/pages/Page1/component/CommTips";

const Demo2_2_2 = () => {
  const childRef = useRef(null)
  const [ childDom, setChildDom ] = useState(null)

  const Demo2_2_child = forwardRef((props, childRef) => {
    const insideRef = useRef(null)
    useImperativeHandle(childRef, ()=>{
      return {
        fun1() {
          return `insideRef size: ${insideRef.current?.clientWidth}px, ${insideRef.current?.clientHeight}px`
        },
        fun2() {
          return insideRef.current
        },
        childParam: 'childParamValue'
      }
    })
    return (
      <div className={'one-line child-2-content'}>
        <div className={'child-inside-dom'} ref={insideRef}>Demo2_1_child</div>
      </div>
    )
  })

  const consoleChild = () => {
    console.log('consoleChild', childRef.current)
    const { fun1, fun2 } = childRef.current
    setChildDom(fun2())
    console.log('fun1', fun1())
    console.log('fun2', fun2())
  }

  return (
    <Wrapper>
      <Demo2_2_child ref={childRef} />
      <div className={'one-line'}>
        <Button type={'primary'} onClick={consoleChild}>child dom ref</Button>
        <div>{`child width: ${childDom?.clientWidth || 0}px, height: ${childDom?.clientHeight || 0}px`}</div>
        <CommTips
          title={
            <div>
              <div>使用 forwardRef 包住子组件</div>
              <div>在子组件里面用 useImperativeHandle 接住外部的 ref</div>
              <div>从而使得子组件有选择性的暴露出可控的数据或者方法</div>
            </div>
          }
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 50%
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .child-2-content {
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center !important;
    align-items: center;
    background-color: antiquewhite;
  }
  .child-inside-dom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    background-color: lightgray;
  }
`

export default Demo2_2_2
