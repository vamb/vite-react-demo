import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo27_3 = () => {
  return (
    <UnitContent title={'27_3 Grid 简单的 Demo'}>
      <Wrapper>
        <div className="grid__container">
          <div className="grid__item">1</div>
          <div className="grid__item">2</div>
          <div className="grid__item">3</div>
          <div className="grid__item">4</div>
          <div className="grid__item">5</div>
          <div className="grid__item">6</div>
          <div className="grid__item">7</div>
          <div className="grid__item">8</div>
          <div className="grid__item">9</div>
          <div className="grid__item">10</div>
        </div>
        <div className={'info-tips'}>
          隐式的row或者column默认就是1fr
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  background-color: #557;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  .grid__container {
    width: 60%;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 100px 1fr 40px;
    // grid-auto-rows: 2fr;
    border: 1px dashed #f36;
    box-shadow: 0 0 0 6px rgb(0 0 0 / 13%);
    border-radius: 1px;
    background-color: lightyellow;
    grid-gap: 5px;
    padding: 5px;
  }
  .grid__item {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e8f0fe;
    border: 2px solid #2938e9;
    border-radius: 4px;
    color: #000;
    padding: 1rem;
    font-size: 2rem;
  }
  .grid__item:nth-child(1) {
    background-color: #f1c2c6;
  }

  .grid__item:nth-child(2) {
    background-color: #efe1ff;
  }
  
  .grid__item:nth-child(3) {
    background-color: #bbd7af;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #bbd7af;
    background-image: repeating-conic-gradient(
        from 7.5deg at 50% 0,
        transparent 0 15deg,
        gold 0 30deg
      ),
      linear-gradient(177deg, #f11818, #f4070700);
    mix-blend-mode: difference;
    background-blend-mode: luminosity;
    text-shadow: 1px 1px 0px rgb(0 0 0 / 50%);
    box-shadow: inset 0px 0px 0px 3px;
    padding: 1.5rem;
  }
  
  .grid__item:nth-child(3) {
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }
  
  .grid__item:nth-child(4) {
    background-color: #209fbb;
  }
  
  .grid__item:nth-child(5) {
    background-color: #00f0ff;
  }
  
  .item:nth-child(6) {
    background-color: #cefaf0;
  }
  
  .info-tips {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
`

export default Demo27_3
