import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_5 = () => {

  useEffect(()=>{
    const canvas = document.getElementById('targetPlace5')
    const ctx = canvas.getContext('2d')

    let x = 50, y = 200, r = 30
    // 画布的宽高
    let width = 600,  height = 600;

    let xSpeed = 1
    let ySpeed = 1
    setInterval(function() {
      ctx.clearRect(0,0,width,height)

      if(x-r<=0 || x+r>=width){
        xSpeed = -xSpeed
      }
      if(y-r<=0 || y+r>=height){
        ySpeed = -ySpeed
      }
      x = x + xSpeed
      y = y + ySpeed

      drawCircle(x, y, r)
    }, 10)

    function drawCircle(x, y, r) {
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fillStyle = 'gold'
      ctx.fill()
    }
  },[])

  return (
    <UnitContent title={'5_5'}>
      <Wrapper>
        <canvas id="targetPlace5" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
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

export default Demo5_5
