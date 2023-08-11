import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { observable, autorun } from 'mobx'
import { observer } from 'mobx-react'
import { Button } from 'antd'

const mobxStore = observable({
  count: 0,
})
mobxStore.increment = function () {
  this.count ++
}
mobxStore.decrement = function () {
  this.count --
}

// 数值每次改变都会触发的方法
autorun(()=>{
  console.log(`current count is: ${mobxStore.count}`)
})

const Demo14_7 = observer(()=>{

  return (
    <UnitContent title={'Demo14_7 mobx 简单应用'}>
      <Wrapper>
        <Button
          type={'primary'}
          onClick={()=>mobxStore.decrement()}
        >-</Button>
        <div>{mobxStore.count}</div>
        <Button
          type={'primary'}
          onClick={()=>mobxStore.increment()}
        >+</Button>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: start;
  align-items: center;
`

export default Demo14_7
