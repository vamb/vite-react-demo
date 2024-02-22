import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo30_3 = () => {

  return (
    <UnitContent title={'30_3 scroll-snap-type'}>
      <Wrapper>
        <div className={'main-holder'}>
          <div className={'target-holder'}>
            <div style={{backgroundColor: 'lightgreen'}} />
            <div style={{backgroundColor: "lightyellow"}} />
            <div style={{backgroundColor: 'lightpink'}} />
            <div style={{backgroundColor: 'lightgray'}} />
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  .main-holder {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  .target-holder {
    height: 300px;
    width: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
  }
  .target-holder > div {
    width: 400px;
    height: 300px;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`

export default Demo30_3
