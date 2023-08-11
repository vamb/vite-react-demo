import React, { useState, memo } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Tabs } from 'antd'
import SecondPart from "./tempComponent/SecondPart";
import MinutePart from "./tempComponent/MinutePart";
import HourPart from "./tempComponent/HourPart";
import DayPart from "./tempComponent/DayPart";
import MonthPart from "./tempComponent/MonthPart";
import WeekPart from "./tempComponent/WeekPart";
import YearPart from "./tempComponent/YearPart";
import DisplayPart from "./tempComponent/DisplayPart";
import TempConstant from "./TempConstant";
import DayOrWeekConflictModal from "./tempComponent/DayOrWeekConflictModal";

const { TabPane } = Tabs

const Temp9_2_page = memo(()=>{
  // 参考1 => https://www.pppet.net/
  // 参考2 => https://cron.qqe2.com/
  const [ activeKey, setActiveKey ] = useState(TempConstant.CRON_TABS.TAB_SECOND.key)
  // const { pageData } = useContext(PageContext)

  // console.log('pageData', pageData)

  return (
    <UnitContent title={'Temp9_2_page Cron Demo 2'}>
      <Wrapper>
        <Tabs style={{minHeight: '455px'}} activeKey={activeKey} onChange={e=>setActiveKey(e)}>
          <TabPane tab={TempConstant.CRON_TABS.TAB_SECOND.label} key={TempConstant.CRON_TABS.TAB_SECOND.key}>
            <SecondPart />
          </TabPane>
          <TabPane tab={TempConstant.CRON_TABS.TAB_MINUTE.label} key={TempConstant.CRON_TABS.TAB_MINUTE.key}>
            <MinutePart />
          </TabPane>
          <TabPane tab={TempConstant.CRON_TABS.TAB_HOUR.label} key={TempConstant.CRON_TABS.TAB_HOUR.key}>
            <HourPart />
          </TabPane>
          <TabPane tab={TempConstant.CRON_TABS.TAB_DAY.label} key={TempConstant.CRON_TABS.TAB_DAY.key}>
            <DayPart />
          </TabPane>
          <TabPane tab={TempConstant.CRON_TABS.TAB_MONTH.label} key={TempConstant.CRON_TABS.TAB_MONTH.key}>
            <MonthPart />
          </TabPane>
          <TabPane tab={TempConstant.CRON_TABS.TAB_WEEK.label} key={TempConstant.CRON_TABS.TAB_WEEK.key}>
            <WeekPart />
          </TabPane>
          <TabPane tab={TempConstant.CRON_TABS.TAB_YEAR.label} key={TempConstant.CRON_TABS.TAB_YEAR.key}>
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

export default Temp9_2_page
