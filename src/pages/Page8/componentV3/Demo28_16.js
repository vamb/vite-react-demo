import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import image1 from "./assets/Demo28_16/01.png"
import text_1Img from "./assets/Demo28_16/text-1.png"
import image2 from "./assets/Demo28_16/02.png"
import image3 from "./assets/Demo28_16/03.png"
import text_2Img from "./assets/Demo28_16/text-2.png"
import image4 from "./assets/Demo28_16/04.png"

const Demo28_16 = () => {

  return (
    <UnitContent title={'28_16 视觉冲击卡片 rotateX以标点的x轴为轴线旋转一个角度 perspective设定视角差距 zIndex的设定给定了一个高度差，为perspective的效果服务'}>
      <Wrapper>
        <div className="shell">
          <div className="card">
            <div className="wrapper">
              <img src={image1} alt="" className="cover-image" />
            </div>
            <img src={text_1Img} alt="" className="title" />
            <img src={image2} alt="" className="character" />
          </div>

          <div className="card">
            <div className="wrapper">
              <img src={image3} alt="" className="cover-image" />
            </div>
            <img src={text_2Img} alt="" className="title" />
            <img src={image4} alt="" className="character" />
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  .shell {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 270px;
    height: 545px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 25px;
    perspective: 2500px;
    transition: all 0.4s;
    margin: 0 100px;
  }

  .cover-image {
    width: 100%;
    height: 100%;
  }

  .wrapper {
    transition: all 0.3s;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  .card:hover .wrapper {
    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
    box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  }

  .wrapper::before,
  .wrapper::after {
    content: "";
    opacity: 0;
    width: 100%;
    height: 80px;
    transition: all 0.3s;
    position: absolute;
    left: 0;
  }

  .wrapper::before {
    top: 0;
    height: 100%;
    background-image: linear-gradient(to top,
            transparent 46%,
            rgba(12, 13, 19, 0.5) 68%,
            rgba(12, 13, 19) 97%);
  }

  .wrapper::after {
    bottom: 0;
    opacity: 1;
    background-image: linear-gradient(to bottom,
            transparent 46%,
            rgba(12, 13, 19, 0.5) 68%,
            rgba(12, 13, 19) 97%);
  }

  .card:hover .wrapper::before,
  .wrapper::after {
    opacity: 1;
  }

  .card:hover .wrapper::after {
    height: 120px;
  }

  .title {
    width: 100%;
    transition: transform 0.3s;
  }

  .card:hover .title {
    transform: translate3d(0%, -50px, 100px);
  }

  .character {
    width: 100%;
    opacity: 0;
    transition: all 0.3s;
    position: absolute;
    z-index: -1;
  }

  .card:hover .character {
    opacity: 1;
    transform: translate3d(0%, -20%, 100px);
  }

  .card:hover {
    transform: translateY(40px);
  }
`

export default Demo28_16
