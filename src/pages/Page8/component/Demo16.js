import React, { memo } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo16 = memo(()=>{
  return(
    <UnitContent unitTitle={'Demo16'}>
      <Wrapper>
        <div>Javascript 数据类型</div>
        <div>{`1. 简单数据类型(string, number, boolean, undefined, null, Symbol)`}</div>

        <article>
          <div>{`2. 复杂数据类型(Object, Array, Date, Set, Map)`}</div>
          <div>{`set: 一组不可重复的数组，会自动剔除重复的元素`}</div>
          <div>{`let s = new Set([1,2,3,4]) || let s = new Set();[1,2,3,4].forEach(x=>s.add(x))`}</div>
          <div>{`[...s]要这样转换成数组，方便后续操作`}</div>
        </article>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: left;
`

export default Demo16
