import React from 'react'
import styled from "styled-components";

interface ContentProps {
  style: any,
  children: any
}

const Demo28_12_unit = (props: ContentProps) => {
  const { style, children } = props

  return (
    <Wrapper>
      <div className={'clip-unit'}>
        <div>
          <div style={{...style}} />
        </div>
        {children}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .clip-unit {
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 6px;
    padding: 10px;
    background-color: #8abdd1;
  }
  .clip-unit > :first-child {
    width: 250px;
    height: 250px;
    box-sizing: border-box;
    background-color: #db5a6c;
    border: 1px solid #ed781f;
    & > div {
      width: 100%;
      height: 100%;
      background-size: cover;
      transition: all 0.5s;
    }
  }
`

export default Demo28_12_unit
