import React, { useContext } from 'react'
import styled from "styled-components";
import { PageContext } from "../../PageContent";
import { DatePicker, Radio } from "antd";
import PageConstant from "../../PageConstant";
import moment from 'moment'
import { encodeYearPart } from "./CronUtils";

const { RangePicker } = DatePicker;
const DATE_FORMAT = 'YYYY'

const YearPart = () => {
  const { pageData, dispatchPageData } = useContext(PageContext)
  const { yearRadioValue, yearPeriodStart, yearPeriodEnd } = pageData

  const pageDataChange = (inputObj) => {
    const baseObj = { yearRadioValue, yearPeriodStart, yearPeriodEnd }
    const dispatchObj = encodeYearPart({...baseObj, ...inputObj})
    dispatchPageData({type: PageConstant.UPDATE_DATA, data: dispatchObj})
  }

  return(
    <Wrapper>
      <Radio.Group
        value={yearRadioValue}
        onChange={e=>pageDataChange({ yearRadioValue: e.target.value })}
      >
        <div className={'radio-group-content'} >
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_1}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`不指定`}&nbsp;</span>
              <span className={'info-text'}>{`允许的通配符 [ , - * / ]`}</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_2}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`每年`}&nbsp;</span>
            </div>
          </Radio>
          <Radio value={PageConstant.CRON_RADIO_OPTS.OPT_3}>
            <div className={'option-text'}>
              <span className={'main-text'}>{`周期`}&nbsp;</span>
              <span className={'info-text'}>{`从`}&nbsp;&nbsp;&nbsp;</span>
              <RangePicker
                picker="year"
                style={{ width: '200px' }}
                value={[
                  yearPeriodStart? moment(yearPeriodStart, DATE_FORMAT): null,
                  yearPeriodEnd? moment(yearPeriodEnd, DATE_FORMAT): null
                ]}
                onChange={value=>{
                  const yearPeriodStart = value?.[0]? moment(value[0]).format(DATE_FORMAT): ''
                  const yearPeriodEnd = value?.[1]? moment(value[1]).format(DATE_FORMAT): ''
                  pageDataChange({ yearPeriodStart: yearPeriodStart, yearPeriodEnd: yearPeriodEnd })
                }}
                placeholder={['开始年份', '结束年份']}
              />
            </div>
          </Radio>
        </div>
      </Radio.Group>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default YearPart
