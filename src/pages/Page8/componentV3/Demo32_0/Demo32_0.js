import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../../components/UnitContent";
import Decision from './index'

const Demo32_0 = () => {

  return (
    <UnitContent title={'32-0'}>
      <Wrapper>
        aaa<br/>
        <Decision />
        bbb<br/>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo32_0
