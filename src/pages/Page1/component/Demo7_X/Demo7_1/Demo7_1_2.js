import React, { useState, memo, useCallback } from "react";
import styled from "styled-components";
import { Button } from "antd"
import { countChange } from "../Demo7_0/Demo7_0Util"

const ChildComp7_1_2 = memo(() => {
  console.log('7_1_2 childComp console')
  return <div>7_1_2 childComp, 传进来的方法用 useCallback 包装，因此，只要 useCallback 监听的参数不变，这个方法就一直缓存，子组件就不会刷新</div>
})

const Demo7_1_2 = () => {
  const [ count, setCount ] = useState(0)
  console.log('7_1_2 parent console')

  const fct = useCallback(() => {}, [])

  return (
    <Wrapper>
      <div className={'flex-col'}>
        <div className={'one-line'}>
          <div className={'label-area'}>{`count: ${count}`}</div>
          <Button type={'primary'} onClick={()=>countChange(false, count, setCount)}>-</Button>
          <Button type={'primary'} onClick={()=>countChange(true, count, setCount)}>+</Button>
        </div>
        <ChildComp7_1_2 fct={fct} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 50%;
  user-select: none;
`

export default Demo7_1_2
