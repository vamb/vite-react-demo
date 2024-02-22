import React from 'react'
import styled from "styled-components";
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'

const PerspectivePage = () => {

  return (
    <Wrapper>
      <div className={"shell"}>
        <div className={"image"} style={{backgroundImage: `url(${img1})`}} />
        <div className={"heading"}>
          <h1>When you are confused</h1>
        </div>
        <div className={"text"}>
          <h1>Set goals in your mind</h1>
        </div>

        <div className={"image"} style={{backgroundImage: `url(${img2})`}} />
        <div className={"heading"}>
          <h1>When you're down</h1>
        </div>
        <div className={"text"}>
          <h1>Try to wake up the beast in your heart</h1>
        </div>

        <div className={"image"} style={{backgroundImage: `url(${img3})`}} />
        <div className={"heading"}>
          <h1>When prople leave you</h1>
        </div>
        <div className={"text"}>
          <h1>It's time to start your season</h1>
        </div>

        <div className={"image"} style={{backgroundImage: `url(${img4})`}} />
        <div className={"heading"}>
          <h1>Come on,stranger.</h1>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  padding: 0;
  margin: 0;
  .shell {
    height: 100vh;
    overflow-x: hidden;
    perspective: 3px;
  }
  .shell div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    letter-spacing: 2px;
  }
  .image {
    transform: translateZ(-1px) scale(1.5);
    background-size: cover;
    height: 100vh;
    z-index: -1;
  }
  .text {
    height: 50vh;
    background-color: #fff;
  }
  .text h1 {
    color: #000;
    font-size: 30px;
  }
  .heading {
    z-index: -1;
    transform: translateY(-30vh) translateZ(1px);
  }
  .heading > h1 {
    color: #fff;
    font-size: 30px;
  }
`

export default PerspectivePage
