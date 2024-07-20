import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd"
import { countChange } from "./Demo7_0Util"

const ChildComp7_0_1 = () => {
  console.log('7_0_1 childComp console')
  return <div>7_0_2 childComp, 不用 memo</div>
}

const Demo7_0_1 = () => {
  const [ count, setCount ] = useState(0)
  console.log('7_0_1 parent console')

  return (
    <Wrapper>
      <div className={'one-line'}>
        <div className={'label-area'}>{`count: ${count}`}</div>
        <Button type={'primary'} onClick={()=>countChange(false, count, setCount)}>-</Button>
        <Button type={'primary'} onClick={()=>countChange(true, count, setCount)}>+</Button>
      </div>
      <ChildComp7_0_1 />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 50%;
  user-select: none;
`

export default Demo7_0_1
