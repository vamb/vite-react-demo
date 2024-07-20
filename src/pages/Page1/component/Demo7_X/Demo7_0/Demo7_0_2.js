import React, { useState, memo } from "react";
import styled from "styled-components";
import { Button } from "antd"
import { countChange } from "./Demo7_0Util"

const ChildComp7_0_2 = memo(() => {
  console.log('7_0_2 childComp console')
  return <div>7_0_2 childComp, 用 memo 包装</div>
})

const Demo7_0_2 = () => {
  const [ count, setCount ] = useState(0)
  console.log('7_0_2 parent console')

  return (
    <Wrapper>
      <div className={'flex-col'}>
        <div className={'one-line'}>
          <div className={'label-area'}>{`count: ${count}`}</div>
          <Button type={'primary'} onClick={()=>countChange(false, count, setCount)}>-</Button>
          <Button type={'primary'} onClick={()=>countChange(true, count, setCount)}>+</Button>
        </div>
        <ChildComp7_0_2 />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 50%;
  user-select: none;
`

export default Demo7_0_2
