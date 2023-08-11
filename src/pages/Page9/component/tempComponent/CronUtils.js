import { message } from 'antd'
import TempConstant from "../TempConstant";

export const encodeSecondPart = (dataGroup) => {
  const { secondRadioValue, secondPeriodStart, secondPeriodEnd, secondCycleStart,
    secondCycleStep, secondOrderArr } = dataGroup
  let secondStr = ''
  switch (secondRadioValue){
    case TempConstant.CRON_RADIO_OPTS.OPT_1:
      secondStr = '*'
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_2:
      secondStr = `${secondPeriodStart}-${secondPeriodEnd}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_3:
      secondStr = `${secondCycleStart}/${secondCycleStep}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_4:
      if(!Array.isArray(secondOrderArr) || secondOrderArr.length <= 0) {
        dataGroup['secondOrderArr'] = [0]
      }
      dataGroup['secondOrderArr'].map((num, idx)=>{
        secondStr = secondStr + num
        if(idx !== dataGroup['secondOrderArr'].length-1){
          secondStr = secondStr + TempConstant.MARK.ORDERED
        }
      })
      break
  }
  dataGroup['secondStr'] = secondStr
  return dataGroup
}

export const encodeMinutePart = (dataGroup) => {
  // console.log('encodeMinutePart dataGroup', dataGroup)
  const { minuteRadioValue, minutePeriodStart, minutePeriodEnd, minuteCycleStart,
    minuteCycleStep, minuteOrderArr } = dataGroup
  let minuteStr = ''
  switch (minuteRadioValue){
    case TempConstant.CRON_RADIO_OPTS.OPT_1:
      minuteStr = '*'
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_2:
      minuteStr = `${minutePeriodStart}-${minutePeriodEnd}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_3:
      minuteStr = `${minuteCycleStart}/${minuteCycleStep}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_4:
      if(!Array.isArray(minuteOrderArr) || minuteOrderArr.length <= 0) {
        dataGroup['minuteOrderArr'] = [0]
      }
      dataGroup['minuteOrderArr'].map((min, idx)=>{
        minuteStr = minuteStr + min
        if(idx !== dataGroup['minuteOrderArr'].length - 1) {
          minuteStr = minuteStr + TempConstant.MARK.ORDERED
        }
      })
      break
  }
  dataGroup['minuteStr'] = minuteStr
  return dataGroup
}

export const encodeHourPart = (dataGroup) => {
  // console.log('encodeHourPart dataGroup', dataGroup)
  const { hourRadioValue, hourPeriodStart, hourPeriodEnd, hourCycleStart,
    hourCycleStep, hourOrderArr, } = dataGroup
  let hourStr = ''
  switch (hourRadioValue) {
    case TempConstant.CRON_RADIO_OPTS.OPT_1:
      hourStr = '*'
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_2:
      hourStr = `${hourPeriodStart}-${hourPeriodEnd}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_3:
      hourStr = `${hourCycleStart}/${hourCycleStep}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_4:
      if(!Array.isArray(hourOrderArr) || hourOrderArr.length <= 0) {
        dataGroup['hourOrderArr'] = [0]
      }
      dataGroup['hourOrderArr'].map((min, idx)=>{
        hourStr = hourStr + min
        if(idx !== dataGroup['hourOrderArr'].length - 1) {
          hourStr = hourStr + TempConstant.MARK.ORDERED
        }
      })
      break
  }
  dataGroup['hourStr'] = hourStr
  return dataGroup
}

export const encodeDayPart = (dataGroup) => {
  // console.log('encodeDayPart dataGroup', dataGroup)
  const { dayRadioValue, dayPeriodStart, dayPeriodEnd, dayCycleStart,
    dayCycleStep, dayRelated, dayOrderArr } = dataGroup
  let dayStr = ''
  switch (dayRadioValue){
    case TempConstant.CRON_RADIO_OPTS.OPT_1:
      dayStr = TempConstant.MARK.ALL
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_2:
      dayStr = TempConstant.MARK.NOT_SURE
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_3:
      dayStr = `${dayPeriodStart}-${dayPeriodEnd}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_4:
      dayStr = `${dayCycleStart}/${dayCycleStep}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_5:
      dayStr = `${dayRelated}W`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_6:
      dayStr = `L`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_7:
      if(!Array.isArray(dayOrderArr) || dayOrderArr.length <= 0) {
        dataGroup['dayOrderArr'] = [1]
      }
      dataGroup['dayOrderArr'].map((date, idx)=>{
        dayStr = dayStr + date
        if(idx !== dataGroup['dayOrderArr'].length - 1) {
          dayStr = dayStr + TempConstant.MARK.ORDERED
        }
      })
      break
  }
  dataGroup['dayStr'] = dayStr
  return dataGroup
}

export const encodeMonthPart = (dataGroup) => {
  // console.log('encodeMonthPart dataGroup', dataGroup)
  const { monthRadioValue, monthPeriodStart, monthPeriodEnd,
    monthCycleStart, monthCycleStep, monthOrderArr } = dataGroup
  let monthStr = ''
  switch (monthRadioValue){
    case TempConstant.CRON_RADIO_OPTS.OPT_1:
      monthStr = TempConstant.MARK.ALL
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_2:
      monthStr = `${monthPeriodStart}-${monthPeriodEnd}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_3:
      monthStr = `${monthCycleStart}/${monthCycleStep}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_4:
      if(!Array.isArray(monthOrderArr) || monthOrderArr.length <= 0) {
        dataGroup['monthOrderArr'] = [1]
      }
      dataGroup['monthOrderArr'].map((mon, idx)=>{
        monthStr = monthStr + mon
        if(idx !== dataGroup['monthOrderArr'].length - 1) {
          monthStr = monthStr + TempConstant.MARK.ORDERED
        }
      })
      break
  }
  dataGroup['monthStr'] = monthStr
  return dataGroup
}

export const encodeWeekPart = (dataGroup) => {
  // console.log('encodeWeekPart dataGroup', dataGroup)
  const { weekRadioValue, weekPeriodStart, weekPeriodEnd,
    weekCycleStart, weekCycleStep, weekRelated, weekOrderArr } = dataGroup
  let weekStr = ''
  switch (weekRadioValue) {
    case TempConstant.CRON_RADIO_OPTS.OPT_1:
      weekStr = TempConstant.MARK.ALL
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_2:
      weekStr = TempConstant.MARK.NOT_SURE
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_3:
      weekStr = `${weekPeriodStart}/${weekPeriodEnd}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_4:
      weekStr = `${weekCycleStart}#${weekCycleStep}`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_5:
      weekStr = `${weekRelated}L`
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_6:
      if(!Array.isArray(weekOrderArr) || weekOrderArr.length <= 0) {
        dataGroup['weekOrderArr'] = [1]
      }
      dataGroup['weekOrderArr'].map((item, idx)=>{
        weekStr = weekStr + item
        if(idx !== dataGroup['weekOrderArr'].length - 1) {
          weekStr = weekStr + TempConstant.MARK.ORDERED
        }
      })
      break
  }
  dataGroup['weekStr'] = weekStr
  return dataGroup
}

export const encodeYearPart = (dataGroup) => {
  // console.log('encodeYearPart dataGroup', dataGroup)
  const { yearRadioValue, yearPeriodStart, yearPeriodEnd } = dataGroup
  let yearStr = ''
  switch (yearRadioValue) {
    case TempConstant.CRON_RADIO_OPTS.OPT_1:
      yearStr = ''
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_2:
      yearStr = '*'
      break
    case TempConstant.CRON_RADIO_OPTS.OPT_3:
      yearStr = `${yearPeriodStart}-${yearPeriodEnd}`
      break
  }
  dataGroup['yearStr'] = yearStr
  return dataGroup
}

const verifyArrNum = (arr, count) => {
  let isValid = true
  const returnArr = []
  const loopCount = count || arr.length
  for(let i=0; i<loopCount; i++){
    if(isNaN(arr[i])){
      isValid = false
      break
    }
    returnArr.push(parseInt(arr[i]))
  }
  return isValid? returnArr: null
}

const decodeNumArr = str => {
  const numArr = str.split(TempConstant.MARK.ORDERED)
  return verifyArrNum(numArr)
}

const decodeHasSuffix = (str, len) => {
  let num = str.substring(0, str.length - len)
  return isNaN(num)? null: num
}

const decodeStrWithMark = (str, mark) => {
  const arr = str.split(mark)
  return verifyArrNum(arr,2)
}

const cronDecodeSecond = str => {
  const secondObj = {
    secondRadioValue: null
  }
  if(TempConstant.MARK.ALL === str){
    secondObj.secondRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_1
  }else if(str.includes(TempConstant.MARK.PERIOD)){
    secondObj.secondRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_2
    const rest = decodeStrWithMark(str, TempConstant.MARK.PERIOD)
    if(Array.isArray(rest) && rest.length === 2){
      secondObj['secondPeriodStart'] = rest[0]
      secondObj['secondPeriodEnd'] = rest[1]
    }else{
      return null
    }
  }else if(str.includes(TempConstant.MARK.CYCLE)){
    secondObj.secondRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_3
    const rest = decodeStrWithMark(str, TempConstant.MARK.CYCLE)
    if(Array.isArray(rest) && rest.length === 2){
      secondObj['secondCycleStart'] = rest[0]
      secondObj['secondCycleStep'] = rest[1]
    }else{
      return null
    }
  }else{
    secondObj.secondRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_4
    secondObj['secondOrderArr'] = decodeNumArr(str)
    if(!Array.isArray(secondObj['secondOrderArr']) || secondObj['secondOrderArr'].length <=0){
      return null
    }
  }
  return secondObj
}

const cronDecodeMinute = str => {
  const minuteObj = {
    minuteRadioValue: null
  }
  if(TempConstant.MARK.ALL === str){
    minuteObj.minuteRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_1
  }else if(str.includes(TempConstant.MARK.PERIOD)){
    minuteObj.minuteRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_2
    const rest = decodeStrWithMark(str, TempConstant.MARK.PERIOD)
    if(Array.isArray(rest) && rest.length === 2){
      minuteObj['minutePeriodStart'] = rest[0]
      minuteObj['minutePeriodEnd'] = rest[1]
    }else{
      return null
    }
  }else if(str.includes(TempConstant.MARK.CYCLE)){
    minuteObj.minuteRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_3
    const rest = decodeStrWithMark(str, TempConstant.MARK.CYCLE)
    if(Array.isArray(rest) && rest.length === 2){
      minuteObj['minuteCycleStart'] = rest[0]
      minuteObj['minuteCycleStep'] = rest[1]
    }else{
      return null
    }
  }else{
    minuteObj.minuteRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_4
    minuteObj['minuteOrderArr'] = decodeNumArr(str)
    if(!Array.isArray(minuteObj['minuteOrderArr']) || minuteObj['minuteOrderArr'].length <=0){
      return null
    }
  }
  return minuteObj
}

const cronDecodeHour = str => {
  const hourObj = {
    hourRadioValue: null
  }
  if(TempConstant.MARK.ALL === str){
    hourObj.hourRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_1
  }else if(str.includes(TempConstant.MARK.PERIOD)){
    hourObj.hourRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_2
    const rest = decodeStrWithMark(str, TempConstant.MARK.PERIOD)
    if(Array.isArray(rest) && rest.length === 2){
      hourObj['hourPeriodStart'] = rest[0]
      hourObj['hourPeriodEnd'] = rest[1]
    }else{
      return null
    }
  }else if(str.includes(TempConstant.MARK.CYCLE)){
    hourObj.hourRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_3
    const rest = decodeStrWithMark(str, TempConstant.MARK.CYCLE)
    if(Array.isArray(rest) && rest.length === 2){
      hourObj['hourCycleStart'] = rest[0]
      hourObj['hourCycleStep'] = rest[1]
    }else{
      return null
    }
  }else{
    hourObj.hourRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_5
    hourObj['hourOrderArr'] = decodeNumArr(str)
    if(!Array.isArray(hourObj['hourOrderArr']) || hourObj['hourOrderArr'].length <=0){
      return null
    }
  }
  return hourObj
}

const cronDecodeDay = str => {
  const dayObj = {
    dayRadioValue: null
  }
  if(TempConstant.MARK.ALL === str) {
    dayObj.dayRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_1
  }else if(TempConstant.MARK.NOT_SURE === str){
    dayObj.dayRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_2
  }else if(str.includes(TempConstant.MARK.PERIOD)){
    dayObj.dayRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_3
    const rest = decodeStrWithMark(str, TempConstant.MARK.PERIOD)
    if(Array.isArray(rest) && rest.length === 2){
      dayObj['dayPeriodStart'] = rest[0]
      dayObj['dayPeriodEnd'] = rest[1]
    }else{
      return null
    }
  }else if(str.includes(TempConstant.MARK.CYCLE)){
    dayObj.dayRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_4
    const rest = decodeStrWithMark(str, TempConstant.MARK.CYCLE)
    if(Array.isArray(rest) && rest.length === 2){
      dayObj['dayCycleStart'] = rest[0]
      dayObj['dayCycleStep'] = rest[1]
    }else{
      return null
    }
  }else if(str.endsWith(TempConstant.MARK.W)){
    dayObj.dayRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_5
    const dayRelated = decodeHasSuffix(str, 1)
    if(dayRelated){
      dayObj['dayRelated'] = dayRelated
    }else{
      return null
    }
  }else if(TempConstant.MARK.L === str){
    dayObj.dayRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_6
  }else {
    dayObj.dayRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_7
    dayObj['dayOrderArr'] = decodeNumArr(str)
    if(!Array.isArray(dayObj['dayOrderArr']) || dayObj['dayOrderArr'].length <=0){
      return null
    }
  }
  return dayObj
}

const cronDecodeMonth = str => {
  const monthObj = {
    monthRadioValue: null
  }
  if(TempConstant.MARK.ALL === str){
    monthObj.monthRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_1
  }else if(str.includes(TempConstant.MARK.PERIOD)){
    monthObj.monthRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_2
    const rest = decodeStrWithMark(str, TempConstant.MARK.PERIOD)
    if(Array.isArray(rest) && rest.length === 2){
      monthObj['monthPeriodStart'] = rest[0]
      monthObj['monthPeriodEnd'] = rest[1]
    }else{
      return null
    }
  }else if(str.includes(TempConstant.MARK.CYCLE)){
    monthObj.monthRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_3
    const rest = decodeStrWithMark(str, TempConstant.MARK.CYCLE)
    if(Array.isArray(rest) && rest.length === 2){
      monthObj['monthCycleStart'] = rest[0]
      monthObj['monthCycleStep'] = rest[1]
    }else{
      return null
    }
  }else{
    monthObj.monthRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_4
    monthObj['monthOrderArr'] = decodeNumArr(str)
    if(!Array.isArray(monthObj['monthOrderArr']) || monthObj['monthOrderArr'].length <=0){
      return null
    }
  }
  return monthObj
}

const cronDecodeWeek = str => {
  const weekObj = {
    weekRadioValue: null
  }
  if(TempConstant.MARK.ALL === str) {
    weekObj.weekRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_1
  }else if(TempConstant.MARK.NOT_SURE === str){
    weekObj.weekRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_2
  }else if(str.includes(TempConstant.MARK.CYCLE)){
    weekObj.weekRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_3
    const rest = decodeStrWithMark(str, TempConstant.MARK.CYCLE)
    if(Array.isArray(rest) && rest.length === 2){
      weekObj['weekPeriodStart'] = rest[0]
      weekObj['weekPeriodEnd'] = rest[1]
    }else{
      return null
    }
  }else if(str.includes(TempConstant.MARK.WEEK_SPEC)){
    weekObj.weekRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_4
    const rest = decodeStrWithMark(str, TempConstant.MARK.WEEK_SPEC)
    if(Array.isArray(rest) && rest.length === 2){
      weekObj['weekCycleStart'] = rest[0]
      weekObj['weekCycleStep'] = rest[1]
    }else{
      return null
    }
  }else if(str.endsWith(TempConstant.MARK.L)){
    weekObj.weekRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_5
    const weekRelated = decodeHasSuffix(str, 1)
    if(weekRelated){
      weekObj['weekRelated'] = weekRelated
    }else{
      return null
    }
  }else {
    weekObj.weekRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_6
    weekObj['weekOrderArr'] = decodeNumArr(str)
    if(!Array.isArray(weekObj['weekOrderArr']) || weekObj['weekOrderArr'].length <=0){
      return null
    }
  }
  return weekObj
}

const cronDecodeYear = str => {
  const yearObj = {
    yearRadioValue: null
  }
  if(!str){
    yearObj.yearRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_1
  }else if(TempConstant.MARK.ALL === str){
    yearObj.yearRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_2
  }else if(str.includes(TempConstant.MARK.PERIOD)){
    yearObj.yearRadioValue = TempConstant.CRON_RADIO_OPTS.OPT_3
    const rest = decodeStrWithMark(str, TempConstant.MARK.PERIOD)
    if(Array.isArray(rest) && rest.length === 2){
      yearObj['yearPeriodStart'] = rest[0]
      yearObj['yearPeriodEnd'] = rest[1]
      if(isNaN(yearObj['yearPeriodStart']) || isNaN(yearObj['yearPeriodEnd'])){
        return null
      }
    }else{
      return null
    }
  }
  return yearObj
}

export const cronDecode = cronStr => {
  // console.log('cronDecode cronStr', cronStr)
  const cronArr = cronStr? cronStr.trim()?.split(TempConstant.MARK.SPACE): []
  if(!Array.isArray(cronArr) || cronArr.length<6 || cronArr.length>7){
    message.error('Cron表达式解析失败，请重新确认表达式')
    return null
  }
  // console.log('cronDecode cronArr', cronArr)
  let dispatchObj = {
    secondStr: cronArr[0],
    minuteStr: cronArr[1],
    hourStr: cronArr[2],
    dayStr: cronArr[3],
    monthStr: cronArr[4],
    weekStr: cronArr[5],
    yearStr: cronArr[6] || '',
  }
  // console.log('cronDecode dispatchObj', dispatchObj)

  const secondObj = cronDecodeSecond(dispatchObj.secondStr)
  // console.log('cronDecode secondObj', secondObj)

  const minuteObj = cronDecodeMinute(dispatchObj.minuteStr)
  // console.log('cronDecode minuteObj', minuteObj)

  const hourObj = cronDecodeHour(dispatchObj.hourStr)
  // console.log('cronDecode hourObj', hourObj)

  const dayObj = cronDecodeDay(dispatchObj.dayStr)
  // console.log('cronDecode dayObj', dayObj)

  const monthObj = cronDecodeMonth(dispatchObj.monthStr)
  // console.log('cronDecode monthObj', monthObj)

  const weekObj = cronDecodeWeek(dispatchObj.weekStr)
  // console.log('cronDecode weekObj', weekObj)

  const yearObj = cronDecodeYear(dispatchObj.yearStr)
  // console.log('cronDecode yearObj', yearObj)

  if(!secondObj || !secondObj?.secondRadioValue) {
    message.error(`秒 ${dispatchObj.secondStr} 解析失败`)
    return null
  }

  if(!minuteObj || !minuteObj?.minuteRadioValue) {
    message.error(`分钟 ${dispatchObj.minuteStr} 解析失败`)
    return null
  }

  if(!hourObj || !hourObj?.hourRadioValue) {
    message.error(`小时 ${dispatchObj.hourStr} 解析失败`)
    return null
  }

  if(!dayObj || !dayObj?.dayRadioValue) {
    message.error(`日期 ${dispatchObj.dayStr} 解析失败`)
    return null
  }

  if(!monthObj || !monthObj?.monthRadioValue) {
    message.error(`月份 ${dispatchObj.monthStr} 解析失败`)
    return null
  }

  if(!weekObj || !weekObj?.weekRadioValue) {
    message.error(`星期 ${dispatchObj.weekStr} 解析失败`)
    return null
  }

  if(!yearObj || !yearObj?.yearRadioValue) {
    message.error(`年 ${dispatchObj.yearStr} 解析失败`)
    return null
  }

  // 在所有规则解析成功后再验证日期规则和星期规则是否冲突
  const tempWeekStr = TempConstant.dayOrWeekRadioChangeCheck(dayObj.dayRadioValue, dispatchObj.weekStr)
  if(tempWeekStr !== dispatchObj.weekStr){
    message.error('日期规则和星期规则冲突，请重新填写')
    return null
  }

  return {
    ...dispatchObj,
    ...TempConstant.DEFAULT_VAL.SECOND,
    ...TempConstant.DEFAULT_VAL.MINUTE,
    ...TempConstant.DEFAULT_VAL.HOUR,
    ...TempConstant.DEFAULT_VAL.DAY,
    ...TempConstant.DEFAULT_VAL.MONTH,
    ...TempConstant.DEFAULT_VAL.WEEK,
    ...TempConstant.DEFAULT_VAL.YEAR,
    ...secondObj,
    ...minuteObj,
    ...hourObj,
    ...dayObj,
    ...monthObj,
    ...weekObj,
    ...yearObj
  }
}
