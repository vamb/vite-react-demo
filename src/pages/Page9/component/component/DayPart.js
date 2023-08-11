import React, { useContext } from 'react'
import styled from "styled-components";
import { PageContext } from "../../PageContent";
import { Checkbox, InputNumber, Radio } from "antd";
import PageConstant from "../../PageConstant";
import { encodeDayPart } from "./CronUtils";

const DayPart = () => {
  const { pageData, dispatchPageData } = useContext(PageContext)
  const { dayRadioValue, dayPeriodStart, dayPeriodEnd, dayCycleStart,
    dayCycleStep, dayRelated, dayOrderArr, weekStr } = pageData

  const getCheckBoxGroup = []
  for(let i=1;i<32;i++){
    getCheckBoxGroup.push(
      <Checkbox value={i} key={`day-checkbox-opt-${i}`}>
        <span className={'main-text'}>{i<10? '0'+i: i}</span>
      </Checkbox>
    )
  }

  const pageDataChange = (inputObj) => {
    const baseObj = { dayRadioValue, dayPeriodStart, dayPeriodEnd, dayCycleStart,
      dayCycleStep, dayRelated, dayOrderArr }
    let dispatchObj = encodeDayPart({...baseObj, ...inputObj})

    const tempWeekStr = PageConstant.dayOrWeekRadioChangeCheck(dispatchObj.dayRadioValue, weekStr)
    if(tempWeekStr !== weekStr){
      // dispatchObj['weekStr'] = tempWeekStr
      // dispatchObj['weekRadioValue'] = PageConstant.MARK.ALL === tempWeekStr? 1: 2
      dispatchObj = PageConstant.overwriteRulesAndCombineData(dispatchObj, tempWeekStr, PageConstant.CONFLICT.DAY_2_WEEK)
      dispatchPageData({
        type: PageConstant.UPDATE_DATA,
        data: { conflictObj: dispatchObj, conflictModalVisible: true, conflictType: PageConstant.CONFLICT.DAY_2_WEEK }
      })
      return
    }
    dispatchPageData({type: PageConstant.UPDATE_DATA, data: dispatchObj})
  }

  return(
    <Wrapper>
      <Radio.Group
        value={dayRadioValue}
        onChange={e=>pageDataChange({ dayRadioValue: e.target.value })}
      >
        <div className={'radio-group-content'} >
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_1}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`日期`}&nbsp;</span>
              <span className={'info-text'}>{`允许的通配符 [ , - * / L W ]`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_2}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`不指定`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_3}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`周期`}&nbsp;</span>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={dayPeriodStart}
                style={{width: '80px'}} min={1} max={dayPeriodEnd-1} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_3 !== dayRadioValue}
                onChange={e=>pageDataChange({ dayPeriodStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`--`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={dayPeriodEnd}
                style={{width: '80px'}} min={dayPeriodStart+1} max={31} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_3 !== dayRadioValue}
                onChange={e=>pageDataChange({ dayPeriodEnd: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`日`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_4}>
            <div className={'option-text'}>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={dayCycleStart}
                style={{width: '80px'}} min={1} max={31} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_4 !== dayRadioValue}
                onChange={e=>pageDataChange({ dayCycleStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`日开始，每`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={dayCycleStep}
                style={{width: '80px'}} min={1} max={31} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_4 !== dayRadioValue}
                onChange={e=>pageDataChange({ dayCycleStep: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`天执行一次`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_5}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`每月`}&nbsp;</span>
              <InputNumber
                value={dayRelated}
                style={{width: '80px'}} min={1} max={31} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_5 !== dayRadioValue}
                onChange={e=>pageDataChange({ dayRelated: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`号最近的那个工作日`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_6}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`本月最后一天`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_7}>
            <div className={'option-checkbox-group'}>
              <div className={'main-text'}>{`指定（日期）`}&nbsp;</div>
              <div className={'check-box-group'}>
                <Checkbox.Group
                  style={{width: '550px'}}
                  value={dayOrderArr}
                  disabled={PageConstant.CRON_RADIO_OPTS.OPT_7 !== dayRadioValue}
                  onChange={e=>pageDataChange({ dayOrderArr: e })}
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

export default DayPart
