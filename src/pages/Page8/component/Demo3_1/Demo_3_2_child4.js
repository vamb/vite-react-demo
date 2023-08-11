import React from 'react'
import styled from "styled-components";

class Demo_3_2_child4 extends React.PureComponent {

  render() {
    console.log('Demo_3_2_child4')
    return (
      <Wrapper>
        <div>child pureComponent:</div>
      </Wrapper>
    )
  }
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export default Demo_3_2_child4
