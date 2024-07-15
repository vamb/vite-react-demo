import React, { useRef, useState } from 'react';
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import { Input, Button } from "antd";
import CommTips from "@/pages/Page1/component/CommTips";

const Demo2_1 = () => {
  const domRef = useRef(null)
  const [ stateWidth, setStateWidth ] = useState(150)

  const consoleAction = () => {
    console.log('domRef', domRef.current)
    console.log('domRef input value', domRef.current?.input?.value)
    console.log('domRef', domRef.current?.input?.clientHeight, domRef.current?.input?.clientWidth)
  }

  const changeWidth = isPlus => {
    let newStateWidth = stateWidth
    if(isPlus) {
      newStateWidth = newStateWidth + 10
    } else {
      newStateWidth = newStateWidth - 10 < 150? 150: newStateWidth - 10
    }
    setStateWidth(newStateWidth)
  }

  return (
    <UnitContent title={'Demo2_1'} label={'useRef 绑定 Dom'}>
      <Wrapper>
        <div className={'one-line'}>
          <Input ref={domRef} style={{width: `${stateWidth}px`}} allowClear={true} />
          <Button type={'primary'} onClick={consoleAction}>console trigger</Button>
          <div>{`domRef clientHeight: ${domRef.current?.input?.clientHeight} clientWidth: ${domRef.current?.input?.clientWidth}`}</div>
        </div>
        <div className={'one-line'}>
          <Button type={'primary'} onClick={()=>changeWidth(false)}>-</Button>
          <Button type={'primary'} onClick={()=>changeWidth(true)}>+</Button>
          <CommTips title={'useRef 可以通过 ref 绑定要虚拟 dom 上，从而获取 dom相关的信息'} />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .one-line {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
  }
  .info-icon {
    cursor: pointer;
    font-size: 1.5rem;
  }
`

export default Demo2_1
