import React, { memo } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo15 = memo(()=>{
  return(
    <UnitContent unitTitle={'Demo15'}>
      <Wrapper>
        <div className={'target'} />
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  .target::before {
    content: 'hello before';
    font-size: 18px;
    font-weight: 700;
  }
`

export default Demo15
