import React from "react";
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import ToolHolder from "./ToolHolder";
import { AlignCenterOutlined } from '@ant-design/icons';

const Demo33_0 = () => {
  return (
    <UnitContent title={'33_0 远程绑定组件'}>
      <Wrapper>
        <ToolHolder>
          <AlignCenterOutlined className={'outer-icon'} />
        </ToolHolder>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 50px;
  .outer-icon {
    font-size: 16px;
    cursor: pointer;
    border: 1px solid lightgray;
    color: #000;
    border-radius: 6px;
    padding: 5px;
  }
`

export default Demo33_0
