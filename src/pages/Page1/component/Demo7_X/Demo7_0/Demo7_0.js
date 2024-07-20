import React from "react";
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import Demo7_0_1 from "@/pages/Page1/component/Demo7_X/Demo7_0/Demo7_0_1";
import Demo7_0_2 from "@/pages/Page1/component/Demo7_X/Demo7_0/Demo7_0_2";

const Demo7_0 = () => {

  return (
    <UnitContent
      title={'Demo7_0'}
      label={'memo 简单应用：子组件要写在父组件的方法外面，不然父组件刷新，子组件的构造方法也会刷新，没有任何用'}
    >
      <Wrapper>
        <Demo7_0_1 />
        <Demo7_0_2 />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center; 
`

export default Demo7_0
