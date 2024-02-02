import React from 'react'
import styled from "styled-components";
import { Spin } from 'antd'

const LoadingPage = () => {

  return (
    <Wrapper>
      <Spin size="large" />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LoadingPage
