import React from 'antd'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Image } from 'antd'
import image27_1 from './assets27/27_1.awebp'
import image27_2 from './assets27/27_2.awebp'

const Demo27 = () => {
  return(
    <UnitContent title={'Demo27 Flex Image Tips'}>
      <Wrapper>
        <div><Image width={180} src={image27_1} /></div>
        <div><Image width={180} src={image27_2} /></div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 10px;
  justify-items: center;
  align-items: center;
  & > div {
    width: 100%;
    height: 100%;
    background: lightyellow;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 10px;
    max-height: 280px;
    overflow: hidden;
  }
  & > div:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  & > div:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 6;
  }
`

export default Demo27
