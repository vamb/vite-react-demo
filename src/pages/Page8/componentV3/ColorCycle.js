import React from 'react'
import styled from "styled-components";

const ColorCycle = props => {
  const { name, array } = props
  // console.log('title, array', title, array)
  return (
    <Wrapper>
      <div
        className={'cycle-header'}
        style={
          {
            color: array.length % 2===0? array[(array.length)/2]: array[(array.length+1)/2],
          }
        }
      >{name}</div>
      <div className={'cycle-body'}>
        {
          Array.isArray(array) && array.length>0 &&
          array.map((item, idx)=>{
            return (
              <div key={`cycle-unit-${idx}`}>
                <div className={'cycle'} style={{backgroundColor: item}} />
                <div className={'title'} style={{color: item}}>{item}</div>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  .cycle-body {
    display: flex;
    flex-direction: row;
    padding: 10px;
    &>div {
      margin-left: -28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 120px;
      position: relative;
      .cycle {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        left: 0;
        top: 0;
        absolute;
      }
      .title {
        height: 20px;
        line-height: 20px;
        color: #fff;
        user-select: text;
      }
    }
    &>div:nth-child(1) {
      margin-left: 0;
    }
  }
  .cycle-header {
    user-select: text;
  }
`

export default ColorCycle
