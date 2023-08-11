import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  addByAmount, minusByAmount, incremented, decremented,
  selectCount
} from './counterSlice'
import { Button, InputNumber } from "antd";
import styled from "styled-components";

const App = () => {
  const [ amountValue, setAmountValue ] = useState(2)
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className={'line'}>
        <Button
          type={'primary'}
          onClick={()=>dispatch(decremented())}
        >Btn -</Button>
        <Button
          type={'primary'}
          onClick={()=>dispatch(incremented())}
        >Btn +</Button>
        <div>|</div>
        <InputNumber
          min={1} max={20} step={1}
          style={{width: '100px'}} value={amountValue}
          onChange={e=>setAmountValue(e)}
        />
        <Button
          type={'primary'}
          onClick={()=>dispatch(addByAmount(amountValue))}
        >Add Amount</Button>
        <Button
          type={'primary'}
          onClick={()=>dispatch(minusByAmount(amountValue))}
        >Minus Amount</Button>
        <div>|</div>
      </div>
      <div className={'line'}>{count}</div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .line {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
  }
`

export default App
