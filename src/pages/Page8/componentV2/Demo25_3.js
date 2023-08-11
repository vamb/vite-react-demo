import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Image } from 'antd'
import img0 from './assets/0.webp'
import img1 from './assets/1.webp'
import img2 from './assets/2.webp'
import img3 from './assets/3.awebp'
import img4 from './assets/4.awebp'
import img5 from './assets/5.awebp'
import img6 from './assets/6.awebp'
import img7 from './assets/7.awebp'
import img8 from './assets/8.awebp'
import img9 from './assets/9.awebp'
import img10 from './assets/10.awebp'

const Demo25_3 = () => {

  return (
    <UnitContent title={'Demo25_3 物理属性 | 逻辑属性'}>
      <TipsWrapper>
        <div><Image width={280} src={img0} /></div>
        <div><Image width={280} src={img1} /></div>
        <div><Image width={280} src={img2} /></div>
        <div><Image width={280} src={img3} /></div>
        <div><Image width={280} src={img4} /></div>
        <div><Image width={280} src={img5} /></div>
        <div><Image width={280} src={img6} /></div>
        <div><Image width={280} src={img7} /></div>
        <div><Image width={280} src={img8} /></div>
        <div><Image width={280} src={img9} /></div>
        <div><Image width={280} src={img10} /></div>
      </TipsWrapper>
      <Wrapper>
        <div className={'ctl-area'}>ctl 1</div>
        <div className={'ctl-area'}>ctl 2</div>
        <div className={'display-area'}>
          <div className={'inside-block'} />
        </div>
        <div className={'display-area'}>
          <div className={'inside-block'} />
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #fff;
  padding: 10px;
  grid-gap: 10px 10px;
  & > div {
    border: 1px solid lightgray;
  }
  .ctl-area {
    background: #fff;
    padding: 20px;
  }
  .display-area {
    background: lightyellow;
    width: 100%;
    height: 300px;
  }
  .inside-block {
    width: 150px;
    height: 80px;
    background: lightblue;
  }
`

const TipsWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 10px 10px;
  justify-items: center;
  align-items: center;
  & > div {
    width: 100%;
    height: 100%;
    background: lightyellow;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  }
`

export default Demo25_3
