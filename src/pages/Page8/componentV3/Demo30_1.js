import React, { useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import Parallax from 'parallax-js'

// https://github.com/wagerfield/parallax
// demo: http://markdalgleish.com/projects/stellar.js/demos/backgrounds.html

const Demo30_1 = () => {

  useEffect(()=>{
    const scene = document.getElementById('scene_30_1')
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      clipRelativeInput: false,
      hoverOnly: true
    });
  },[])

  return (
    <UnitContent title={'30_1 Parallax 插件版: 位置布局等属性会被重置，只能使用图片'}>
      <Wrapper>
        <div id={'scene_30_1'}>
          <div data-depth="0.2" className={'left'}>My first Layer!</div>
          <div data-depth="0.6" className={'right'}>My second Layer!</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  #scene_30_1 {
    width: 100%;
    background-color: #557;
    overflow: hidden;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      width: 96%;
      line-height: 200px;
      height: 100%;
      color: #fff;
    }
    & > :first-child {
      text-align: left;
    }
    & > :last-child {
      text-align: right;
    }
  }
  .left {
    // background-color: lightgreen;
  }
  .right {
    // background-color: lightblue;
  }
`

export default Demo30_1
