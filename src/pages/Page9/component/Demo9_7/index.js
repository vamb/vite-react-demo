import React from "react";
import UnitContent from "@/pages/components/UnitContent";
import styled from "styled-components";
import Demo9_7_1 from "./Demo9_7_1";
import Demo9_7_2 from "./Demo9_7_2";

// https://mp.weixin.qq.com/s/1jXt_tosJTYlPmCG0AuIEQ 有空最好研究一下底层实现原理，文章写得很吊

const Demo9_7 = () => {
  return (
    <UnitContent title={'9_7 react-virtualized-list'}>
      <Wrapper>
        <Demo9_7_1 />
        <Demo9_7_2 />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`

export default Demo9_7
