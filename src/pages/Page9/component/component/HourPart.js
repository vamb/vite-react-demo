import React, { useContext } from 'react'
import styled from "styled-components";
import { PageContext } from "../../PageContent";
import { Checkbox, InputNumber, Radio } from "antd";
import PageConstant from "../../PageConstant";
import { encodeHourPart } from './CronUtils'

const HourPart = () => {
  const { pageData, dispatchPageData } = useContext(PageContext)
  const { hourRadioValue, hourPeriodStart, hourPeriodEnd, hourCycleStart,
    hourCycleStep, hourOrderArr, } = pageData

  const getCheckBoxGroup = []
  for(let i=0;i<24;i++){
    getCheckBoxGroup.push(
      <Checkbox value={i} key={`hour-checkbox-opt-${i}`}>
        <span className={'main-text'}>{i<10? '0'+i: i}</span>
      </Checkbox>
    )
  }

  const pageDataChange = (inputObj) => {
    const baseObj = { hourRadioValue, hourPeriodStart, hourPeriodEnd, hourCycleStart,
      hourCycleStep, hourOrderArr }
    const dispatchObj = encodeHourPart({...baseObj, ...inputObj})
    dispatchPageData({type: PageConstant.UPDATE_DATA, data: dispatchObj})
  }

  return(
    <Wrapper>
      <Radio.Group
        value={hourRadioValue}
        onChange={e=>pageDataChange({ hourRadioValue: e.target.value })}
      >
        <div className={'radio-group-content'} >
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_1}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`小时`}&nbsp;</span>
              <span className={'info-text'}>{`允许的通配符 [ , - * / ]`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_2}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`周期`}&nbsp;</span>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={hourPeriodStart}
                style={{width: '80px'}} min={0} max={hourPeriodEnd-1} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_2 !== hourRadioValue}
                onChange={e=>pageDataChange({ hourPeriodStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`--`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={hourPeriodEnd}
                style={{width: '80px'}} min={hourPeriodStart+1} max={23} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_2 !== hourRadioValue}
                onChange={e=>pageDataChange({ hourPeriodEnd: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`小时`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_3}>
            <div className={'option-text'}>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={hourCycleStart}
                style={{width: '80px'}} min={0} max={23} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_3 !== hourRadioValue}
                onChange={e=>pageDataChange({ hourCycleStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`时开始，每`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={hourCycleStep}
                style={{width: '80px'}} min={1} max={23} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_3 !== hourRadioValue}
                onChange={e=>pageDataChange({ hourCycleStep: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`小时执行一次`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_4}>
            <div className={'option-checkbox-group'}>
              <div className={'main-text'}>{`指定（24小时制）`}&nbsp;</div>
              <div className={'check-box-group'}>
                <Checkbox.Group
                  value={hourOrderArr}
                  style={{width: '550px'}}
                  disabled={PageConstant.CRON_RADIO_OPTS.OPT_4 !== hourRadioValue}
                  onChange={e=>pageDataChange({ hourOrderArr: e })}
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
  .checkbox-content {
    grid-template-columns: repeat(12, 1fr);
  }
`

export default HourPart
