import React, { useEffect } from 'react'
import styled from "styled-components";

const ScrollDemoV1 = () => {

  useEffect(()=>{
    // 1. 获取元素
    const sliderBar = document.querySelector('.slider-bar')
    const goBack = document.querySelector('.go-back')

    // 2. 页面滚动事件 scroll
    document.addEventListener('scroll', ()=>{
      // 这个是页面上滚后被卷去的高度
      // console.log(window.pageYOffset)
      // 3. 当我们页面被卷去的头部大于等于 200, 此时侧边栏就要改成fixed
      if(window.pageYOffset >= 200){
        sliderBar.style.position = 'fixed'
        sliderBar.style.top = '210px'
      }else{
        sliderBar.style.position = 'absolute'
        sliderBar.style.top = '410px'
      }

      if(window.pageYOffset >= 410){
        goBack.style.display = 'block'
      }else{
        goBack.style.display = 'none'
      }
    })

    goBack.addEventListener('click', ()=>{
      window.pageYOffset = 0
    })
  },[])

  return (
    <Wrapper>
      <div className="slider-bar">
        <span className="go-back">返回顶部</span>
      </div>
      <div className="main-content">
        <div className="header_w">头部区域</div>
        <div className="banner_w">头部区域</div>
        <div className="main_w">头部区域</div>
        <div className="footer_w">头部区域</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  .main-content {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .header_w, .banner_w, .main_w, .footer_w {
    width: 100%;
    height: 400px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slider-bar {
    position: absolute;
    right: 100px;
    top: 410px;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid blueviolet;
    width: 50px;
    height: 150px;
  }
  .go-back {
    background: #ffeba2;
    cursor: pointer;
    display: none;
  }
`

export default ScrollDemoV1
