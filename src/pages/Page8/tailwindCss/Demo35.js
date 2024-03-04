import React from 'react'
import styled from "styled-components";
import './tailwind.css'
import UnitContent from "../../components/UnitContent";

const Demo35 = () => {

  return (
    <UnitContent title={'35_0'}>
      <Wrapper>
        <h1 className={'text-3xl font-bold underline'}>
          Hello world!
        </h1>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo35
