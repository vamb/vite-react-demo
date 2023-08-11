import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo7 = () =>{
  return (
    <UnitContent unitTitle={'Demo7'}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{textAlign: 'left', paddingLeft: '20px', marginBottom: '20px'}}>
          <strong>grid-template-columns: repeat(auto-fill, 200px)</strong>
        </div>
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
      </div>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  height: 300px;
  background: lightgreen;
  box-sizing: border-box;
  border: 1px solid silver;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-items: stretch;
  grid-gap: 10px;
  padding: 10px;
  &>div {
    box-sizing: border-box;
    border: 1px solid blueviolet;
    padding: 10px;
    background-clip: content-box !important;
    background: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Demo7
