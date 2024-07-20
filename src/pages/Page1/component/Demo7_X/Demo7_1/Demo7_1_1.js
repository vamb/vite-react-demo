import React, { useState, memo } from "react";
import styled from "styled-components";
import { Button } from "antd"
import { countChange } from "../Demo7_0/Demo7_0Util"

const ChildComp7_1_1 = memo(() => {
  console.log('7_1_1 childComp console')
  return <div>7_1_1 childComp, 因为传了方法进来，所以用 memo 包装也会刷新</div>
})

const Demo7_1_1 = () => {
  const [ count, setCount ] = useState(0)
  console.log('7_1_1 parent console')

  const fct = () => {}

  return (
    <Wrapper>
      <div className={'flex-col'}>
        <div className={'one-line'}>
          <div className={'label-area'}>{`count: ${count}`}</div>
          <Button type={'primary'} onClick={()=>countChange(false, count, setCount)}>-</Button>
          <Button type={'primary'} onClick={()=>countChange(true, count, setCount)}>+</Button>
        </div>
        <ChildComp7_1_1 fct={fct} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 50%;
  user-select: none;
`

export default Demo7_1_1
