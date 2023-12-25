import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo31_0 = () => {

  return (
    <UnitContent title={'31-0 霓虹按钮'}>
      <Wrapper>
        <div className={'great_31_button'}>Button</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 120px;
  padding: 30px;
  position: relative;
  .great_31_button {
    position: absolute;
    z-index: 1;
    width: 200px;
    height: 60px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    text-decoration: none;
    font-family: sans-serif;
    box-sizing: border-box;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
    transition: all 0.3s;
    background-size: 400%;
  }
  @keyframes animate {
    from { background-position: 0% }
    to { background-position: 400% }
  }
  .great_31_button:hover {
    opacity: 1;
    animation: animate 8s linear infinite;
  }
  .great_31_button::before {
    position: absolute;
    z-index: -1;
    content: '';
    inset: -5px;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
  }
  .great_31_button:hover::before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }
`

export default Demo31_0
