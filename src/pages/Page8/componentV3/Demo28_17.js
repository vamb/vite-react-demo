import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo28_17 = () => {

  return (
    <UnitContent title={'28_17 overflow: hidden'}>
      <Wrapper>
        <div className={'box'}>
          <h2>CSS</h2>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  @keyframes rotate4s {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 30px;
  gap: 10px;
  .box {
    position: relative;
    width: 180px;
    height: 250px;
    background-color: rgb(0,0,0, 0.8);
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .box > h2 {
    color: white;
    font-size: 4em;
    text-shadow: 2px 2px pink;
    z-index 1;
  }
  .box::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 120%;
    background-image: linear-gradient( #00ccff, #d500f9 );
    animation: rotate4s 4s linear infinite;
  }
  .box::after {
    content: '';
    position: absolute;
    background-color: #0e1538;
    inset: 5px;
    border-radius: 20px;
  }
`

export default Demo28_17
