import React from 'react'
import styled from "styled-components";

class Demo_3_1_child2 extends React.PureComponent {

  render() {
    console.log('Demo_3_1_child2')
    return (
      <Wrapper>
        <div>child pureComponent:</div>
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

export default Demo_3_1_child2
