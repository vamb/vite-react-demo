// AppBtn.jsx
import React from 'react';
import { Button } from 'antd'
import styled from "styled-components";

const AppBtn = ({ onClickButton, children }) => {
  return (
    <Wrapper>
      <Button type={'primary'} onClick={onClickButton}>{children}</Button>
      <span>{Math.random()}</span>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 150px;
`

export default React.memo(AppBtn);
