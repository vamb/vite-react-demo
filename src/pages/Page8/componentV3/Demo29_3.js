import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import Demo29_3_unit from "./Demo29_3_unit";
import P8V3Constant from "./P8V3Constant";

const Demo29_3 = () => {

  const handleBgLinearCSSStr = arr => {
    let str = ''
    if(Array.isArray(arr) && arr.length>0) {
      arr.map((item, idx)=>{
        str += `#${item}`
        if(idx !==arr.length -1) {
          str += `,`
        }
      })
      return str
    }
    return null
  }

  return (
    <UnitContent title={'29_3'}>
      <Wrapper>
        {
          P8V3Constant.COLOR_ARR_29_3.map((item, idx)=>{
            return (
              <Demo29_3_unit
                key={`29_3_unit-${idx}`}
                {...{...item, ...{index: idx}}}
                handleBgLinearCSSStr={handleBgLinearCSSStr}
              />
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
  justify-content: start;
  align-items: start;
  padding 20px;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
`

export default Demo29_3
