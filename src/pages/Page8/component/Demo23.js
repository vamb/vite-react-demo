import React, { memo, useState } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import Demo23Unit from "./Demo23Unit";

const Demo23 = memo(()=>{
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
    <UnitContent unitTitle={'Demo23 css => filter'}>
      <Wrapper>
        <Demo23Unit {...{ value: filterBlur, updateValue: setFilterBlur,
          defaultCss: 'filter-blur', infoText: `filter: blur(3px)` }}
        />
        <Demo23Unit
          {...{ value: filterBrightness, updateValue: setFilterBrightness,
            defaultCss: 'filter-brightness', infoText: `brightness(0 ~ 1, 可以超过1)` }}
        />
        <Demo23Unit
          {...{ value: contrast, updateValue: setContrast,
            defaultCss: 'filter-contrast', infoText: `contrast(0 ~ 1, 1全黑)` }}
        />
        <Demo23Unit
          {...{ value: grayScale, updateValue: setGrayScale,
            defaultCss: 'filter-grayscale', infoText: `grayscale(0 ~ 1) 1完全灰度图)` }}
        />
        <Demo23Unit
          {...{ value: hueRotate, updateValue: setHueRotate,
            defaultCss: 'filter-hue-rotate', infoText: `hue-rotate(0 ~ 360deg) 应用色相旋转)` }}
        />
        <Demo23Unit
          {...{ value: invert, updateValue: setInvert,
            defaultCss: 'filter-invert', infoText: `invert(0 ~ 100) 色相反转` }}
        />
        <Demo23Unit
          {...{ value: opacity, updateValue: setOpacity,
            defaultCss: 'filter-opacity', infoText: `opacity(0 ~ 1) 透明度` }}
        />
        <Demo23Unit
          {...{ value: saturate, updateValue: setSaturate,
            defaultCss: 'filter-saturate', infoText: `saturate(0 ~ 1) 可以大于1 饱和度` }}
        />
        <Demo23Unit
          {...{ value: sepia, updateValue: setSepia,
            defaultCss: 'filter-sepia', infoText: `sepia(0 ~ 1) 褐色图` }}
        />
        <Demo23Unit
          {...{ value: dropShadow, updateValue: setDropShadow, defaultCss: 'filter-drop-shadow',
            infoText: `drop-shadow(h-shadow v-shadow blur spread color)` }}
        />
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
  @keyframes filter-blur {
    0% { filter: blur(0px); }
    100% { filter: blur(3px); }
  }
  @keyframes filter-blur-false {
    0% { filter: blur(3px); }
    100% { filter: blur(0px); }
  }
  @keyframes filter-brightness {
    0% { filter: brightness(1); }
    100% { filter: brightness(0.4); }
  }
  @keyframes filter-brightness-false {
    0% { filter: brightness(0.4); }
    100% { filter: brightness(1); }
  }
  @keyframes filter-contrast {
    0% { filter: contrast(1) }
    100% { filter: contrast(0) }
  }
  @keyframes filter-contrast-false {
    0% { filter: contrast(0) }
    100% { filter: contrast(1) }
  }
  @keyframes filter-grayscale {
    0% { filter: grayscale(0%) }
    100% { filter: grayscale(1) }
  }
  @keyframes filter-grayscale-false {
    0% { filter: grayscale(1) }
    100% { filter: grayscale(0%) }
  }
  @keyframes filter-hue-rotate {
    0% { filter: hue-rotate(0) }
    100% { filter: hue-rotate(90deg) }
  }
  @keyframes filter-hue-rotate-false {
    0% { filter: hue-rotate(90deg) }
    100% { filter: hue-rotate(0) }
  }
  @keyframes filter-invert {
    0% { filter: invert(0) }
    100% { filter: invert(100) }
  }
  @keyframes filter-invert-false {
    0% { filter: invert(100) }
    100% { filter: invert(0) }
  }
  @keyframes filter-opacity {
    0% { filter: opacity(1) }
    100% { filter: opacity(0.4) }
  }
  @keyframes filter-opacity-false {
    0% { filter: opacity(0.4) }
    100% { filter: opacity(1) }
  }
  @keyframes filter-saturate {
    0% { filter: saturate(1) }
    100% { filter: saturate(10) }
  }
  @keyframes filter-saturate-false {
    0% { filter: saturate(10) }
    100% { filter: saturate(1) }
  }
  @keyframes filter-sepia {
    0% { filter: sepia(0) }
    100% { filter: sepia(100%) }
  }
  @keyframes filter-sepia-false {
    0% { filter: sepia(100%) }
    100% { filter: sepia(0) }
  }
  @keyframes filter-drop-shadow {
    0% { filter: drop-shadow(0 0 0 #fff) }
    100% { filter: drop-shadow(0 0 12px blueviolet) }
  }
  @keyframes filter-drop-shadow-false {
    0% { filter: drop-shadow(0 0 12px blueviolet) }
    100% { filter: drop-shadow(0 0 0 #fff) }
  }
  .demo-img {
    width: 250px;
    cursor: pointer;
    border-radius: 6px;
    animation: '' 0.2s steps(100) 0s 1 normal forwards running;
  }
`

export default Demo23
