import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import { Button } from "antd";
import CommTips from "@/pages/Page1/component/CommTips";

const Demo4_2 = () => {
  const [ count, setCount ] = useState(0)

  useEffect(() => {
    console.log('--- 回调中 ---')
  },[count])

  console.log('--- 组件渲染中 ---')

  const changeCount = isPlus => {
    let newCount = count
    if(isPlus) {
      newCount++
    }else{
      newCount--
    }
    setCount(newCount)
  }

  return (
    <UnitContent title={'Demo4_2'} label={'useState 执行顺序'}>
      <Wrapper>
        <div className={'one-line'}>
          <div className={'label-area'}>{`count: ${count}`}</div>
          <Button type={'primary'} onClick={()=>changeCount(false)}>-</Button>
          <Button type={'primary'} onClick={()=>changeCount(true)}>+</Button>
          <CommTips
            title={
              <div className={'flex-col'}>
                <div>useEffect 是一个异步方法</div>
                <div>先渲染组件，然后再调用 useEffect 里面的内容</div>
              </div>
            }
          />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo4_2
