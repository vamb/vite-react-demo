import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_2 = () => {

  useEffect(()=>{
    /* 使用原生JS操作canvas */

    //获取canvas标签
    const canvas = document.getElementById('targetPlace2')
    //获取上下文对象
    const draw = (input)=>{
      const { from, to, color, width } = input
      if(canvas){
        const c = canvas.getContext('2d')
        //开启一条路径
        c.beginPath()
        //确定起始点
        c.moveTo(from['x'], from['y'])
        //确定结束点
        c.lineTo(to['x'],to['y'])
        /**
         * strokeStyle 设置笔触得颜色，渐变或者模式
         * lineWidth 设置线宽
         */
        c.strokeStyle = color
        c.lineWidth = width || 3
        //画
        c.stroke()
        //关闭路径
        c.closePath()
      }
    }

    const line1 = {
      from: {x: 100, y: 100},
      to: {x:500, y: 100},
      color: 'red',
    }

    const line2 = {
      from: {x:500, y: 100},
      to: {x:500, y: 500},
      color: 'yellow',
    }

    const line3 = {
      from: {x: 100, y: 100},
      to: {x:100, y: 500},
      color: 'blue',
    }

    const line4 = {
      from: {x: 100, y: 500},
      to: {x:500, y: 500},
      color: 'green',
    }
    draw(line1)
    draw(line2)
    draw(line3)
    draw(line4)
  },[])

  return (
    <UnitContent title={'5_2'}>
      <Wrapper>
        <canvas id="targetPlace2" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
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

export default Demo5_2
