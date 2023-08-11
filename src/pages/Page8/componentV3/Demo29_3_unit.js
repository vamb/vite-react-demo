import React from 'react'
import styled from "styled-components";
import { handleCopyAction } from '../../utils/utils'

const Demo29_3_unit = props => {
  const { title, colorArr, index, handleBgLinearCSSStr } = props

  return (
    <Wrapper>
      <div className={'unit-title'}>{title}</div>
      <div
        className={'unit-demo'}
        style={{backgroundImage: `linear-gradient(to right bottom, ${handleBgLinearCSSStr(colorArr)})`}}
        onClick={()=>handleCopyAction(`background-image: linear-gradient(to right bottom, ${handleBgLinearCSSStr(colorArr)});`)}
      />
      <div className={'unit-colors'}>
        {
          Array.isArray(colorArr) && colorArr.length>0 &&
          colorArr.map((item, idx)=>{
            return (
              <div
                key={`demo29-3-${index}-color-${idx}`} className={'colorUnit'}
                style={{backgroundColor: `#${item}`}}
                onClick={()=>handleCopyAction(`#${item}`)}
              >
                {`#${item}`}
              </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid #22222266;
  color: #222;
  padding: 10px;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 10px;
  }
  .unit-title {
    height: 20%;
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    user-select: none;
  }
  .unit-demo {
    width: 100%;
    height: 30%;
    border-radius: 4px;
    cursor: pointer;
  }
  .unit-colors: {
    height: 50%;
  }
  .colorUnit {
    width: 80px;
    height: 60px;
    border-radius: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
`

export default Demo29_3_unit
