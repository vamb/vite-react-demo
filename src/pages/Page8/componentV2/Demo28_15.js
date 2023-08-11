import React, { useState } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Slider } from 'antd'
import defaultImg from '../component/assets/demo21.jpg'
import img2 from './assets28/img28_13/bg2.jpg'

const Demo28_25 = () => {
  const [ sliderVal, setSliderVal ] = useState(0)

  //'-webkit-mask-image' => WebkitMaskImage

  return (
    <UnitContent title={'28_15 mask-image 可以让图片产生渐变效果'}>
      <Wrapper>
        <div className={'img-content'}>
          <img
            src={defaultImg} alt={''}
            style={{WebkitMaskImage: `linear-gradient(0deg, rgb(227,227,227), ${sliderVal}%, transparent)`}}
          />
          <img
            src={img2} alt={''}
            style={{WebkitMaskImage: `linear-gradient(0deg, rgb(227,227,227), ${100-sliderVal}%, transparent)`}}
          />
        </div>
        <Slider
          min={0}
          max={100}
          style={{width: '150px'}}
          value={sliderVal}
          onChange={e=>setSliderVal(e)}
        />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  background-color: #13283e;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  .img-content {
    width: 200px;
    height: 200px;
    position: relative;
    aspect-ratio: 1/1;
  }
  .img-content > img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s;
  }
`

export default Demo28_25
