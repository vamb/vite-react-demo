import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_7 = () => {

  useEffect(()=>{
    const canvas = document.getElementById('targetPlace7')
    const ctx = canvas.getContext('2d')
    let width = 600,  height = 600;

    /**
     * fillText(text, x, y, maxWidth);
     * maxWidth => px
     */
    /**
     * context.font = "italic small-caps bold 12px arias"
     * font-style => 字体样式: normal, italic, ablique
     * font-variant => 字体变体: normal, small-caps
     * font-weight => 规定字体的粗细
     * font-size / line-height / font-family
     */

    /**
     * createLinearGradient(x0,y0,x1,y1)
     * x0 => 渐变开始点的 x 坐标
     * y0 => 渐变开始点的 y 坐标
     * x1 => 渐变结束点的 x 坐标
     * x1 => 渐变结束点的 x 坐标
     * 最后要把这个渐变赋值给fillStyle 或者 strokeStyle
     */
    let gradient = ctx.createLinearGradient(0,0, canvas.width, canvas.height)

    /**
     * 0 ~ 0.5 =》 magenta ~ blue: 由 magenta 到 blue 的渐变过程
     * 0.5 ~ 1 =》 blue ~ red: 由 blue 到 red 的渐变过程
     */
    gradient.addColorStop(0,"magenta");
    gradient.addColorStop(0.5,"blue");
    gradient.addColorStop(1,"red");


    ctx.font = '50px 微软雅黑'
    // 实心文字
    // ctx.fillStyle = 'gold'
    ctx.fillStyle = gradient
    ctx.fillText('hello world', 100,100, 400)

    // 空心文字
    // ctx.strokeStyle = 'blue'
    ctx.strokeStyle = gradient
    ctx.strokeText('hello world', 100,200, 400)
  },[])

  return (
    <UnitContent title={'5_7'}>
      <Wrapper>
        <canvas id="targetPlace7" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
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

export default Demo5_7
