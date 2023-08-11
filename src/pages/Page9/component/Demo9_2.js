import React, { useState, memo, useContext } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Tabs } from 'antd'
import SecondPart from "./component/SecondPart";
import MinutePart from "./component/MinutePart";
import HourPart from "./component/HourPart";
import DayPart from "./component/DayPart";
import MonthPart from "./component/MonthPart";
import WeekPart from "./component/WeekPart";
import YearPart from "./component/YearPart";
import DisplayPart from "./component/DisplayPart";
import PageConstant from "../PageConstant";
// import { PageContext } from '../PageContent'
import DayOrWeekConflictModal from "./component/DayOrWeekConflictModal";

const { TabPane } = Tabs

const Demo9_2 = memo(()=>{
  // 参考1 => https://www.pppet.net/
  // 参考2 => https://cron.qqe2.com/
  const [ activeKey, setActiveKey ] = useState(PageConstant.CRON_TABS.TAB_SECOND.key)
  // const { pageData } = useContext(PageContext)

  // console.log('pageData', pageData)

  return (
    <UnitContent title={'Demo9_2 Cron Demo'}>
      <Wrapper>
        <Tabs style={{minHeight: '455px'}} activeKey={activeKey} onChange={e=>setActiveKey(e)}>
          <TabPane tab={PageConstant.CRON_TABS.TAB_SECOND.label} key={PageConstant.CRON_TABS.TAB_SECOND.key}>
            <SecondPart />
          </TabPane>
          <TabPane tab={PageConstant.CRON_TABS.TAB_MINUTE.label} key={PageConstant.CRON_TABS.TAB_MINUTE.key}>
            <MinutePart />
          </TabPane>
          <TabPane tab={PageConstant.CRON_TABS.TAB_HOUR.label} key={PageConstant.CRON_TABS.TAB_HOUR.key}>
            <HourPart />
          </TabPane>
          <TabPane tab={PageConstant.CRON_TABS.TAB_DAY.label} key={PageConstant.CRON_TABS.TAB_DAY.key}>
            <DayPart />
          </TabPane>
          <TabPane tab={PageConstant.CRON_TABS.TAB_MONTH.label} key={PageConstant.CRON_TABS.TAB_MONTH.key}>
            <MonthPart />
          </TabPane>
          <TabPane tab={PageConstant.CRON_TABS.TAB_WEEK.label} key={PageConstant.CRON_TABS.TAB_WEEK.key}>
            <WeekPart />
          </TabPane>
          <TabPane tab={PageConstant.CRON_TABS.TAB_YEAR.label} key={PageConstant.CRON_TABS.TAB_YEAR.key}>
            <YearPart />
          </TabPane>
        </Tabs>
        <DisplayPart />
        <DayOrWeekConflictModal />
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  .radio-group-content {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    & > label {
      margin: 5px 0;
      display: flex;
    }
  }
  .option-text {
    display: flex;
    align-items: center;
    height: 32px;
  }
  .main-text, .info-text {
  }
  .main-text {
    font-weight: 700;
  }
  .info-text {
  
  }
  .check-box-group {
    padding-left: 10px;
    width: 550px;
  }
  .checkbox-content {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin-top: 10px;
    &>:nth-child(1) {
      padding-left: 8px;
    }
  }
`

export default Demo9_2
