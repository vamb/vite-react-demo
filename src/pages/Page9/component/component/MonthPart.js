import React, { useContext } from 'react'
import styled from "styled-components";
import { PageContext } from "../../PageContent";
import { Checkbox, InputNumber, Radio } from "antd";
import PageConstant from "../../PageConstant";
import { encodeMonthPart } from "./CronUtils";

const MonthPart = () => {
  const { pageData, dispatchPageData } = useContext(PageContext)
  const { monthRadioValue, monthPeriodStart, monthPeriodEnd,
    monthCycleStart, monthCycleStep, monthOrderArr } = pageData

  const getCheckBoxGroup = []
  for(let i=1;i<13;i++){
    getCheckBoxGroup.push(
      <Checkbox value={i} key={`month-checkbox-opt-${i}`}>
        <span className={'main-text'}>{i<10? '0'+i: i}</span>
      </Checkbox>
    )
  }

  const pageDataChange = (inputObj) => {
    const baseObj = { monthRadioValue, monthPeriodStart, monthPeriodEnd,
      monthCycleStart, monthCycleStep, monthOrderArr }
    const dispatchObj = encodeMonthPart({...baseObj, ...inputObj})
    dispatchPageData({type: PageConstant.UPDATE_DATA, data: dispatchObj})
  }

  return(
    <Wrapper>
      <Radio.Group
        value={monthRadioValue}
        onChange={e=>pageDataChange({ monthRadioValue: e.target.value })}
      >
        <div className={'radio-group-content'} >
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_1}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`月份`}&nbsp;</span>
              <span className={'info-text'}>{`允许的通配符 [ , - * / ]`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_2}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`周期`}&nbsp;</span>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={monthPeriodStart}
                style={{width: '80px'}} min={1} max={monthPeriodEnd-1} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_2 !== monthRadioValue}
                onChange={e=>pageDataChange({ monthPeriodStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`--`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={monthPeriodEnd}
                style={{width: '80px'}} min={monthPeriodStart+1} max={12} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_2 !== monthRadioValue}
                onChange={e=>pageDataChange({ monthPeriodEnd: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`月`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_3}>
            <div className={'option-text'}>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={monthCycleStart}
                style={{width: '80px'}} min={1} max={12} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_3 !== monthRadioValue}
                onChange={e=>pageDataChange({ monthCycleStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`日开始，每`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={monthCycleStep}
                style={{width: '80px'}} min={1} max={12} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_3 !== monthRadioValue}
                onChange={e=>pageDataChange({ monthCycleStep: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`月执行一次`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_4}>
            <div className={'option-checkbox-group'}>
              <div className={'main-text'}>{`指定（月份）`}&nbsp;</div>
              <div className={'check-box-group'}>
                <Checkbox.Group
                  style={{width: '550px'}}
                  value={monthOrderArr}
                  disabled={PageConstant.CRON_RADIO_OPTS.OPT_4 !== monthRadioValue}
                  onChange={e=>pageDataChange({ monthOrderArr: e })}
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

export default MonthPart
