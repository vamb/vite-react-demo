import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_3_1 = () => {

  useEffect(()=>{
    const canvas = document.getElementById('targetPlace3_1')
    if(canvas){
      const c = canvas.getContext('2d')
      c.beginPath()
      /**
       * 画圆 (x, y, 半径, 起始角度, 画多少角度 Math.PI * 2 => 360°, 顺时针 || 逆时针（true=》逆时针，false=》顺时针）)
       */
      c.arc(300, 300, 50, 0, Math.PI * 2, true)
      c.fillStyle = 'gold'
      c.fill()
      c.stroke()
      //关闭路径
      c.closePath()
    }
  },[])

  return (
    <UnitContent title={'5_3_1'}>
      <Wrapper>
        <canvas id="targetPlace3_1" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
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

export default Demo5_3_1
