import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_3_3 = () => {

  useEffect(()=>{
    /* 使用原生JS操作canvas */

    //获取canvas标签
    const canvas = document.getElementById('targetPlace3_3')
    if(canvas){
      const c = canvas.getContext('2d')
      c.beginPath()
      c.moveTo(100, 100)
      c.lineTo(100, 200)
      c.lineTo(120, 220)
      c.strokeStyle = 'red'
      c.lineWidth = 3
      c.stroke()
      c.closePath()
    }
  },[])

  return (
    <UnitContent title={'5_3_3'}>
      <Wrapper>
        <canvas id="targetPlace3_3" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
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

export default Demo5_3_3
