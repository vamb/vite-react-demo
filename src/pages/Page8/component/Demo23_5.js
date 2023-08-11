import React, { memo, useState } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import Demo23_5Unit from "./Demo23_5Unit";

const Demo23_5 = memo(() =>{
  const [ filterBlur, setFilterBlur ] = useState(true)
  const [ filterBrightness, setFilterBrightness ] = useState(true)
  const [ contrast, setContrast ] = useState(true)
  const [ grayScale, setGrayScale ] = useState(true)
  const [ hueRotate, setHueRotate ] = useState(true)
  const [ invert, setInvert ] = useState(true)
  const [ opacity, setOpacity ] = useState(true)
  const [ saturate, setSaturate ] = useState(true)
  const [ sepia, setSepia ] = useState(true)
  const [ dropShadow, setDropShadow ] = useState(true)
  const [ url, setUrl ] = useState(true)

  return(
    <UnitContent unitTitle={'Demo23_5 css => backdrop-filter'}>
      <Wrapper>
        <Demo23_5Unit {...{ value: filterBlur, updateValue: setFilterBlur,
          defaultCss: 'backdrop-filter-blur', infoText: `backdrop-filter: blur(3px)` }}
        />
        <Demo23_5Unit
          {...{ value: filterBrightness, updateValue: setFilterBrightness,
            defaultCss: 'backdrop-filter-brightness', infoText: `brightness(0 ~ 1, 可以超过1)` }}
        />
        <Demo23_5Unit
          {...{ value: contrast, updateValue: setContrast,
            defaultCss: 'backdrop-filter-contrast', infoText: `contrast(0 ~ 1, 1全黑)` }}
        />
        <Demo23_5Unit
          {...{ value: grayScale, updateValue: setGrayScale,
            defaultCss: 'backdrop-filter-grayscale', infoText: `grayscale(0 ~ 1) 1完全灰度图)` }}
        />
        <Demo23_5Unit
          {...{ value: hueRotate, updateValue: setHueRotate,
            defaultCss: 'backdrop-filter-hue-rotate', infoText: `hue-rotate(0 ~ 360deg) 应用色相旋转)` }}
        />
        <Demo23_5Unit
          {...{ value: invert, updateValue: setInvert,
            defaultCss: 'backdrop-filter-invert', infoText: `invert(0 ~ 100) 色相反转` }}
        />
        {/*<Demo23_5Unit*/}
        {/*  {...{ value: opacity, updateValue: setOpacity,*/}
        {/*    defaultCss: 'backdrop-filter-opacity', infoText: `opacity(0 ~ 1) 透明度`, style: { background: 'green' } }}*/}
        {/*/>*/}
        <div className={'demo-content'}>
          <div className={'ctrl-unit'}>backdrop-filter: opacity 不会用</div>
        </div>
        <Demo23_5Unit
          {...{ value: saturate, updateValue: setSaturate,
            defaultCss: 'backdrop-filter-saturate', infoText: `saturate(0 ~ 1) 可以大于1 饱和度` }}
        />
        <Demo23_5Unit
          {...{ value: sepia, updateValue: setSepia,
            defaultCss: 'backdrop-filter-sepia', infoText: `sepia(0 ~ 1) 褐色图` }}
        />
        {/*<Demo23_5Unit*/}
        {/*  {...{ value: dropShadow, updateValue: setDropShadow, defaultCss: 'backdrop-filter-drop-shadow',*/}
        {/*    infoText: `drop-shadow(h-shadow v-shadow blur spread color)` }}*/}
        {/*/>*/}
        <div className={'demo-content'}>
          <div className={'ctrl-unit'}>backdrop-filter: drop-shadow 不会用</div>
        </div>
        <div className={'demo-content'}>
          <div className={'ctrl-unit'}>filter: url不会用</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  .demo-content {
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    border: 1px solid blueviolet;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .img-cover {
    width: 250px;
    height: 75px;
    position: absolute;
    bottom: 20px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    animation: '' 0.2s steps(100) 0s 1 normal forwards running;
  }
  .ctrl-unit {
    display: flex;
    justify-content: space-around;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 1px dashed gray;
  }
  .ctrl-unit > div:nth-child(1) {
    margin-right: 5px;
  }
  @keyframes backdrop-filter-blur {
    0% { backdrop-filter: blur(0px); }
    100% { backdrop-filter: blur(3px); }
  }
  @keyframes backdrop-filter-blur-false {
    0% { backdrop-filter: blur(3px); }
    100% { backdrop-filter: blur(0px); }
  }
  @keyframes backdrop-filter-brightness {
    0% { backdrop-filter: brightness(1); }
    100% { backdrop-filter: brightness(0.4); }
  }
  @keyframes backdrop-filter-brightness-false {
    0% { backdrop-filter: brightness(0.4); }
    100% { backdrop-filter: brightness(1); }
  }
  @keyframes backdrop-filter-contrast {
    0% { backdrop-filter: contrast(1) }
    100% { backdrop-filter: contrast(0) }
  }
  @keyframes backdrop-filter-contrast-false {
    0% { backdrop-filter: contrast(0) }
    100% { backdrop-filter: contrast(1) }
  }
  @keyframes backdrop-filter-grayscale {
    0% { backdrop-filter: grayscale(0%) }
    100% { backdrop-filter: grayscale(1) }
  }
  @keyframes backdrop-filter-grayscale-false {
    0% { backdrop-filter: grayscale(1) }
    100% { backdrop-filter: grayscale(0%) }
  }
  @keyframes backdrop-filter-hue-rotate {
    0% { backdrop-filter: hue-rotate(0) }
    100% { backdrop-filter: hue-rotate(90deg) }
  }
  @keyframes backdrop-filter-hue-rotate-false {
    0% { backdrop-filter: hue-rotate(90deg) }
    100% { backdrop-filter: hue-rotate(0) }
  }
  @keyframes backdrop-filter-invert {
    0% { backdrop-filter: invert(0) }
    100% { backdrop-filter: invert(100) }
  }
  @keyframes backdrop-filter-invert-false {
    0% { backdrop-filter: invert(100) }
    100% { backdrop-filter: invert(0) }
  }
  @keyframes backdrop-filter-opacity {
    0% { backdrop-filter: opacity(100%) }
    100% { backdrop-filter: opacity(40%) }
  }
  @keyframes backdrop-filter-opacity-false {
    0% { backdrop-filter: opacity(40%) }
    100% { backdrop-filter: opacity(100%) }
  }
  @keyframes backdrop-filter-saturate {
    0% { backdrop-filter: saturate(1) }
    100% { backdrop-filter: saturate(10) }
  }
  @keyframes backdrop-filter-saturate-false {
    0% { backdrop-filter: saturate(10) }
    100% { backdrop-filter: saturate(1) }
  }
  @keyframes backdrop-filter-sepia {
    0% { backdrop-filter: sepia(0) }
    100% { backdrop-filter: sepia(100%) }
  }
  @keyframes backdrop-filter-sepia-false {
    0% { backdrop-filter: sepia(100%) }
    100% { backdrop-filter: sepia(0) }
  }
  @keyframes backdrop-filter-drop-shadow {
    0% { backdrop-filter: drop-shadow(0 0 0 #fff) }
    100% { backdrop-filter: drop-shadow(0 0 12px blueviolet) }
  }
  @keyframes backdrop-filter-drop-shadow-false {
    0% { backdrop-filter: drop-shadow(0 0 12px blueviolet) }
    100% { backdrop-filter: drop-shadow(0 0 0 #fff) }
  }
  .demo-img {
    width: 250px;
    cursor: pointer;
    border-radius: 6px;
  }
`

export default Demo23_5
