const PageConstant = {}

PageConstant.UPDATE_DATA = 'update_data'

PageConstant.STORE_KEY = 'P9_TAB_KEY'

PageConstant.TABS_MAP = {
  TAB1: { key: 'P9_TAB_1', label: '浅拷贝 & 深拷贝' },
  TAB2: { key: 'P9_TAB_2', label: 'Cron Demo1' },
  TAB3: { key: 'P9_TAB_3', label: 'Cron Demo2' },
}

PageConstant.CRON_TABS = {
  TAB_SECOND: { key: 'TAB_SECOND', label: '秒' },
  TAB_MINUTE: { key: 'TAB_MINUTE', label: '分钟' },
  TAB_HOUR: { key: 'TAB_HOUR', label: '小时' },
  TAB_DAY: { key: 'TAB_DAY', label: '日期' },
  TAB_MONTH: { key: 'TAB_MONTH', label: '月份' },
  TAB_WEEK: { key: 'TAB_WEEK', label: '周（星期）' },
  TAB_YEAR: { key: 'TAB_YEAR', label: '年份' },
}

PageConstant.CRON_RADIO_OPTS = {
  OPT_1: 1,
  OPT_2: 2,
  OPT_3: 3,
  OPT_4: 4,
  OPT_5: 5,
  OPT_6: 6,
  OPT_7: 7,
}

PageConstant.MARK = {
  SPACE: ' ',
  ALL: '*',
  PERIOD: '-',
  CYCLE: '/',
  ORDERED: ',',
  NOT_SURE: '?',
  L: 'L',
  W: 'W',
  WEEK_SPEC: '#'
}

PageConstant.DEFAULT_VAL = {
  SECOND: {
    secondRadioValue: 1, // 1 ~ 4
    secondPeriodStart: 1,
    secondPeriodEnd: 2,
    secondCycleStart: 0,
    secondCycleStep: 1,
    secondOrderArr: [],
  },
  MINUTE: {
    minuteRadioValue: 1, // 1 ~ 4
    minutePeriodStart: 1,
    minutePeriodEnd: 2,
    minuteCycleStart: 0,
    minuteCycleStep: 1,
    minuteOrderArr: [],
  },
  HOUR: {
    hourRadioValue: 1, // 1 ~ 4
    hourPeriodStart: 0,
    hourPeriodEnd: 2,
    hourCycleStart: 0,
    hourCycleStep: 1,
    hourOrderArr: [],
  },
  DAY: {
    dayRadioValue: 1, // 1 ~ 7
    dayPeriodStart: 1,
    dayPeriodEnd: 2,
    dayCycleStart: 1,
    dayCycleStep: 1,
    dayRelated: 1,
    dayOrderArr: [],
  },
  MONTH: {
    monthRadioValue: 1, // 1 ~ 4
    monthPeriodStart: 1,
    monthPeriodEnd: 2,
    monthCycleStart: 1,
    monthCycleStep: 1,
    monthOrderArr: [],
  },
  WEEK: {
    weekRadioValue: 2, // 1 ~ 6
    weekPeriodStart: 1,
    weekPeriodEnd: 2,
    weekCycleStart: 1,
    weekCycleStep: 1,
    weekRelated: 1,
    weekOrderArr: [],
  },
  YEAR: {
    yearRadioValue: 1, // 1 ~ 3
    yearPeriodStart: 2022,
    yearPeriodEnd: 2023,
  },
  CRON_STR: {
    secondStr: PageConstant.MARK.ALL,
    minuteStr: PageConstant.MARK.ALL,
    hourStr: PageConstant.MARK.ALL,
    dayStr: PageConstant.MARK.ALL,
    monthStr: PageConstant.MARK.ALL,
    weekStr: PageConstant.MARK.NOT_SURE,
    yearStr: '',
  }
}

PageConstant.dayOrWeekRadioChangeCheck = (val, str) => {
  if(1 === val) {
    // 如果是通配符 * ，另外一个必须是不指定 ?
    return PageConstant.MARK.NOT_SURE
  }else if(2 === val && PageConstant.MARK.NOT_SURE !== str) {
    // 如果是不指定 ?， 且另外一个也是不指定，则不用修改
    return str
  }else if(2 === val && PageConstant.MARK.NOT_SURE === str) {
    // 如果是不指定 ?, 且另外一个也是不指定，则另外一个要改成通配符*
    return PageConstant.MARK.ALL
  }else {
    // 如果当前有规则，则另外一个一定要修改成不指定?
    return PageConstant.MARK.NOT_SURE
  }
}

PageConstant.CONFLICT = {
  DAY_2_WEEK: 1,
  WEEK_2_DAY: 2,
  DECODE: 3
}

PageConstant.overwriteRulesAndCombineData = (obj, tempStr, conflictType) => {
  if(PageConstant.CONFLICT.DAY_2_WEEK === conflictType) {
    // 把周的规则重置
    obj['weekStr'] = tempStr
    obj['weekRadioValue'] = PageConstant.MARK.ALL === tempStr? 1: 2
  }else if(PageConstant.CONFLICT.WEEK_2_DAY === conflictType) {
    // 把日期的规则重置
    obj['dayStr'] = tempStr
    obj['dayRadioValue'] = PageConstant.MARK.ALL === tempStr? 1: 2
  }
  return obj
}

export default PageConstant
