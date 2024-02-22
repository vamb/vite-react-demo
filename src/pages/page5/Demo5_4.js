import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_4 = () => {

  useEffect(()=>{
    const canvas = document.getElementById('targetPlace4')
    const ctx = canvas.getContext('2d')
    let deg = Math.PI * 2 / 360
    let count = 0
    let timer = setInterval(function() {
      count ++;
      ctx.beginPath()
      ctx.arc(250, 250, 200, -Math.PI * 2, count * deg - Math.PI * 2, false)
      ctx.lineWidth = 5
      ctx.strokeStyle = 'red'
      ctx.stroke()
      if(360 === count){
        clearInterval(timer)
      }
    }, 10)
  },[])

  return (
    <UnitContent title={'5_4'}>
      <Wrapper>
        <canvas id="targetPlace4" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  canvas {
    margin: 0 auto;
    border: 2px solid #aaa;
    display: block;
  }
`

export default Demo5_4
