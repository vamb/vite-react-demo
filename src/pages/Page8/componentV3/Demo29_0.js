import React, { useState, useEffect, useMemo } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import P8V3Constant from './P8V3Constant'
import { Button, Input, Select, message } from 'antd'
import { handleCopyAction } from '@/utils/utils'

const colorArr = P8V3Constant.COLOR_ARR_29

const Demo29_0 = () => {
  const [ defColorPair, setDefColorPair ] = useState([])
  const [ direction, setDirection ] = useState('to top')
  const [ cssText, setCssText ] = useState(null)

  const generateDefColorPair = () => {
    const obj = colorArr[Math.floor(Math.random()*(40-1))]
    // console.log('obj', obj)
    setDefColorPair(obj)
  }

  const updateInputColor = (color, idx) => {
    defColorPair[idx].bg = color
    setDefColorPair(JSON.parse(JSON.stringify(defColorPair)))
  }

  const generateCssText = (dir, colorArr) => {
    setCssText(`linear-gradient(${dir}, ${colorArr[0]?.bg}, ${colorArr[1]?.bg})`)
  }

  const copyCss = (inputCss) => {
    handleCopyAction(inputCss)
  }

  useMemo(()=>{
    generateCssText(direction, defColorPair)
  },[defColorPair, direction])

  useEffect(()=>{
    generateDefColorPair()
  },[])

  return (
    <UnitContent title={'Demo29_0 Tool 调色盘 https://flatuicolors.com/'}>
      <Wrapper>
        <div className={'linear-card'}>
          <div
            className={'color-content'}
            style={{backgroundImage: cssText || ''}}
          />
          <div className={'ctl-group'}>
            <div>
              <div>Direction</div>
              <Select
                style={{width: '80%'}}
                value={direction}
                onChange={e=>setDirection(`to ${e}`)}
              >
                {
                  P8V3Constant.DEMO_0_DIRECTION_OPTS.map((item, idx)=>{
                    return <Select.Option value={item.value} key={`dir-opt-${idx}`}>{item.label}</Select.Option>
                  })
                }
              </Select>
            </div>
            <div>
              <div>Colors</div>
              <div className={'color-input-content'}>
                <Input
                  name={'col1'} type={'color'} value={defColorPair?.[0]?.bg || ''}
                  onChange={e=>updateInputColor(e.target.value, 0)}
                />
                <Input
                  name={'col2'} type={'color'} value={defColorPair?.[1]?.bg || ''}
                  onChange={e=>updateInputColor(e.target.value, 1)}
                />
              </div>
            </div>
          </div>
          <Input.TextArea
            style={{width: '100%', color: '#000', cursor: 'auto'}}
            disabled={true}
            value={cssText}
          />
          <div className={'btn-group'}>
            <Button
              style={{backgroundColor: '#69747b'}}
              onClick={()=>generateDefColorPair()}
            >Refresh Color</Button>
            <Button
              style={{backgroundColor: '#8a6bf6'}}
              onClick={()=>copyCss(`background-image: ${cssText}`)}
            >Copy CSS</Button>
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  background-color: #8a6bf6;
  justify-content: start;
  align-items: center;
  padding: 20px;
  .linear-card {
    box-sizing: border-box;
    border: 1px solid lightgray;
    border-radius: 8px;
    min-width: 400px;
    background-color: #fff;
    min-height: 100px;    
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
  }
  .color-content {
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    border: 1px solid lightgray;
    border-radius: 8px;
  }
  .ctl-group {
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 5px;
    & > div {
      flex-grow: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .color-input-content {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      & > input {
        height: 32px;
        background: #fff;
        border: 1px solid lightgray;
        border-radius: 4px;
      }
    }
  }
  .btn-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
    & > button {
      flex-grow: 1;
      width: 100%;
      color: #fff;
    }
  }
`

export default Demo29_0
