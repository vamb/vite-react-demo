import React from 'react';
import { Button, Form } from 'antd'
import MegaBoost from './MegaBoost';
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

function App() {
  const [count, setCount] = React.useState(0);

  // V0
  // function handleMegaBoost() {
  //   setCount((currentValue) => currentValue + 1234);
  // }

  // V1
  // const handleMegaBoost = React.useMemo(() => {
  //   return function() {
  //     setCount((currentValue) => currentValue + 1234);
  //   }
  // }, []);

  // V2 是专门为函数使用的方法
  const handleMegaBoost = React.useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);


  return (
    <UnitContent title={'Demo1_9_6'} label={'userCallback'}>
      <Wrapper>
        <Form.Item label={'Count'}>{count}</Form.Item>
        <div className={'ctl-area'}>
          <Button
            type={'primary'}
            onClick={() => {
              setCount(count + 1)
            }}
          >
            Click me!
          </Button>
          <MegaBoost handleClick={handleMegaBoost} />
          <Button onClick={()=>setCount(0)}>Reset</Button>
        </div>
      </Wrapper>
    </UnitContent>
  );
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .ctl-area {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`

export default App;
