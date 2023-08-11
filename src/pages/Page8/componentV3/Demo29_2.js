import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import P8V3Constant from "./P8V3Constant";
import ColorCycle from "./ColorCycle";

const Demo29_2 = () => {

  const handleColorArr = (arr) => {
    const colorCycleArr = []
    Array.isArray(arr) && arr.length>0 &&
    arr.map((item, idx)=>{
      const { name, array } = item
      let tempColorArr = []
      Array.isArray(array) && array.length>0 &&
      array.map((obj, count)=>{
        if( (count+1) % 5 !== 0 ) {
          tempColorArr.push(obj)
        }else{
          tempColorArr.push(obj)
          colorCycleArr.push(
            <span key={`29_2-color-item-${idx}-${count}`}>
              <ColorCycle name={name} array={tempColorArr} />
            </span>
          )
          tempColorArr = []
        }
        if(idx === arr.length-1 && tempColorArr.length !==0) {
          colorCycleArr.push(
            <span key={`29_2-color-item-${idx}-${count}`}>
              <ColorCycle name={name} array={tempColorArr} />
            </span>
          )
        }
      })
    })
    return colorCycleArr
  }

  return (
    <UnitContent title={'29_2'}>
      <Wrapper>
        {handleColorArr(P8V3Constant.COLOR_ARR_29_2)}
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  &>span {
    display: block;
  }
`

export default Demo29_2
