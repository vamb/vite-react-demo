import React, { useContext, useState, useEffect } from 'react'
import styled from "styled-components";
import { Divider, Input, Space, Button } from 'antd'
import { cronDecode } from './CronUtils'
import { TempContext } from "../TempContent";
import TempConstant from "../TempConstant";

const DisplayPart = () => {
  const { tempData, dispatchTempData } = useContext(TempContext)
  const { secondStr, minuteStr, hourStr, dayStr, monthStr, weekStr, yearStr } = tempData
  const [ cronStr, setCronStr ] = useState('')

  useEffect(()=>{
    let combineStr = `${secondStr} ${minuteStr} ${hourStr} ${dayStr} ${monthStr} ${weekStr} ${yearStr}`
    setCronStr(combineStr? combineStr.trim(): '')
  },[secondStr, minuteStr, hourStr, dayStr, monthStr, weekStr, yearStr])

  return(
    <Wrapper>
      <Divider
        orientation="left" style={{fontSize: '24px', fontWeight: 700}}
      >表达式</Divider>
      <div className={'display-content'}>
        <div className={'display-title'}>表达式字段：</div>
        <div className={'cron-display-content'}>
          <div className={'display-item'}>
            <span className={'item-value'} title={secondStr}>{secondStr}</span>
            <span className={'item-suffix'}>（秒）</span>
          </div>
          <div className={'display-item'}>
            <span className={'item-value'} title={minuteStr}>{minuteStr}</span>
            <span className={'item-suffix'}>（分钟）</span>
          </div>
          <div className={'display-item'}>
            <span className={'item-value'} title={hourStr}>{hourStr}</span>
            <span className={'item-suffix'}>（小时）</span>
          </div>
          <div className={'display-item'}>
            <span className={'item-value'} title={dayStr}>{dayStr}</span>
            <span className={'item-suffix'}>（日）</span>
          </div>
          <div className={'display-item'}>
            <span className={'item-value'} title={monthStr}>{monthStr}</span>
            <span className={'item-suffix'}>（月）</span>
          </div>
          <div className={'display-item'}>
            <span className={'item-value'} title={weekStr}>{weekStr}</span>
            <span className={'item-suffix'}>（星期）</span>
          </div>
          <div className={'display-item'}>
            <span className={'item-value'} title={yearStr}>{yearStr}</span>
            <span className={'item-suffix'}>（年）</span>
          </div>
        </div>
        <div className={'display-title'}>Cron 表达式：</div>
        <div className={'cron-display-content'}>
          <Input
            value={cronStr} style={{with: '100%'}}
            onChange={e=>setCronStr(e.target.value)}
          />
        </div>
        <div className={'display-title'}>
          <Space>
            <Button
              type={'primary'}
              onClick={()=>{
                const cronData = cronDecode(cronStr)
                if(cronData) {
                  dispatchTempData({
                    type: TempConstant.UPDATE_DATA,
                    data: cronData
                  })
                }
              }}>返解析到UI</Button>
            <Button type={'primary'}>测试运行</Button>
          </Space>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .display-content {
    display: flex;
    flex-direction: column;
    .display-title {
      margin-bottom: 10px;
    }
    .cron-display-content {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 15px;
    }
    .display-item {
      margin-right: 20px;
      height: 40px;
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      background-color: #eee;
      border-radius: 4px;
      padding: 5px;
      box-sizing: border-box;
      .item-value {
        display: inline-block;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
        max-width: 200px;
        margin-right: 5px;
      }
      .item-suffix {
        
      }
    }
  }
`

export default DisplayPart
