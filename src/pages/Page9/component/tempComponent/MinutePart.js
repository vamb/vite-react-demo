import React, { useContext } from 'react'
import styled from "styled-components";
import { Checkbox, InputNumber, Radio } from "antd";
import { encodeMinutePart } from './CronUtils'
import { TempContext } from "../TempContent";
import TempConstant from "../TempConstant";

const MinutePart = () => {
  const { tempData, dispatchTempData } = useContext(TempContext)
  const { minuteRadioValue, minutePeriodStart, minutePeriodEnd, minuteCycleStart,
    minuteCycleStep, minuteOrderArr } = tempData

  const getCheckBoxGroup = []
  for(let i=0;i<60;i++){
    getCheckBoxGroup.push(
      <Checkbox value={i} key={`minute-checkbox-opt-${i}`}>
        <span className={'main-text'}>{i<10? '0'+i: i}</span>
      </Checkbox>
    )
  }

  const pageDataChange = (inputObj) => {
    const baseObj = { minuteRadioValue, minutePeriodStart, minutePeriodEnd, minuteCycleStart,
      minuteCycleStep, minuteOrderArr }
    const dispatchObj = encodeMinutePart({...baseObj, ...inputObj})
    dispatchTempData({type: TempConstant.UPDATE_DATA, data: dispatchObj})
  }

  return(
    <Wrapper>
      <Radio.Group
        value={minuteRadioValue}
        onChange={e=>pageDataChange({ minuteRadioValue: e.target.value })}
      >
        <div className={'radio-group-content'} >
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_1}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`分钟`}&nbsp;</span>
              <span className={'info-text'}>{`允许的通配符 [ , - * / ]`}</span>
            </div>
          </Radio>
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_2}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`周期`}&nbsp;</span>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={minutePeriodStart}
                style={{width: '80px'}} min={0} max={minutePeriodEnd-1} step={1}
                disabled={TempConstant.CRON_RADIO_OPTS.OPT_2 !== minuteRadioValue}
                onChange={e=>pageDataChange({ minutePeriodStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`--`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={minutePeriodEnd}
                style={{width: '80px'}} min={minutePeriodStart+1} max={59} step={1}
                disabled={TempConstant.CRON_RADIO_OPTS.OPT_2 !== minuteRadioValue}
                onChange={e=>pageDataChange({ minutePeriodEnd: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`分钟`}</span>
            </div>
          </Radio>
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_3}>
            <div className={'option-text'}>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={minuteCycleStart}
                style={{width: '80px'}} min={0} max={59} step={1}
                disabled={TempConstant.CRON_RADIO_OPTS.OPT_3 !== minuteRadioValue}
                onChange={e=>pageDataChange({ minuteCycleStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`分钟开始，每`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={minuteCycleStep}
                style={{width: '80px'}} min={1} max={59} step={1}
                disabled={TempConstant.CRON_RADIO_OPTS.OPT_3 !== minuteRadioValue}
                onChange={e=>pageDataChange({ minuteCycleStep: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`分钟执行一次`}</span>
            </div>
          </Radio>
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_4}>
            <div className={'option-checkbox-group'}>
              <div className={'main-text'}>{`指定（分钟）`}&nbsp;</div>
              <div className={'check-box-group'}>
                <Checkbox.Group
                  value={minuteOrderArr}
                  style={{width: '550px'}}
                  disabled={TempConstant.CRON_RADIO_OPTS.OPT_4 !== minuteRadioValue}
                  onChange={e=>pageDataChange({minuteOrderArr: e})}
                ><div className={'checkbox-content'}>{getCheckBoxGroup}</div>
                </Checkbox.Group>
              </div>
            </div>
          </Radio>
        </div>
      </Radio.Group>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default MinutePart
