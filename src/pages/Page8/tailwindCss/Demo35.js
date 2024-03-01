import React from 'react'
import styled from "styled-components";
import './tailwind.css'
import UnitContent from "../../components/UnitContent";

const Demo35 = () => {

  return (
    <UnitContent title={'35_0'}>
      <Wrapper>
        <div className={'h-screen w-full bg-red-200'}>

        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo35
