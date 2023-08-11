import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo8 = () =>{
  return (
    <UnitContent unitTitle={'Demo8'}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{textAlign: 'left', paddingLeft: '20px', marginBottom: '20px'}}>
          <strong>grid-column-start && grid-column-end && grid-row-start && grid-row-end</strong>
        </div>
        <Wrapper>
          <div className={'one'}>1</div>
          <div className={'two'}>2</div>
          <div className={'three'}>3</div>
          <div className={'four'}>4</div>
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
  grid-gap: 10px;
  & > div {
    padding: 10px;
  }
  .one {
    grid-column-start: 1;
    grid-column-end: 2;
    background: #19CAAD;
  }
  .two {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    background: #8CC7B5;
  }
  .three {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
    background: #D1BA74;
  }
  .four {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 5;
    background: #BEE7E9;
  }
  .five {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 5;
    background: #E6CEAC;
  }
  .six {
    grid-column-start: 3;
    grid-column-end: 4;
    background: #ECAD9E;
  }
`

export default Demo8
