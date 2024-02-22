import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_3_2 = () => {

  useEffect(()=>{
    const canvas = document.getElementById('targetPlace3_2')
    if(canvas){
      const c = canvas.getContext('2d')
      c.beginPath()
      // 设置填充色
      c.fillStyle = 'green'
      //绘制实心矩阵(x, y, width, height)
      c.fillRect(100,100,120,120)
      //清除画布
      c.clearRect(120, 120, 80,80)

      c.strokeStyle = 'blue'
      //绘制空心矩阵
      c.strokeRect(20, 20, 50, 50)
      c.closePath()
    }
  },[])

  return (
    <UnitContent title={'5_3_2'}>
      <Wrapper>
        <canvas id="targetPlace3_2" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo5_3_2
