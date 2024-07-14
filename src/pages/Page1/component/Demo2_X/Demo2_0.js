import React, { useRef, useState } from "react";
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import { Button, Tooltip } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';

const Demo2_0 = () => {
  const [ stateVal, setStateVal ] = useState(0)
  // console.log('stateVal', stateVal)
  const refVal = useRef(0)
  // console.log('refVal', refVal.current)

  const stateChange = isPlus => {
    let newState = stateVal
    if(isPlus) {
      newState ++
    }else{
      newState --
    }
    setStateVal(newState)
  }

  const refChange = isPlus => {
    if(isPlus) {
      refVal.current++
    }else{
      refVal.current--
    }
  }

  const consoleAll = () => {
    console.log('stateVal', stateVal)
    console.log('refVal.current', refVal.current)
  }

  return (
    <UnitContent title={'Demo2_0 useRef 变量'}>
      <Wrapper>
        <div className={'one-line'}>
          <div className={'val-label'}>{`stateVal: ${stateVal}`}</div>
          <Button type={'primary'} onClick={()=>stateChange(false)}>-</Button>
          <Button type={'primary'} onClick={()=>stateChange(true)}>+</Button>
        </div>
        <div className={'one-line'}>
          <div className={'val-label'}>{`refVal?.current: ${refVal?.current}`}</div>
          <Button type={'primary'} onClick={()=>refChange(false)}>-</Button>
          <Button type={'primary'} onClick={()=>refChange(true)}>+</Button>
        </div>
        <div className={'one-line'}>
          <Button type={'primary'} onClick={consoleAll}>console all</Button>
          <Tooltip placement="right" title={'useState修改值会重新渲染页面，useRef修改值不会重新渲染'}>
            <InfoCircleOutlined className={'info-icon'} />
          </Tooltip>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .one-line {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
  }
  .val-label {
    width: 200px;
  }
  .info-icon {
    cursor: pointer;
    font-size: 1.5rem;
  }
`

export default Demo2_0