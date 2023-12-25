import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Demo31_3 = () => {

  return (
    <UnitContent title={'31_3'}>
      <Wrapper>
        <div className={'pulse'}>
          <ExclamationCircleOutlined className={'t_icon'} />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  place-items: center;
  padding: 100px;
  box-sizing: border-box;
  background-color: #d3edf8;
  .pulse {
    height: 5rem;
    width: 5rem;
    background: linear-gradient(#65c0e7, #22a5dd);
    border-radius: 50%;
    display: grid;
    position: relative;
    place-items: center;
    font-size: 2rem;
    color: #fff;
  }
  @keyframes pulse {
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }
  .pulse::before, .pulse::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #65c0e7;
    border-radius: 50%;
    opacity: 0.71;
    
  }
  .pulse:after {
    animation: pulse 2s ease-out infinite;
  }
`

export default Demo31_3