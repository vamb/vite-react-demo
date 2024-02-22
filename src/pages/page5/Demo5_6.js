import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../components/UnitContent";

const Demo5_6 = () => {

  useEffect(()=>{
    const canvas = document.getElementById('targetPlace6')
    const ctx = canvas.getContext('2d')
    let width = 600,  height = 600;

    const getRandomColor =()=>{
      return '#'+ parseInt(Math.random()*0xffffff).toString(16)
    }
    const r = (num) =>{
      return Math.random()*num
    }

    function Ball(){
      // this.x = r(600)
      // this.y = r(600)
      this.x = r(500) + 50 // [50, 550), 保证宽度和坐标永远不会超出画布
      this.y = r(500) + 50 // [50, 550)
      this.r = r(40) + 10 // [10, 50)
      this.xSpeed = r(3) + 2 // [2, 5)
      this.ySpeed = r(3) + 1 // [1, 4)
      this.color = getRandomColor()
    }

    // 定义小球现实方法
    Ball.prototype.show = function() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
    }

    // 定义小球运动（碰撞检测）
    Ball.prototype.move = function() {
      if(this.x-this.r<=0 || this.x+this.r>=width){
        this.xSpeed = -this.xSpeed
      }
      this.x = this.x + this.xSpeed

      if(this.y-this.r<=0 || this.y+this.r>=height){
        this.ySpeed = -this.ySpeed
      }
      this.y =  this.y + this.ySpeed
    }

    Ball.prototype.moveAndShow = function() {
      this.move()
      this.show()
    }

    // 创建小球的数组
    let ballArr = []
    for(let i=0;i<50;i++){
      let ball = new Ball()
      ballArr.push(ball)
      ball.show()
    }

    // 小球动起来
    setInterval(function() {
      ctx.clearRect(0,0,width,height)
      for(let i=0;i<ballArr.length;i++){
        // 更新坐标，现实小球
        ballArr[i].moveAndShow()
      }
    }, 10)
  },[])

  return (
    <UnitContent title={'5_6'}>
      <Wrapper>
        <canvas id="targetPlace6" width="600px" height="600px">您的浏览器版本过低，请审计浏览器或者使用chrome打开！</canvas>
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

export default Demo5_6
