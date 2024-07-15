import React from "react";
import Example5 from "@/pages/Page1/component/Demo1_X/Example5";
import Example6 from "@/pages/Page1/component/Demo1_X/Example6";
import Example7 from "@/pages/Page1/component/Demo1_X/Example7/Example7";

import styled from "styled-components";

const Example5And6Comb = () => {

  return (
    <Wrapper>
      <div className={'one-line'}>
        <div className={'w-three'}>
          <Example5 />
        </div>
        <div className={'w-three'}>
          <Example6 />
        </div>
        <div className={'w-three'}>
          <Example7 />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default Example5And6Comb
