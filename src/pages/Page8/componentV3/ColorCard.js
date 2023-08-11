import React from 'react'
import styled from "styled-components";
import { handleCopyAction } from '../../utils/utils'

const ColorCard = props => {
  const { colorArr } = props
  return (
    <Wrapper>
      <div className={'card-content'}>
        {
          Array.isArray(colorArr) && colorArr.length>0 &&
          colorArr.map((item, idx)=> {
            return (
              <div
                key={`color-card-unit-${idx}`}
                style={{backgroundColor: item.bg, color: item.col}}
              >
                <div title={item?.title}>{item.name}</div>
                <div onClick={()=>handleCopyAction(item.bg)}>{`BG: ${item.bg}`}</div>
                <div onClick={()=>handleCopyAction(item.col)}>{`color: ${item.col}`}</div>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('span')`
  .card-content {
    display: flex;
    flex-direction: row;
    padding: 10px;
    background-color: #222;
    box-sizing: border-box;
    border: 1px solid lightgray;
    border-radius: 6px;
    & > div {
      width: 150px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      user-select: text;
      & > div {
        ::selection {
          background: #a862ea;
          color: #fff;
        }
      }
      & > :not(:first-child) {
        cursor: pointer;
      }
    }
  }
`

export default ColorCard
