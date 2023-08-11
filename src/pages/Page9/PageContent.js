import React, { createContext, useReducer } from 'react'
import PageConstant from "./PageConstant";

export const PageContext = createContext({})

const initData = {
  // 秒Tab要用的数据
  secondRadioValue: PageConstant.DEFAULT_VAL.SECOND.secondRadioValue, // 1 ~ 4
  secondPeriodStart: PageConstant.DEFAULT_VAL.SECOND.secondPeriodStart,
  secondPeriodEnd: PageConstant.DEFAULT_VAL.SECOND.secondPeriodEnd,
  secondCycleStart: PageConstant.DEFAULT_VAL.SECOND.secondCycleStart,
  secondCycleStep: PageConstant.DEFAULT_VAL.SECOND.secondCycleStep,
  secondOrderArr: PageConstant.DEFAULT_VAL.SECOND.secondOrderArr,

  // 分钟Tab要用的数据
  minuteRadioValue: PageConstant.DEFAULT_VAL.MINUTE.minuteRadioValue, // 1 ~ 4
  minutePeriodStart: PageConstant.DEFAULT_VAL.MINUTE.minutePeriodStart,
  minutePeriodEnd: PageConstant.DEFAULT_VAL.MINUTE.minutePeriodEnd,
  minuteCycleStart: PageConstant.DEFAULT_VAL.MINUTE.minuteCycleStart,
  minuteCycleStep: PageConstant.DEFAULT_VAL.MINUTE.minuteCycleStep,
  minuteOrderArr: PageConstant.DEFAULT_VAL.MINUTE.minuteOrderArr,

  // 小时Tab要用的数据
  hourRadioValue: PageConstant.DEFAULT_VAL.HOUR.hourRadioValue, // 1 ~ 4
  hourPeriodStart: PageConstant.DEFAULT_VAL.HOUR.hourPeriodStart,
  hourPeriodEnd: PageConstant.DEFAULT_VAL.HOUR.hourPeriodEnd,
  hourCycleStart: PageConstant.DEFAULT_VAL.HOUR.hourCycleStart,
  hourCycleStep: PageConstant.DEFAULT_VAL.HOUR.hourCycleStep,
  hourOrderArr: PageConstant.DEFAULT_VAL.HOUR.hourOrderArr,

  // 日期Tab要用的数据
  dayRadioValue: PageConstant.DEFAULT_VAL.DAY.dayRadioValue, // 1 ~ 7
  dayPeriodStart: PageConstant.DEFAULT_VAL.DAY.dayPeriodStart,
  dayPeriodEnd: PageConstant.DEFAULT_VAL.DAY.dayPeriodEnd,
  dayCycleStart: PageConstant.DEFAULT_VAL.DAY.dayCycleStart,
  dayCycleStep: PageConstant.DEFAULT_VAL.DAY.dayCycleStep,
  dayRelated: PageConstant.DEFAULT_VAL.DAY.dayRelated,
  dayOrderArr: PageConstant.DEFAULT_VAL.DAY.dayOrderArr,

  // 月份Tab要用的数据
  monthRadioValue: PageConstant.DEFAULT_VAL.MONTH.monthRadioValue, // 1 ~ 4
  monthPeriodStart: PageConstant.DEFAULT_VAL.MONTH.monthPeriodStart,
  monthPeriodEnd: PageConstant.DEFAULT_VAL.MONTH.monthPeriodEnd,
  monthCycleStart: PageConstant.DEFAULT_VAL.MONTH.monthCycleStart,
  monthCycleStep: PageConstant.DEFAULT_VAL.MONTH.monthCycleStep,
  monthOrderArr: PageConstant.DEFAULT_VAL.MONTH.monthOrderArr,

  // 星期Tab要用的数据
  weekRadioValue: PageConstant.DEFAULT_VAL.WEEK.weekRadioValue, // 1 ~ 6
  weekPeriodStart: PageConstant.DEFAULT_VAL.WEEK.weekPeriodStart,
  weekPeriodEnd: PageConstant.DEFAULT_VAL.WEEK.weekPeriodEnd,
  weekCycleStart: PageConstant.DEFAULT_VAL.WEEK.weekCycleStart,
  weekCycleStep: PageConstant.DEFAULT_VAL.WEEK.weekCycleStep,
  weekRelated: PageConstant.DEFAULT_VAL.WEEK.weekRelated,
  weekOrderArr: PageConstant.DEFAULT_VAL.WEEK.weekOrderArr,

  // 年Tab要用的数据
  yearRadioValue: PageConstant.DEFAULT_VAL.YEAR.yearRadioValue, // 1 ~ 3
  yearPeriodStart: PageConstant.DEFAULT_VAL.YEAR.yearPeriodStart,
  yearPeriodEnd: PageConstant.DEFAULT_VAL.YEAR.yearPeriodEnd,

  secondStr: PageConstant.DEFAULT_VAL.CRON_STR.secondStr,
  minuteStr: PageConstant.DEFAULT_VAL.CRON_STR.minuteStr,
  hourStr: PageConstant.DEFAULT_VAL.CRON_STR.hourStr,
  dayStr: PageConstant.DEFAULT_VAL.CRON_STR.dayStr,
  monthStr: PageConstant.DEFAULT_VAL.CRON_STR.monthStr,
  weekStr: PageConstant.DEFAULT_VAL.CRON_STR.weekStr,
  yearStr: PageConstant.DEFAULT_VAL.CRON_STR.yearStr,

  // 当 日的规则配置和 周的规则配置冲突时
  conflictObj: null,
  conflictModalVisible: false,
  conflictType: null
}

const reducer = (state, action) =>{
  switch (action?.type){
    case PageConstant.UPDATE_DATA:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export const PageContent = props => {
  const [ pageData, dispatchPageData ] = useReducer(reducer, initData)
  return (
    <PageContext.Provider value={{pageData, dispatchPageData}}>
      {props.children}
    </PageContext.Provider>
  )
}
