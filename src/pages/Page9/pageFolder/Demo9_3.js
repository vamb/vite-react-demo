import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import D9_3Constant from "./D9_3Constant";
import { Table, Tooltip, Input } from 'antd'
import { checkInputNone } from '@/utils/utils'

let inputTimer = null;

const Demo9_3 = () => {
  const [ tblList, setTblList ] = useState(D9_3Constant.STATIC_DATA)
  const [ search, setSearch ] = useState({ projectName: undefined });
  const [ totalHour, setTotalHour ] = useState(0)

  useEffect(()=>{
    let tempSumHour = 0
    tblList?.map(item=>{
      tempSumHour += item.losttime
    })
    setTotalHour(tempSumHour)
  },[tblList])

  const handleProjectNameSearch = ({projectName}) => {
    clearInterval(inputTimer)
    inputTimer = null
    inputTimer = setTimeout(()=>{
      const newArr = []
      tblList.map((item, idx) => {
        if(
          item.projectName?.includes(projectName) &&
          "请假" !== item?.content &&
            !item.content?.includes("年假") &&
          !item.content?.includes("请假") &&
          item.projectName !== '苏州市公安局融合侦查中心项目' &&
          !item.content?.includes('谛听')
        ){
          newArr.push(item)
        }
      })
      setTblList(newArr)
    },1000)
  }

  useEffect(()=>{
    const newArr = []
    tblList.map((item, idx) => {
      if(
        "请假" !== item?.content &&
        !item.content?.includes("年假") &&
        !item.content?.includes("请假") &&
        item.projectName !== '苏州市公安局融合侦查中心项目' &&
        !item.content?.includes('谛听')
      ){
        newArr.push(item)
      }
    })
    setTblList(newArr)
  },[])

  const columns = [
    {
      title: '编号',
      width: 80,
      fixed: 'left',
      render: (text, record, index) => `${index + 1}`
    },
    {
      title: '项目名称',
      dataIndex: 'projectName',
      width: 200,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text}>{checkInputNone(text)}</Tooltip>
    },
    {
      title: 'taskName',
      dataIndex: 'taskName',
      width: 120,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text}>{checkInputNone(text)}</Tooltip>
    },
    {
      title: 'recordByName',
      dataIndex: 'recordByName',
      width: 80,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text}>{checkInputNone(text)}</Tooltip>
    },
    {
      title: 'content',
      dataIndex: 'content',
      width: 200,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text}>{checkInputNone(text)}</Tooltip>
    },
    {
      title: 'losttime',
      dataIndex: 'losttime',
      width: 80,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text}>{checkInputNone(text)}</Tooltip>
    },
    {
      title: 'createTime',
      dataIndex: 'createTime',
      width: 140,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text}>{checkInputNone(text)}</Tooltip>
    },
  ]

  return (
    <UnitContent title={'9_3'}>
      <Wrapper>
        <div className={'header-search'}>
          <div>
            <div>{`总共: ${tblList?.length}项, ${totalHour || 0}小时`}</div>
            <Input
              placeholder="项目名称" allowClear={true}
              style={{width: '200px'}} value={search.name}
              onChange={e=>handleProjectNameSearch({projectName: e.target.value})}
            />
          </div>
        </div>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={tblList}
          size={'small'}
          scroll={{ x: 900 }}
          pagination={false}
        />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  .header-search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      & > :not(:last-child) {
        margin-right: 10px;
      }
    }
  }
  .ctl-group {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
  }
  .ctl-unit {
    color: #3E89FF;
    cursor: pointer;
  }
  .ctl-group > :not(:last-child) {
    margin-right: 10px;
  }
`

export default Demo9_3
