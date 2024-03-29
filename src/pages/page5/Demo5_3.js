import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_3 = () => {

  useEffect(()=>{
    /* 使用原生JS操作canvas */

    //获取canvas标签
    const canvas = document.getElementById('targetPlace3')
    //获取上下文对象
    const input = {
      from: {x: 100, y: 100},
      to: {x:500, y: 100},
      color: 'red',
    }

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

      // 设置填充色
      c.fillStyle = 'green'
      //绘制空心矩阵(x, y, width, height)
      c.fillRect(100,100,120,120)

      //清除画布
      c.clearRect(120, 120, 80,80)

      c.strokeStyle = 'blue'
      //绘制空心矩阵
      c.strokeRect(20, 20, 50, 50)

      /**
       * 画圆 (x, y, 半径, 起始角度, 画多少角度 Math.PI * 2 => 360°, 顺时针 || 逆时针（true=》逆时针，false=》顺时针）)
       */
      c.arc(300, 300, 50, 0, Math.PI, true)
      c.fillStyle = 'gold'
      c.fill()
      c.stroke()
      //关闭路径
      c.closePath()
    }
  },[])

  return (
    <UnitContent title={'5_3'}>
      <Wrapper>
        <canvas id="targetPlace3" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
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

export default Demo5_3
