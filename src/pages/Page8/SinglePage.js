import React from 'react'
import UnitContent from "../components/UnitContent";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SinglePage = () => {

  return (
    <UnitContent title={'SinglePage'}>
      <Wrapper>
        <Link
          target = "_blank" title={'监听Demo'}
          to='/single/intersection'
        >监听Demo</Link>
        <Link
          target = "_blank" title={'监听Demo'}
          to='/single/perspectivePage'
        >Perspective 高度差</Link>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
`

export default SinglePage
