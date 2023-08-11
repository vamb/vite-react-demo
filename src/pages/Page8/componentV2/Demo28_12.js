import React, { useState } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import Demo28_12_unit from "./Demo28_12_unit";
import img1 from './imgRes/01.jpg'
import img2 from './imgRes/02.jpg'
import img3 from './imgRes/03.jpg'
import img4 from './imgRes/04.jpg'
import img5 from './imgRes/05.jpg'
import img6 from './imgRes/06.jpg'
import {Button} from "antd";

const Demo28_12 = () => {
  const [ flag1, setFlag1 ] = useState(false)
  const [ flag2, setFlag2 ] = useState(false)
  const [ flag3, setFlag3 ] = useState(false)
  const [ flag4, setFlag4 ] = useState(false)
  const [ flag5, setFlag5 ] = useState(false)
  const [ flag6, setFlag6 ] = useState(false)

  return (
    <UnitContent title={'Demo28_12 clip-path 原型 椭圆 多边形 transition只对相同类型的图形有效果'}>
      <Wrapper>
        <Demo28_12_unit
          style={{
            backgroundImage: `url(${img1})`,
            clipPath: !flag1? `circle(20% at 15% 15%)`: 'circle(45% at 75% 75%)'
          }}
        >
          <Button type={'primary'} onClick={()=>{setFlag1(!flag1)}}>circle</Button>
        </Demo28_12_unit>
        <Demo28_12_unit
          style={{
            backgroundImage: `url(${img2})`,
            clipPath: !flag2? `ellipse(37% 25% at 33% 33%)`: `ellipse(37% 25% at 67% 67%)`
          }}
        >
          <Button type={'primary'} onClick={()=>setFlag2(!flag2)}>ellipse</Button>
        </Demo28_12_unit>
        <Demo28_12_unit
          style={{
            backgroundImage: `url(${img3})`,
            clipPath: !flag3? `polygon(50% 0%, 0% 100%, 100% 100%)`: `polygon(66% 0%, 33% 100%, 100% 100%, 10% 33%)`
          }}
        >
          <Button type={'primary'} onClick={()=>setFlag3(!flag3)}>polygon</Button>
        </Demo28_12_unit>
        <Demo28_12_unit
          style={{
            backgroundImage: `url(${img4})`,
            clipPath: !flag4? `polygon(50% 0%, 0% 100%, 100% 100%)`: `polygon(50% 0%, 0% 40%, 20% 100%, 80% 100%, 100% 40%)`
          }}
        >
          <Button type={'primary'} onClick={()=>setFlag4(!flag4)}>circle</Button>
        </Demo28_12_unit>
        <Demo28_12_unit
          style={{
            backgroundImage: `url(${img5})`,
            clipPath: !flag5? `polygon(50% 0%, 0% 100%, 100% 100%)`:
              `polygon(33% 0%, 33% 33%, 0% 33%, 0% 66%, 33% 66%, 33% 100%, 66% 100%, 66% 66%, 100% 66%, 100% 33%, 66% 33%, 66% 0%)`
          }}
        >
          <Button type={'primary'} onClick={()=>setFlag5(!flag5)}>circle</Button>
        </Demo28_12_unit>
        <Demo28_12_unit
          style={{
            backgroundImage: `url(${img6})`,
            clipPath: !flag6? `polygon(50% 0%, 0% 100%, 100% 100%)`:
              `polygon(97% 34%, 61% 34%, 50% 0%, 38% 34%, 2% 34%, 32% 55%, 20% 90%, 50% 68%, 79% 90%, 67% 55%)`
          }}
        >
          <Button type={'primary'} onClick={()=>setFlag6(!flag6)}>circle</Button>
        </Demo28_12_unit>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  background: #6aa983;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  align-content: start;
  padding: 20px;
  gap: 10px;
`

export default Demo28_12
