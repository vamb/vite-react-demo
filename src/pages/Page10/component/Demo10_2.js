import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";


const Demo10_2 = () => {

  return (
    <UnitContent title={'Demo10_2'}>
      <Wrapper>
        <div id={'container'} style={{ backgroundColor: 'lightyellow'}} />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo10_2
