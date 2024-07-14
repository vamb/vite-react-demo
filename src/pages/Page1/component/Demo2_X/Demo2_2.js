import React from "react";
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import Demo2_2_1 from "./Demo2_2/Demo2_2_1";
import Demo2_2_2 from "./Demo2_2/Demo2_2_2";

const Demo2_2 = () => {

  return (
    <UnitContent title={'Demo2_2 使用 forwardRef useImperativeHandle 配合 useRef 实现穿透父子组件或者内容或者操控方法'}>
      <Wrapper>
        <Demo2_2_1 />
        <Demo2_2_2 />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  .one-line {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
  }
  .info-icon {
    cursor: pointer;
    font-size: 1.5rem;
  }
`

export default Demo2_2