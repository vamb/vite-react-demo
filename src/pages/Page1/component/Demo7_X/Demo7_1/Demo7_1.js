import React from "react";
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import Demo7_1_1 from "@/pages/Page1/component/Demo7_X/Demo7_1/Demo7_1_1";
import Demo7_1_2 from "@/pages/Page1/component/Demo7_X/Demo7_1/Demo7_1_2";

const Demo7_1 = () => {

  return (
    <UnitContent
      title={'Demo7_1'}
      label={'useCallback 简单应用：useCallback 包装一个方法，并且监听一个参数，这个参数不会，方法就会一直缓存'}
    >
      <Wrapper>
        <Demo7_1_1 />
        <Demo7_1_2 />
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

export default Demo7_1
