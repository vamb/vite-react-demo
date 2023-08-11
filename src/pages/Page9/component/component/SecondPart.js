import React, { useContext } from 'react'
import styled from "styled-components";
import { PageContext } from '../../PageContent'
import { Radio, InputNumber, Checkbox } from "antd";
import PageConstant from "../../PageConstant";
import { encodeSecondPart } from './CronUtils'

const SecondPart = () => {
  const { pageData, dispatchPageData } = useContext(PageContext)
  const { secondRadioValue, secondPeriodStart, secondPeriodEnd, secondCycleStart,
    secondCycleStep, secondOrderArr } = pageData

  const getCheckBoxGroup = []
  for(let i=0;i<60;i++){
    getCheckBoxGroup.push(
      <Checkbox value={i} key={`second-checkbox-opt-${i}`}>
        <span className={'main-text'}>{i<10? '0'+i: i}</span>
      </Checkbox>
    )
  }

  const pageDataChange = (inputObj) => {
    const baseObj = { secondRadioValue, secondPeriodStart, secondPeriodEnd, secondCycleStart,
      secondCycleStep, secondOrderArr }
    const dispatchObj = encodeSecondPart({...baseObj, ...inputObj})
    dispatchPageData({type: PageConstant.UPDATE_DATA, data: dispatchObj})
  }

  return(
    <Wrapper>
      <Radio.Group
        value={secondRadioValue}
        onChange={e=>pageDataChange({ secondRadioValue: e.target.value })}
      >
        <div className={'radio-group-content'} >
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_1}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`每秒`}&nbsp;</span>
              <span className={'info-text'}>{`允许的通配符 [ , - * / ]`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_2}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`周期`}&nbsp;</span>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={secondPeriodStart}
                style={{width: '80px'}} min={0} max={secondPeriodEnd-1} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_2 !== secondRadioValue}
                onChange={e=> pageDataChange({ secondPeriodStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`--`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={secondPeriodEnd}
                style={{width: '80px'}} min={secondPeriodStart+1} max={59} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_2 !== secondRadioValue}
                onChange={e=> pageDataChange({ secondPeriodEnd: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`秒`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_3}>
            <div className={'option-text'}>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={secondCycleStart}
                style={{width: '80px'}} min={0} max={59} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_3 !== secondRadioValue}
                onChange={e=> pageDataChange({ secondCycleStart: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`秒开始，每`}&nbsp;&nbsp;&nbsp;</span>
              <InputNumber
                value={secondCycleStep}
                style={{width: '80px'}} min={1} max={59} step={1}
                disabled={PageConstant.CRON_RADIO_OPTS.OPT_3 !== secondRadioValue}
                onChange={e=> pageDataChange({ secondCycleStep: e })}
              />
              <span className={'info-text'}>&nbsp;&nbsp;&nbsp;{`秒执行一次`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_4}>
            <div className={'option-checkbox-group'}>
              <div className={'main-text'}>{`指定（秒）`}&nbsp;</div>
              <div className={'check-box-group'}>
                <Checkbox.Group
                  style={{width: '550px'}}
                  value={secondOrderArr}
                  disabled={PageConstant.CRON_RADIO_OPTS.OPT_4 !== secondRadioValue}
                  onChange={e=> pageDataChange({secondOrderArr: e})}
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

export default SecondPart
