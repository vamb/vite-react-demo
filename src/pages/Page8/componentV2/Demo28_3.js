import React, { useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo28_3 = () => {

  useEffect(()=>{
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");

    const getData = () => {
      let curr = new Date();
      let h = (curr.getHours() % 12) + curr.getMinutes() / 59;
      let m = curr.getMinutes();
      let s = curr.getSeconds();
      h *= 30;
      m *= 6;
      s *= 6;
      // 设置transform样式，rotate一定的角度
      // 设置小时
      setRotate(hours, h);
      // 设置分针
      setRotate(minutes, m);
      // 设置秒针
      setRotate(seconds, s);
      // 每秒执行
      setTimeout(getData, 1000);
    };
    const setRotate = (e, v) => {
      e.style.transform = `rotate(${v}deg)`;
    };
    // 默认执行
    getData();
  },[])

  return (
    <UnitContent title={'28_3 时钟'}>
      <Wrapper>
        <div className={'box'}>
          <div className="inner">
            <div className="inner-dot1" />
            <div className="inner-dot2" />
          </div>
          {/*  时针 */}
          <div className="base hours" />
          {/*  分针 */}
          <div className="base minutes" />
          {/*  秒针 */}
          <div className="base seconds" />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  // :root {
  //   /* 页面背景色 */
  //   --bg: #343956;
  //   /* 秒针背景色、中间圆点背景色 */
  //   --primary: #dd245b;
  //   /* 分针背景色 */
  //   --minutes-color: #9baacf;
  //   /* 时针背景色 */
  //   --hours-color: #bec8e4;
  // }
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343956;
  .box {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(225deg, #2f334d, #383d5c);
    box-shadow: -25px 25px 45px #282c42, 25px -25px 45px #40466a;
    & > .inner {
      width: 180px;
      height: 180px;
      position: absolute;
      /* inset:10px等同于left，bottom，top，right都为10px */
      inset: 10px;
      border-radius: 50%;
      box-shadow: inset 10px 10px 20px rgba(35, 39, 60, 0.7),
        inset -10px -10px 20px rgba(35, 39, 60, 0.7);
    }
  }
  .inner::before {
    content: "";
    position: absolute;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    /* top: calc(50% - 30%);
    left: calc(50% - 30%); */
    /* 简写为 */
    inset: 20%;
    background: linear-gradient(225deg, #2b324b, #363b59);
    box-shadow: -5px 5px 10px #272a40, 5px -5px 10px #3e4466;
  }
  .inner-dot1,
  .inner-dot2 {
    position: absolute;
    border-radius: 4px;
    box-shadow: inset 1px 1px 1px #232947, inset -1px -1px 1px #3e3d3d;
  }
  .inner-dot1 {
    width: 6px;
    height: 16px;
    top: 5px;
    left: calc(50% - 3px);
    /* 倒影  */
    -webkit-box-reflect: below calc(180px - 2 * 5px - 2 * 16px);
  }
  .inner-dot2 {
    width: 16px;
    height: 6px;
    top: calc(50% - 3px);
    left: 5px;
    /* 倒影  */
    -webkit-box-reflect: right calc(180px - 2 * 5px - 2 * 16px);
  }
  /* 中间圆点 */
  .box::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    /* 注意 calc计算 中间要有空格！！！ */
    left: calc(50% - 5px);
    top: calc(50% - 5px);
    background: #dd245b;
    z-index: 2;
  }
  .box .base {
    position: absolute;
    border-radius: 5px;
    bottom: 50%;
    z-index: 1;
    /* 设置transform旋转的原点 */
    transform-origin: bottom;
  }
  .box .hours {
    width: 4px;
    height: 45px;
    background: #bec8e4;
    /* 居中 */
    left: calc(50% - 2px);
  }
  .box .minutes {
    width: 4px;
    height: 60px;
    background: #9baacf;
    /* 居中 */
    left: calc(50% - 2px);
  }
  .box .seconds {
    width: 2px;
    height: 80px;
    background: #dd245b;
    /* 居中 */
    left: calc(50% - 1px);
  }
`

export default Demo28_3
