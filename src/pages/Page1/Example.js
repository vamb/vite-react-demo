import React, { useState } from 'react';
import UnitContent from "../components/UnitContent";
import { Button } from "antd"
import styled from "styled-components";

function Example() {
  const [ count, setCount ] = useState(0);

  return(
    <UnitContent title={'Example 最简单的 useState'}>
      <Wrapper>
        <div className={'one-line'}>
          <div className={'label-area'}>{count}</div>
          <Button type={'primary'} onClick={()=>setCount(count+1)}>click add</Button>
          <Button type={'primary'} onClick={()=>setCount(count-1)}>click sub</Button>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Example
