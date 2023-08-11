import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import Demo28_11_unit from "./Demo28_11_unit";
import img1 from './assets28/image28/1.jpg'
import img2 from './assets28/image28/2.jpg'
import img3 from './assets28/image28/3.jpg'

const Demo28_11 = () => {

  return (
    <UnitContent title={'28_11'}>
      <Wrapper>
        <Demo28_11_unit imgSrc={img1} />
        <Demo28_11_unit imgSrc={img2} />
        <Demo28_11_unit imgSrc={img3} />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  background: #13283e;
  color: #fff;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export default Demo28_11
