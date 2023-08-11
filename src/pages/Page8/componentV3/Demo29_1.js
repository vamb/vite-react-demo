import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import ColorCard from "./ColorCard";
import P8V3Constant from "./P8V3Constant";

const Demo29_1 =()=> {

  return (
    <UnitContent title={'29_1 色卡1'}>
      <Wrapper>
        {
          Array.isArray(P8V3Constant.COLOR_ARR_29) && P8V3Constant.COLOR_ARR_29.length>0 &&
          P8V3Constant.COLOR_ARR_29.map((item, idx)=>{
            return (
              <span key={`29_1-color-item-${idx}`}>
                <ColorCard colorArr={item} />
              </span>
            )
          })
        }
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
`

export default Demo29_1
