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
        >Perspective 高度差 (山羊の前端小窝)</Link>
        <Link
          target = "_blank" title={'监听Demo'}
          to='/single/switchDemoPage'
        >switchDemoPage</Link>
        <Link
          target = "_blank" title={'监听Demo'}
          to='/single/scrollDemoV1'
        >scrollDemoV1</Link>
        <Link
          target = "_blank" title={'监听Demo'}
          to='/single/dragDemoV1'
        >dragDemoV1</Link>
        <Link
          target = "_blank" title={'监听Demo'}
          to='/single/dragDemoV2'
        >dragDemoV2</Link>
        <Link
          target = "_blank" title={'监听Demo'}
          to='/single/dragDemoV3'
        >dragDemoV2</Link>
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
