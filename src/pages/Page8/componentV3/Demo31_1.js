import styled from "styled-components";
import React from 'react'
import UnitContent from "../../components/UnitContent";
import img1 from './assets/Demo31_1/1.jpg'
import img2 from './assets/Demo31_1/2.webp'
import img3 from './assets/Demo31_1/3.webp'
import img4 from './assets/Demo31_1/4.webp'
import img5 from './assets/Demo31_1/5.webp'

const Demo31_1 = () => {

  return (
    <UnitContent title={'31_1 百叶窗1'}>
      <Wrapper>
        <div className={'main-content'}>
          <div className={'unit-area'} style={{backgroundColor: '#fd79a8'}}>
            <img src={img1} alt={''} />
          </div>
          <div className={'unit-area'} style={{backgroundColor: '#81ecec'}}>
            <img src={img2} alt={''} />
          </div>
          <div className={'unit-area'} style={{backgroundColor: '#74b9ff'}}>
            <img src={img3} alt={''} />
          </div>
          <div className={'unit-area'} style={{backgroundColor: '#a29bfe'}}>
            <img src={img4} alt={''} />
          </div>
          <div className={'unit-area'} style={{backgroundColor: '#ffeaa7'}}>
            <img src={img5} alt={''} />
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  background-color: #b2bec3;
  display: flex;
  justify-content: center;
  .main-content {
    width: 900px;
    height: 300px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
  .unit-area {
    transition: all 0.7s;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
  }
  .unit-area:hover {
    flex-shark: 0;
    flex-grow: 0;
    width: 800px;
  }
  img {
    width: 400px;
  }
`

export default Demo31_1
