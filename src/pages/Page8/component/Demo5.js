import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo5 = () =>{
  return(
    <UnitContent title={'Demo5'}>
      <Wrapper>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        {/* v2 */}
        <div>10</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  width: 300px;
  height: 300px;
  border: 1px solid silver;
  display: grid;
  box-sizing: border-box;
  // v1
  // grid-template-rows: repeat(3, 1fr);
  // grid-template-columns: repeat(3, 1fr);
  // v1.2 => 效果和 v1 一样
  // grid-template-rows: 100px 100px 100px;
  // grid-template-columns: 100px 100px 100px;
  
  // v2
  // grid-template-rows: 50% 50%;
  // grid-template-columns: 20% 20% 20% 20% 20%;
  // v2.2
  // grid-template-rows: repeat(2, 50%);
  // grid-template-columns: repeat(5, 20%);
     
  // v3
  // grid-template-rows: repeat(2, 100px 50px);
  // grid-template-columns: repeat(5, 20%);
  
  // v4 => 自动填充行，每个单元100px宽，自动填充列，每个单元100px
  // grid-template-rows: repeat(auto-fill, 100px);
  // grid-template-columns: repeat(auto-fill, 100px);
  // v4.2 => 行分成三分，每份占单位1， 列分三分，每份占单位1
  // grid-template-rows: repeat(3, 1fr);
  // grid-template-columns: repeat(3, 1fr);
  // v4.2 => 行： 1/4 && 2/4 && 1/4分配，列：1/4 && 2/4 && 1/4分配
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  
  
  div {
    background: blueviolet;
    background-clip: content-box;
    border: 1px solid blueviolet;
    padding: 10px;
    box-sizing: border-box;
  }
`

export default Demo5
