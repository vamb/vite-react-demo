import React from 'react'
import styled from "styled-components";
import arkTankImg from './ark_tank.svg'

const PageHeader = () => {

  return (
    <Wrapper>
      <img src={arkTankImg} alt={''} onClick={()=>window.location.href = '/main'} />
      <div className={'head-title'} onClick={()=>window.location.href = '/main'}>Self Demo</div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  // background-image: linear-gradient(to right bottom, #0067B6,#1EA1DA,#E8BFE4);
  background: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 20px;
  gap: 20px;
  & > img {
    height: 100%;
    cursor: pointer;
    user-select: none;
  }
  .head-title {
    font-size: 36px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.88);
    cursor: pointer;
    user-select: none;
  }
`

export default PageHeader
