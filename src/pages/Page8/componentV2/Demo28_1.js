import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo28_1 = () => {
  return (
    <UnitContent title={'Demo28_1'}>
      <Wrapper>
        <div className={'loading-inner'}>
          <div className={'loading-cover'} />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  padding: 0;
  margin: 0;
  height: 300px;
  position: relative;
  background: #13283e;
  .loading-inner {
    width: 180px;
    height: 180px;
    background-color: #d0f4ff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    animation: loading-breath 5s linear infinite;
  }
  @keyframes loading-breath {
    0% { box-shadow: 0 0 5px 0 #85f7fb }
    25% { box-shadow: 0 0 20px 0 #85f7fb }
    50% { box-shadow: 0 0 5px 0 #85f7fb }
    75% { box-shadow: 0 0 20px 0 #85f7fb }
    100% { box-shadow: 0 0 5px 0 #85f7fb }
  }
  .loading-inner::before {
    content: 'loading...';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    color: #10a7b9;
    font-size: 18px;
    font-weight: 700;
  }
  .loading-inner::after {
    content: '';
    width: 100%;
    height: 25%;
    background-image: linear-gradient(to top, #36e9ff, #5ffbf1);
    position: absolute;
    bottom: 0;
    animation: loading-run 5s ease-in-out infinite;
  }
  @keyframes loading-run {
    0% { height: 25% };
    100% { height: 100% };
  }
  .loading-cover::before {
    content: '';
    position: absolute;
    left: -50%;
    z-index: 10;
    width: 200%;
    height: 200%;
    background-color: #85f7fb;
    border-radius: 52% 25% 62% 69% / 25% 38%;
    animation: loading-wave 5s linear infinite;
    
  }
  .loading-cover::after {
    content: '';
    position: absolute;
    left: -50%;
    z-index: 20;
    width: 200%;
    height: 200%;
    background-color: #d0f4ff;
    border-radius: 42% 38% 40% 62% / 48% 35%;
    animation: loading-wave 5s linear infinite;
  }
  @keyframes loading-wave {
    0% { top: -100%; transform: rotate(0); }
    100% { top: -200%; transform: rotate(360deg); }
  }
`

export default Demo28_1
