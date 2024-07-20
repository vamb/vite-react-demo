import React, { useState, useCallback } from 'react';
import AppBtn from './AppBtn';
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Button } from 'antd'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 20px;
  .btn4 {
    display: flex;
    flex-direction: column;
    gap: 10px
    min-width {
      150px;
    }
  }
`

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  console.log('count5', count5)

  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  };

  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const btn4RandomVal = React.useMemo(()=>{
    return Math.random()
  },[count4])

  const handleClickButton5 = React.useCallback(()=>{
    setCount5((currentValue)=>currentValue+1)
  },[])

  return (
    <UnitContent title={'Demo1_9_7'} label={'useCallback sample2'}>
      <Wrapper>
        <AppBtn onClickButton={handleClickButton1}>Button1</AppBtn>
        <AppBtn onClickButton={handleClickButton2}>Button2</AppBtn>
        <AppBtn
          onClickButton={() => {
            setCount3(count3 + 1);
          }}
        >
          Button3
        </AppBtn>
        <div className={'btn4'}>
          <Button type={'primary'} onClick={()=>setCount4(count4 + 1)}>Button4</Button>
          <span>{btn4RandomVal}</span>
        </div>
        <AppBtn onClickButton={handleClickButton5}>{`Button5: ${count5}`}</AppBtn>
      </Wrapper>
    </UnitContent>
  );
}
