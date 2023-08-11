import React, { createContext, useReducer } from 'react'
import TempConstant from "./TempConstant";

export const TempContext = createContext({})

const initData = {
// 秒Tab要用的数据
  secondRadioValue: TempConstant.DEFAULT_VAL.SECOND.secondRadioValue, // 1 ~ 4
  secondPeriodStart: TempConstant.DEFAULT_VAL.SECOND.secondPeriodStart,
  secondPeriodEnd: TempConstant.DEFAULT_VAL.SECOND.secondPeriodEnd,
  secondCycleStart: TempConstant.DEFAULT_VAL.SECOND.secondCycleStart,
  secondCycleStep: TempConstant.DEFAULT_VAL.SECOND.secondCycleStep,
  secondOrderArr: TempConstant.DEFAULT_VAL.SECOND.secondOrderArr,

  // 分钟Tab要用的数据
  minuteRadioValue: TempConstant.DEFAULT_VAL.MINUTE.minuteRadioValue, // 1 ~ 4
  minutePeriodStart: TempConstant.DEFAULT_VAL.MINUTE.minutePeriodStart,
  minutePeriodEnd: TempConstant.DEFAULT_VAL.MINUTE.minutePeriodEnd,
  minuteCycleStart: TempConstant.DEFAULT_VAL.MINUTE.minuteCycleStart,
  minuteCycleStep: TempConstant.DEFAULT_VAL.MINUTE.minuteCycleStep,
  minuteOrderArr: TempConstant.DEFAULT_VAL.MINUTE.minuteOrderArr,

  // 小时Tab要用的数据
  hourRadioValue: TempConstant.DEFAULT_VAL.HOUR.hourRadioValue, // 1 ~ 4
  hourPeriodStart: TempConstant.DEFAULT_VAL.HOUR.hourPeriodStart,
  hourPeriodEnd: TempConstant.DEFAULT_VAL.HOUR.hourPeriodEnd,
  hourCycleStart: TempConstant.DEFAULT_VAL.HOUR.hourCycleStart,
  hourCycleStep: TempConstant.DEFAULT_VAL.HOUR.hourCycleStep,
  hourOrderArr: TempConstant.DEFAULT_VAL.HOUR.hourOrderArr,

  // 日期Tab要用的数据
  dayRadioValue: TempConstant.DEFAULT_VAL.DAY.dayRadioValue, // 1 ~ 7
  dayPeriodStart: TempConstant.DEFAULT_VAL.DAY.dayPeriodStart,
  dayPeriodEnd: TempConstant.DEFAULT_VAL.DAY.dayPeriodEnd,
  dayCycleStart: TempConstant.DEFAULT_VAL.DAY.dayCycleStart,
  dayCycleStep: TempConstant.DEFAULT_VAL.DAY.dayCycleStep,
  dayRelated: TempConstant.DEFAULT_VAL.DAY.dayRelated,
  dayOrderArr: TempConstant.DEFAULT_VAL.DAY.dayOrderArr,

  // 月份Tab要用的数据
  monthRadioValue: TempConstant.DEFAULT_VAL.MONTH.monthRadioValue, // 1 ~ 4
  monthPeriodStart: TempConstant.DEFAULT_VAL.MONTH.monthPeriodStart,
  monthPeriodEnd: TempConstant.DEFAULT_VAL.MONTH.monthPeriodEnd,
  monthCycleStart: TempConstant.DEFAULT_VAL.MONTH.monthCycleStart,
  monthCycleStep: TempConstant.DEFAULT_VAL.MONTH.monthCycleStep,
  monthOrderArr: TempConstant.DEFAULT_VAL.MONTH.monthOrderArr,

  // 星期Tab要用的数据
  weekRadioValue: TempConstant.DEFAULT_VAL.WEEK.weekRadioValue, // 1 ~ 6
  weekPeriodStart: TempConstant.DEFAULT_VAL.WEEK.weekPeriodStart,
  weekPeriodEnd: TempConstant.DEFAULT_VAL.WEEK.weekPeriodEnd,
  weekCycleStart: TempConstant.DEFAULT_VAL.WEEK.weekCycleStart,
  weekCycleStep: TempConstant.DEFAULT_VAL.WEEK.weekCycleStep,
  weekRelated: TempConstant.DEFAULT_VAL.WEEK.weekRelated,
  weekOrderArr: TempConstant.DEFAULT_VAL.WEEK.weekOrderArr,

  // 年Tab要用的数据
  yearRadioValue: TempConstant.DEFAULT_VAL.YEAR.yearRadioValue, // 1 ~ 3
  yearPeriodStart: TempConstant.DEFAULT_VAL.YEAR.yearPeriodStart,
  yearPeriodEnd: TempConstant.DEFAULT_VAL.YEAR.yearPeriodEnd,

  secondStr: TempConstant.DEFAULT_VAL.CRON_STR.secondStr,
  minuteStr: TempConstant.DEFAULT_VAL.CRON_STR.minuteStr,
  hourStr: TempConstant.DEFAULT_VAL.CRON_STR.hourStr,
  dayStr: TempConstant.DEFAULT_VAL.CRON_STR.dayStr,
  monthStr: TempConstant.DEFAULT_VAL.CRON_STR.monthStr,
  weekStr: TempConstant.DEFAULT_VAL.CRON_STR.weekStr,
  yearStr: TempConstant.DEFAULT_VAL.CRON_STR.yearStr,

  // 当 日的规则配置和 周的规则配置冲突时
  conflictObj: null,
  conflictModalVisible: false,
  conflictType: null
}

const reducer = (state, action) => {
  switch (action?.type){
    case TempConstant.UPDATE_DATA:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export const TempContent = props => {
  const [ tempData, dispatchTempData ] = useReducer(reducer, initData)
  return (
    <TempContext.Provider value={{tempData, dispatchTempData}}>
      {props.children}
    </TempContext.Provider>
  )
}
