import React from 'react'
import styled from "styled-components";

class Demo_3_2_child3 extends React.Component {

  render() {
    console.log('Demo_3_2_child3')
    return (
      <Wrapper>
        <div>child component:</div>
      </Wrapper>
    )
  }
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export default Demo_3_2_child3
