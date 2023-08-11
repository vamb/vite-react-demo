import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo6 = () =>{
  return (
    <UnitContent title={'Demo6'}>
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
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  height: 300px;
  border: 1px solid silver;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-template: repeat(3, 1fr)/repeat(3, 1fr);
  &>div {
    border: 1px solid blueviolet;
    padding: 10px;
    background-clip: content-box !important;
    background: blueviolet;
  }
`

export default Demo6
