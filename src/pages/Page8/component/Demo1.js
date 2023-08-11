import React, { useState } from 'react'
import styled from 'styled-components'
import UnitContent from "../../components/UnitContent";

const Demo1 = () =>{
  const [ countNum, setCountNum ] = useState(0)
  const [ flag, setFlag ] = useState(false)
  const currImg = new URL('./assets/11.png', import.meta.url).href
  return(
    <UnitContent title={'Demo1 setTimeout'}>
      <Wrapper>
        <div style={{display: 'flex'}}>
          <div className={'display-unit'}>{`countNum: ${countNum}`}</div>
          <div className={'display-unit'}>
            <img src={currImg} className={'target-img'} alt={''} />
          </div>
        </div>
        <div className={'display-unit'}>{`flag: ${flag}`}</div>
        <button
          className={'btn-style'}
          onClick={()=>{
            setTimeout(()=>{
              setCountNum(c=> c+ 1)
              setFlag(f => !f)
            }, 1000)
          }}
        >update</button>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  
  .display-unit {
    height: 15px;
    margin-bottom: 10px;
  }
  .btn-style {
    width: 80px;
    height: 30px;
  }
  @keyframes loadingCircle {
    100% {
      transform: rotate(360deg);
    }
  }
  .target-img {
    // animation: loadingCircle 1s infinite linear;
    width: 100px;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: loadingCircle;
  }
`

export default Demo1
