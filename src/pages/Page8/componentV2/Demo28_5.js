import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo28_5 = () => {

  return (
    <UnitContent title={'28_5 流动边框 clip-path'}>
      <Wrapper>
        <div className={'demo-btn'}>按钮</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  @keyframes pathRotate {
    0%,
    100% {
      clip-path: inset(0 0 98% 0);
    }
    25% {
      clip-path: inset(0 98% 0 0);
    }
    50% {
      clip-path: inset(98% 0 0 0);
    }
    75% {
      clip-path: inset(0 0 0 98%);
    }
  }
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  .demo-btn {
    background: #55557f80;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
    transition: all 0.2s;
    color: #fff;
    width: 220px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .demo-btn:hover {
    background: #55557f;
  }
  .demo-btn::before, .demo-btn::after {
    content: '';
    position: absolute;
    border: 2px solid #55557f;
    box-sizing: border-box;
    width: 235px;
    height: 80px;
    border-radius: 10px;
    insert: -10px;
    animation: pathRotate 3s infinite linear;
  } 
  .demo-btn::after {
    animation-delay: -1.5s;
  }
`

export default Demo28_5
