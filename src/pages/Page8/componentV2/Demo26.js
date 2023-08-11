import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo26 = () => {
  /**
   * 1:1 aspect ratio = 1 / 1 = 1 = padding-top: 100%
   * 4:3 aspect ratio = 3 / 4 = 0.75 = padding-top: 75%
   * 3:2 aspect ratio = 2 / 3 = 0.66666 = padding-top: 66.67%
   * 16:9 aspect ratio = 9 / 16 = 0.5625 = padding-top: 56.25%
   */
  return (
    <UnitContent title={'Demo26 aspect-ratio'}>
      <Wrapper>
        <div className="parent">
          <div className="child">
          </div>
        </div>
        <div className="parent">
          <div className="child">
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin: 10px;
  }
  & > div:nth-child(2) {
    .child {
      width: 200px;
      background-color: rgb(127, 223, 247);
      height: auto;
      aspect-ratio: 16/9;
      padding-top: 0;
    }
  }
  .parent{
    width: 200px;
    height: 200px;
    background-color: aquamarine;
  }
  .child{
    background-color: rgb(127, 223, 247);
    width:100%;
    height: 0;
    padding: 0;
    padding-top:75%;
  }
  
`

export default Demo26
