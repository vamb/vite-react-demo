import React from 'react'
import styled from "styled-components";

class Demo_3_1_child1 extends React.Component {

  render() {
    console.log('Demo_3_1_child1')
    return (
      <Wrapper>
        <div>child component:</div>
        <div>{this.props?.count}</div>
      </Wrapper>
    )
  }
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export default Demo_3_1_child1
