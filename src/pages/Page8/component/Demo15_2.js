import React, { memo } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo15_2 = memo(()=>{
  return(
    <UnitContent title={'Demo15_2 display: grid'}>
      <Wrapper>
        <div className={'this-content'}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  user-select: none;
  .this-content {
    display: grid;
    box-sizing: border-box;
    border: 1px solid blueviolet;
    grid-template-columns: repeat(3, 1fr);
    height: 300px;
    background: skyblue;
    grid-gap: 10px;
    padding: 10px;
  }
  .this-content>div {
    width: 100%;
    height: 100%;
    background: lightgreen;
    box-sizing: border-box;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
  }
`

export default Demo15_2
