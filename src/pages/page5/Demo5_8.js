import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_8 = () => {

  useEffect(()=>{
    const canvas = document.getElementById('targetPlace8')
    const ctx = canvas.getContext('2d')
    let width = 600,  height = 600;

    ctx.beginPath()
    ctx.moveTo(300, 0)
    ctx.lineTo(300, 600)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(0, 300)
    ctx.lineTo(600, 300)
    ctx.stroke()
    ctx.closePath()

    /**
     * textAlign: (横向对齐方式, 以x坐标为基点) || left || end || right || center
     * start || left =》 x坐标开始 （推荐）
     * end || right =》文字的末尾对准x坐标
     * center =》分布在x坐标左右平均
     */
    ctx.textAlign = 'center'

    /**
     * textBaseline: bottom || top || middle || hanging || alphabetic (纵向对齐方式, 以y坐标为基点)
     * bottom => 文字的底在y坐标上卖弄
     * alphabetic =》 大体上和bottom很像，默认
     * top || hanging =》 文字的头在y坐标下面 （推荐）
     * middle =》 中间的位置
     */
    ctx.textBaseline = 'middle'

    ctx.font = '50px 微软雅黑'
    ctx.fillText('hello world', 300, 300)
  },[])

  return (
    <UnitContent title={'5_8'}>
      <Wrapper>
        <canvas id="targetPlace8" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
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

export default Demo5_8
