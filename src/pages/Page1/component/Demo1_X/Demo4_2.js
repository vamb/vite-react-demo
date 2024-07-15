import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import { Button } from "antd";

const Demo4_2 = () => {
  const [ count, setCount ] = useState(0)

  useEffect(() => {
    console.log('--- 回调中 ---')
  })

  console.log('--- 组件渲染中 ---')

  return (
    <UnitContent title={'Demo4_2'} label={'useState 执行顺序'}>
      <Wrapper>
        <div className={'one-line'}>
          <div className={'label-area'}>

          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo4_2
