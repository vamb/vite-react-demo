import React from 'react'
import styled from "styled-components";

const Demo28_11_unit = (props) => {
  const { imgSrc } = props

  return (
    <Wrapper>
      <div
        className={'unit-top'}
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover'
        }}
      />
      <div className={'unit-bottom'}>

      </div>
      <div className={'cover-area'}>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  .unit-top {
    background-color: #db5a6c;
    width: 150px;
    height: 100px;
    border-radius: 4px;
  }
  .unit-top::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 60px;
    width: 15px;
    height: 15px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -5px 5px 0 #fff;
  }
  .unit-top::after {
    content: '';
    position: absolute;
    left: 70px;
    top: 95px;
    width: 15px;
    height: 15px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -5px 5px 0 #fff;
  }
  .unit-bottom {
    background-color: #feb4a7;
    width: 150px;
    height: 100px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .cover-area {
    width: 60px;
    height: 40px;
    background-color: #feb4a7;
    position: absolute;
    top: 75px;
    left: 10px;
    border-top: 5px solid #fff;
    border-right: 5px solid #fff;
    border-top-right-radius: 10px;
  }
  .cover-area::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: #feb4a7;
    border-radius: 50%;
    box-shadow: -10px -5px 0 #fff;
  }
  .cover-area::after {
    content: '';
    position: absolute;
    right: -5px;
    bottom: 0;
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 50%;
    box-shadow: -1px 1px 0 #feb4a7;
  }
`

export default Demo28_11_unit
