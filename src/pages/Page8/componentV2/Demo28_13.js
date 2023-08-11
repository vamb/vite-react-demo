import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import bgImg from './assets28/img28_13/bg2.jpg'

const Demo28_13 = () => {

  /**
   * -webkit：safari、chrome私有属性 一般用于移动端网页开发
   * -moz：firefox浏览器私有属性
   * -ms：ie浏览器私有属性
   * -o：Opera
   */

  return (
    <UnitContent title={'28_13 background-clip背景裁剪 text-stroke文字描边'}>
      <Wrapper>
        <div className={'main-content'}>
          <div className={'main-mask'} />
          <div className={'main-title'}>
            这是标题
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  background-color: #13283e;
  width: 100%;
  height: 300px;
  .main-content {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    .main-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000088;
    }
    .main-title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      -webkit-background-clip: text;
      background-image: url(${bgImg});
      background-repeat: no-repeat;
      background-size: cover;
      font-size: 9vw;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export default Demo28_13
