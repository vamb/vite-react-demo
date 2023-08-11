import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo8_2 = () => {
  return (
    <UnitContent title={'Demo8_2 perfect template demo'}>
      <Wrapper>
        <div className={'one-ppp'} >1</div>
        <div className={'two-ppp'} >2</div>
        <div className={'three-ppp'} >3</div>
        <div className={'four-ppp'} >4</div>
        <div className={'five-ppp'} >5</div>
        <div className={'six-ppp'} >6</div>
        <div className={'seven-ppp'} >7</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  div {
    border: 2px solid #000;
    box-sizing: border-box;
    padding: 5px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    border-radius: 4px;
  }
  .one-ppp {
    grid-column-start: 1;
    grid-column-end: 5;
    background: #2189fa;
  }
  .two-ppp {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    background: #fc2925;
  }
  .three-ppp {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    background: #ffb600;
  }
  .four-ppp {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
    background: #ffb600;
  }
  .five-ppp {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    background: #00ac40;
  }
  .six-ppp {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
    background: #77b9fe;
  }
  .seven-ppp {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
    background: #a000b6;
  }
`

export default Demo8_2
