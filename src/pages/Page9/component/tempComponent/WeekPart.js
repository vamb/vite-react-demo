import React, { useContext } from 'react'
import styled from "styled-components";
import { Checkbox, InputNumber, Radio } from "antd";
import { encodeWeekPart } from "./CronUtils";
import { TempContext } from "../TempContent";
import TempConstant from "../TempConstant";

const WeekPart = () => {
  const { tempData, dispatchTempData } = useContext(TempContext)
  const { weekRadioValue, weekPeriodStart, weekPeriodEnd,
    weekCycleStart, weekCycleStep, weekRelated, weekOrderArr, dayStr } = tempData

  const getCheckBoxGroup = []
  for(let i=1;i<8;i++){
    getCheckBoxGroup.push(
      <Checkbox value={i} key={`day-checkbox-opt-${i}`}>
        <span className={'main-text'}>{i<10? '0'+i: i}</span>
      </Checkbox>
    )
  }

  const pageDataChange = (inputObj) => {
    const baseObj = { weekRadioValue, weekPeriodStart, weekPeriodEnd,
      weekCycleStart, weekCycleStep, weekRelated, weekOrderArr }
    // 将初始数据和改动后的数据合并
    let dispatchObj = encodeWeekPart({...baseObj, ...inputObj})

    const tempDayStr = TempConstant.dayOrWeekRadioChangeCheck(dispatchObj.weekRadioValue, dayStr)
    if(tempDayStr !== dayStr){
      // dispatchObj['dayStr'] = tempDayStr
      // dispatchObj['dayRadioValue'] = TempConstant.MARK.ALL === tempDayStr? 1: 2
      dispatchObj = TempConstant.overwriteRulesAndCombineData(dispatchObj, tempDayStr, TempConstant.CONFLICT.WEEK_2_DAY)
      dispatchTempData({
        type: TempConstant.UPDATE_DATA,
        data: { conflictObj: dispatchObj, conflictModalVisible: true, conflictType: TempConstant.CONFLICT.WEEK_2_DAY }
      })
      return
    }

    dispatchTempData({type: TempConstant.UPDATE_DATA, data: dispatchObj})
  }

  return(
    <Wrapper>
      <Radio.Group
        value={weekRadioValue}
        onChange={e=>pageDataChange({ weekRadioValue: e.target.value })}
      >
        <div className={'radio-group-content'} >
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_1}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`周`}&nbsp;</span>
              <span className={'info-text'}>{`允许的通配符 [ , - * / L # ]`}</span>
            </div>
          </Radio>
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_2}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`不指定`}</span>
            </div>
          </Radio>
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_3}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`周期`}&nbsp;</span>
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`从 星期`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={weekPeriodStart}
                style={{width: '80px'}} min={1} max={weekPeriodEnd-1} step={1}
                disabled={TempConstant.CRON_RADIO_OPTS.OPT_3 !== weekRadioValue}
                onChange={e=>pageDataChange({ weekPeriodStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`--`}&nbsp;&nbsp;&nbsp;</span>
              <span className={'info-text'}>{`星期`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={weekPeriodEnd}
                style={{width: '80px'}} min={weekPeriodStart+1} max={7} step={1}
                disabled={TempConstant.CRON_RADIO_OPTS.OPT_3 !== weekRadioValue}
                onChange={e=>pageDataChange({ weekPeriodEnd: e })}
              />
            </div>
          </Radio>
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_4}>
            <div className={'option-text'}>
              <span className={'info-text'}>{`第`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={weekCycleStart}
                style={{width: '80px'}} min={1} max={4} step={1}
                disabled={TempConstant.CRON_RADIO_OPTS.OPT_4 !== weekRadioValue}
                onChange={e=>pageDataChange({ weekCycleStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`周 的星期`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={weekCycleStep}
                style={{width: '80px'}} min={1} max={7} step={1}
                disabled={TempConstant.CRON_RADIO_OPTS.OPT_4 !== weekRadioValue}
                onChange={e=>pageDataChange({ weekCycleStep: e })}
              />
            </div>
          </Radio>
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_5}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`本月最后一个星期`}&nbsp;</span>
              <InputNumber
                value={weekRelated}
                style={{width: '80px'}} min={1} max={7} step={1}
                disabled={TempConstant.CRON_RADIO_OPTS.OPT_5 !== weekRadioValue}
                onChange={e=>pageDataChange({ weekRelated: e })}
              />
            </div>
          </Radio>
          <Radio value={TempConstant.CRON_RADIO_OPTS.OPT_6}>
            <div className={'option-checkbox-group'}>
              <div className={'main-text'}>{`指定（星期）`}&nbsp;</div>
              <div className={'check-box-group'}>
                <Checkbox.Group
                  value={weekOrderArr}
                  style={{width: '550px'}}
                  disabled={TempConstant.CRON_RADIO_OPTS.OPT_6 !== weekRadioValue}
                  onChange={e=>pageDataChange({ weekOrderArr: e })}
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

export default WeekPart
