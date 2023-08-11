import React, { useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import img1 from './assets28/image28/1.jpg'
import img2 from './assets28/image28/2.jpg'
import img3 from './assets28/image28/3.jpg'

const Demo28_10 = () => {

  useEffect(()=>{
    let time
    let left = document.querySelector(".button-left")
    let right = document.querySelector(".button-right")
    let min = document.querySelectorAll(".min")
    let images = document.querySelector(".images")

    // 我们先设置一个index用来计算和控制图片的位置，再设置一个time作为定时器
    let index = 0

    // 反之desc为减函数，如果当前图片的位置值index小于1了，那么他的值就反弹到最顶端，也就是轮播图的最后面，如若不然index就减一
    function desc() {
      if (index < 1) {
        index = min.length-1
      } else {
        index--
      }
    }

    // 然后我们创建一个复用函数add为加函数，如果当前图片的位置值index大于等于当前图片数量的话，就说明超出了计算范围，所以得清零，如若不然index就加一
    function add() {
      if (index >= min.length-1) {
        index = 0
      } else {
        index++
      }
    }

    // 在这里我们先创建一个position为复用函数，作用就是结合index来定义当前图片的位置的
    function position() {
      images.style.left = (index * -100) + "%"
    }

    // 创建一个timer来当做复用时间的函数，每隔3秒钟index就加一，然后加入增加add函数和desc函数来判断一下，再加入定位函数
    function timer(){
      time = setInterval(() => {
        index++
        desc()
        add()
        position()
      }, 3000)
    }

    // 接下来我们设置一下按钮，left为左边的按钮，因为点击时图片会反方向倒退，所以我们套入desc减函数进去，顺便定位一下
    // 当然，点击的时候我们必须先把定时器给停掉再重新执行一遍，不然会在你点击下一张图片时，定时器倒计时一到也跟着生效，这样子就会连跳两张图片了
    left.addEventListener("click", () => {
      desc()
      position()
      clearInterval(time)
      timer()
    })

    // 右边的按钮和左边也是差不多
    right.addEventListener("click", () => {
      add()
      position()
      clearInterval(time)
      timer()
    })

    // 在弄好左右两个按钮的时候，我们还需要生效下面的小图片按钮，
    // 首先我们先遍历一遍，然后获取当前点击的那个小图片按钮的值并赋值给index，这样子就可以随之跳转
    for (let i = 0; i < min.length; i++) {
      min[i].addEventListener("click", () => {
        index = i
        position()
        clearInterval(time)
        timer()
      })
    }

    // 最后的最后我们将定时器开起来，这样子图片就可以自动轮播啦，如果还不明白多练几遍就会了，将其理解进去，吸取精华所在，反复咀嚼，加油，感谢你的观看，我们下期再见
    timer()
  },[])

  return (
    <UnitContent title={'28_10 轮播'}>
      <Wrapper>
        <div className="shell">
          <ul className="images">
            <li className="img" style={{backgroundColor: 'lightcyan'}} />
            <li className="img" style={{backgroundColor: 'lightgoldenrodyellow'}} />
            <li className="img" style={{backgroundColor: 'lightpink'}} />
          </ul>
          <ul className="min-images">
            <li className="min" />
            <li className="min" />
            <li className="min" />
          </ul>
          <div className="button">
            <div className="button-left">{'<'}</div>
            <div className="button-right">{'>'}</div>
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  background-color: rgb(170, 190, 250);

  .shell {
    width: 900px;
    height: 500px;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    border: 10px #fff solid;
    box-shadow: 20px 30px 20px rgba(0, 0, 0, 0.5);
  }
  
  .images {
    width: 300%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    transition: .2s;
  }
  .img{
    width: 100%;
    background-size: cover;
  }
  li::marker {
    content: "";
  }
  .img:nth-child(1){
    background-image: url("${img1}");
  }
  .img:nth-child(2){
    background-image: url("${img2}");
  }
  .img:nth-child(3){
    background-image: url("${img3}");
  }
  
  .min-images {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 20px;
    width: 40%;
    z-index: 999;
    right: 10%;
  }
  
  .min{
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 50%;
    background-size: cover;
    border: solid rgba(255, 255, 255, 0.5) 5px;
    box-sizing: border-box;
    background-position: -20px 0;
  }
  .min:nth-child(1){
    background-image: url("${img1}");
  }
  .min:nth-child(2){
    background-image: url("${img2}");
  }
  .min:nth-child(3){
    background-image: url("${img3}");
  }
  
  .button {
    width: 100%;
    height: 100%;
    position:absolute;
    display: flex;
    justify-content: space-between;
    user-select:none;
  }
  
  .button-left, .button-right {
    font-size: 50px;
    // background-color: rgba(160, 193, 255, 0.7);
    padding: 0 20px;
    cursor: pointer;
    line-height: 500px;
  }
`

export default Demo28_10
