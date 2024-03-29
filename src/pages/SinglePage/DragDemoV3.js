import React, { useEffect } from 'react'
import styled from "styled-components";
import smallImg from './assets/small.png'
import bigImg from './assets/big.jpeg'

const DragDemoV3 = () => {

  useEffect(()=>{
    // 获取元素
    var cover = window.document.querySelector('.cover');
    var leftphone = window.document.querySelector('.leftphone');
    console.log('leftphone', leftphone)
    var rightbox = window.document.querySelector('.rightbox');
    var big = window.document.querySelector('.big');
    // 鼠标移动到左边的手机上的时候遮罩层和右边的手机显示出来
    leftphone.addEventListener('mouseover', function() {
      cover.style.display = 'block'
      rightbox.style.display = 'block'
    })
    // 鼠标移离开到左边的手机上的时候遮罩层和右边的手机隐藏
    leftphone.addEventListener('mouseout', function() {
      cover.style.display = 'none'
      rightbox.style.display = 'none'
    })
    leftphone.addEventListener('mousemove', function(e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      // x的移动距离
      var totalx = x - cover.offsetWidth / 2;
      var totaly = y - cover.offsetHeight / 2
      if (totalx < 0) {
        totalx = 0;
      } else if (totalx >= leftphone.offsetWidth - cover.offsetWidth) {
        totalx = leftphone.offsetWidth - cover.offsetWidth;
      }
      if (totaly < 0) {
        totaly = 0;
      } else if (totaly >= leftphone.offsetHeight - cover.offsetHeight) {
        totaly = leftphone.offsetHeight - cover.offsetHeight;
      }
      cover.style.left = totalx + 'px';
      cover.style.top = totaly + 'px';
      // imgmaxx是图片最大x移动距离
      var imgmaxx = rightbox.offsetWidth - big.offsetWidth;
      var imgmaxy = rightbox.offsetHeight - big.offsetHeight;
      var imgmovex = totalx * imgmaxx / (leftphone.offsetWidth - cover.offsetWidth)
      var imgmovey = totaly * imgmaxy / (leftphone.offsetHeight - cover.offsetHeight)
      big.style.left = imgmovex + 'px';
      big.style.top = imgmovey + 'px';
    })
  },[])

  return (
    <Wrapper>
      <div className="container">
        <div className="topbox">
          <ul>
            <li>全部商品分类</li>
            <li>服装城</li>
            <li>美妆馆</li>
            <li>传智超市</li>
            <li>全球购</li>
            <li>闪购</li>
            <li>团购</li>
            <li>拍卖</li>
            <li>有趣</li>
          </ul>
        </div>
        <div className="bottombox">
          <div className="leftbox">
            <div className="leftnav">
              <ul>
                <li>{`手机、数码、通讯`}&nbsp;&nbsp;{'>'}</li>
                <li>{'手机 '}&nbsp;&nbsp;{'>'}</li>
                <li>{'Apple苹果 '}&nbsp;&nbsp;{'>'}</li>
                <li>iphone 6S Plus系统&nbsp;&nbsp;</li>
              </ul>
              <div className="leftphone">
                <img src={smallImg} alt="small" />
                  <div className="cover" />
              </div>
            </div>
          </div>
          <div className="rightbox">
            <img src={bigImg} alt="big" className="big" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  margin: 0;
  padding: 0;
  ul li {
    list-style: none;
  }
  .container {
    box-sizing: border-box;
    width: 1200px;
    height: 500px;
    margin: 200px auto;
  }
  .container .topbox {
    width: 100%;
    height: 60px;
    border-bottom: 2px solid #bc2815;
  }
  .container .topbox ul {
    margin-left: 10px;
  }
  .container .topbox ul li {
    float: left;
    font-size: 22px;
    color: #4e535b;
    padding: 15px 20px;
  }
  .container .topbox ul li:hover {
    color: white;
    background-color: #bc2815;
  }
  .container .topbox ul li:first-child {
    color: white;
    background-color: #bc2815;
  }
  .container .bottombox .leftbox {
    float: left;
    height: 400px;
    width: 400px;
    /* background-color: violet; */
    margin-top: 10px;
  }
  .container .bottombox .leftbox ul {
    overflow: hidden;
    margin-left: 10px;
  }
  .container .bottombox .leftbox ul li {
    float: left;
    font-size: 14px;
    color: #4e535b;
  }
  .container .bottombox .leftbox .leftphone {
    position: relative;
    overflow: hidden;
    width: 400px;
    height: 400px;
    margin-top: 5px;
    margin-left: 10px;
    border: 1px solid #c8cbc8;
  }
  .leftbox .leftphone img {
    width: 100%;
    height: 100%;
  }
  .container .bottombox .leftbox .leftphone .cover {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 220px;
    height: 220px;
    background-color: #ffeba2;
    opacity: 0.5;
    border: 1px solid #ccc;
    cursor: move;
  }
  .container .bottombox .rightbox {
    float: left;
    margin-top: 10px;
    width: 420px;
    height: 420px;
    margin-left: 20px;
    /* background-color: violet; */
  }
  .container .bottombox .rightbox {
    position: relative;
    display: none;
    border: 1px solid #ccc;
    overflow: hidden;
  }
  .container .bottombox .rightbox img {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default DragDemoV3
