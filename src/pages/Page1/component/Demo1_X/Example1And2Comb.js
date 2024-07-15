import React from "react";
import Example from "@/pages/Page1/component/Demo1_X/Example";
import Example2 from "@/pages/Page1/component/Demo1_X/Example2";
import Example4 from "@/pages/Page1/component/Demo1_X/Example4";
import styled from "styled-components";

const Example1And2Comb = () => {

  return (
    <Wrapper>
      <div className={'one-line'}>
        <div className={'w-three'}>
          <Example />
        </div>
        <div className={'w-three'}>
          <Example2 />
        </div>
        <div className={'w-three'}>
          <Example4 />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default Example1And2Comb
