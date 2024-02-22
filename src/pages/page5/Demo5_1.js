import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_1 = () => {

  useEffect(()=>{
    /* 使用原生JS操作canvas */

    //获取canvas标签
    const canvas = document.getElementById('targetPlace')
    //获取上下文对象
    if(canvas){
      const c = canvas.getContext('2d')
      //开启一条路径
      c.beginPath()
      //确定起始点
      c.moveTo(100, 100)
      //确定结束点
      c.lineTo(200,200)
      /**
       * strokeStyle 设置笔触得颜色，渐变或者模式
       * lineWidth 设置线宽
       */
      c.strokeStyle = 'green'
      c.lineWidth = 5
      //画
      c.stroke()
      //关闭路径
      c.closePath()
    }
  },[])

  return (
    <UnitContent title={'5_1'}>
      <Wrapper>
        <canvas id="targetPlace" width="500px" height="500px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
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

export default Demo5_1
