import React, { useState } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Image, Switch, Form } from 'antd'
import img8_1 from './assets/8_1.awebp'
import media1 from '../media/1.jpg'
import media2 from '../media/2.jpg'
import media3 from '../media/3.jpg'
import media4 from '../media/4.jpg'
import media5 from '../media/5.jpg'

const Demo8_4 = () => {
  const [ usingFr, setUsingFr ] = useState(false)

  return (
    <UnitContent title={'Demo8_4 grid fr'}>
      <Wrapper>
        <Form.Item label={'栅格的长度单位'}>
          <Switch
            checkedChildren="20fr 50fr 30fr => 内部元素不会溢出"
            unCheckedChildren="20% 50% 30% => 有gap的话内部就会溢出"
            checked={usingFr}
            onChange={e=>setUsingFr(e)}
          />
        </Form.Item>
        <div
          className={'main-content'}
          style={{
            gridGap: '10px',
            padding: '10px',
            gridTemplateColumns: usingFr? '20fr 50fr 30fr': `20% 50% 30%`,
          }}
        >
          <div><Image width={200} src={media1} /></div>
          <div><Image width={200} src={media2} /></div>
          <div><Image width={200} src={media3} /></div>
          <div><Image width={200} src={media4} /></div>
          <div><Image width={200} src={media5} /></div>
          <div>
            <div>fr表示grid内部可用空间（去除gap后的空间）</div>
            <div>fr的计算公式</div>
            <Image width={200} src={img8_1} />
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  .main-content {  
    display: grid;
    background: lightblue;
    & > div {
      background: lightyellow;
      display: flex;
      place-content: center;
      padding 20px;
    }
    & > :last-child {
      flex-direction: column;
    }
  }
`

export default Demo8_4
