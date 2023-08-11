import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo8 = () =>{
  return (
    <UnitContent unitTitle={'Demo9'}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{textAlign: 'left', paddingLeft: '20px', marginBottom: '20px'}}>
          <strong>v2</strong>
        </div>
        <Wrapper>
          <div className={'one'}>
            <div className={'unit'}>1</div>
            <div className={'unit'} style={{marginLeft: 0}}>2</div>
          </div>
          <div className={'two'}>
            <div className={'unit'} style={{marginLeft: 0}}>3</div>
          </div>
          <div className={'three'}>
            <div className={'unit'} >6</div>
          </div>
          <div className={'four'}>4</div>
          <div className={'seven'}>7</div>
          <div className={'five'}>5</div>
          <div className={'six'}>6</div>
        </Wrapper>
      </div>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  .one {
    grid-column-start: 1;
    grid-column-end: 3;
    background: #fff;
    margin-bottom: 10px;
    margin-right: -10px;
    border: 1px solid blueviolet;
    border-right: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .two {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    background: #fff;
    margin-bottom: 10px;
    margin-left: 10px;
    border: 1px solid blueviolet;
    border-left: none;
    border-bottom: none;
    display: grid;
  }
  .three {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    background: #D1BA74;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-top: -10px;
    border: 1px solid blueviolet;
    border-top: none;
    display: grid;
  }
  .four {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    background: #BEE7E9;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: -10px;
    border-top: 1px solid blueviolet;
    border-left: 1px solid blueviolet;
    border-right: 1px solid blueviolet;
  }
  .seven {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    background: #BEE7E9;
    margin-right: 10px;
    margin-top: 10px;
    border-left: 1px solid blueviolet;
    border-bottom: 1px solid blueviolet;
  }
  .five {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    background: #E6CEAC;
    margin-top: 10px;
    margin: 10px;
    border: 1px solid blueviolet;
  }
  .six {
    grid-column-start: 2;
    grid-column-end: 4;
    background: #ECAD9E;
    margin-left: -10px;
    margin-top: 10px;
    border-bottom: 1px solid blueviolet;
    border-top: 1px solid blueviolet;
    border-right: 1px solid blueviolet;
  }
  .unit {
    margin: 20px;
    background: #19CAAD;
  }
`

export default Demo8
