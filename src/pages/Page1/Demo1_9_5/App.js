import React from 'react';
import UnitContent from "../../components/UnitContent";
import Boxes from './Boxes';
import { Form, Input, Slider } from 'antd'
import styled from "styled-components";

function App() {
  const [name, setName] = React.useState('');
  const [boxWidth, setBoxWidth] = React.useState(1);

  const id = React.useId();

  // Try changing some of these values! --- Version 1
  // const boxes = [
  //   { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
  //   { flex: 3, background: 'hsl(260deg 100% 40%)' },
  //   { flex: 1, background: 'hsl(50deg 100% 60%)' },
  // ];

  // Version 2
  const boxes = React.useMemo(()=>{
    return [
      { flex: boxWidth, background: 'hsl(345deg 100% 50%)' },
      { flex: 3, background: 'hsl(260deg 100% 40%)' },
      { flex: 1, background: 'hsl(50deg 100% 60%)' },
    ]
  },[boxWidth])

  return (
    <UnitContent title={'Page1_9_5'} label={'name的改变会导致box组件的输入引用改变，导致memo内的box再次刷新'} disBtn={true}>
      <Wrapper>
        <div>
          <Boxes boxes={boxes} />
        </div>
        <section>
          <Form>
            <Form.Item label={'Name'}>
              <Input
                style={{width: '150px'}}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label={'First box width'}>
              <Slider
                tooltip={(val)=>`${val}%`}
                style={{width: '250px'}}
                val={boxWidth}
                step={1}
                onChange={(num)=>setBoxWidth(num)}
              />
            </Form.Item>
          </Form>
        </section>
      </Wrapper>
    </UnitContent>
  );
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  & > div:nth-child(1) {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
  }
  & > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &>div, &>section {
    box-sizing: border-box;
    border: 1px solid lightgray;
    padding: 20px;
  }
`

export default App;
