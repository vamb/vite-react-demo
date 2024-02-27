import React, { useEffect, useState, useContext } from 'react'
import Constant6 from "../Constant6";
import { Context6 } from "../Constent6"
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { openDB, cursorGetData, pageQuery, deleteDBData } from './DBUtils'
import { checkInputNone } from "../../utils/utils";
import UserModal from "./UserModal";
import { Button, Table, Tooltip, Modal, message } from 'antd'

const Demo6_5_1 = () => {
  const { content6Data, dispatchContent6 } = useContext(Context6)
  const { db } = content6Data
  const [ loading, setLoading ] = useState(false)
  const [ pageTotal, setPageTotal ] = useState(0) // 目前没有办法获取数据总数
  const [ tblList, setTblList ] = useState([])
  const [ searchParam, setSearchParam ] = useState({ page: 1, size: 10 })
  const [ allUser, setAllUser ] = useState([])
  const [ cursorRest, setCursorRest ] = useState([])

  const connectDB = () => {
    openDB(Constant6.INDEXEDDB_DB_NAME).then(db=>{
      dispatchContent6({
        type: Constant6.UPDATE_DATA,
        data: { db: db }
      })
      // message.success('初始化本地数据库成功')
    }).catch(err=>{
      console.error(`openDB err: ${JSON.stringify(err)}`)
      message.error('初始化本地数据库失败，请稍后重试')
      dispatchContent6({
        type: Constant6.UPDATE_DATA,
        data: { db: null }
      })
    })
  }

  const fetchTblData = param => {
    const reqParam = param || searchParam
    reqParam['pageSize'] = reqParam.size
    reqParam['storeName'] = Constant6.INDEXEDDB_TBL_NAME
    reqParam['db'] = db
    setLoading(true)
    pageQuery(reqParam).then(res=>{
      setLoading(false)
      setTblList(res)
      // console.log('fetchTblData res', res)
    }).catch(err=>{
      setLoading(false)
      message.error(`查询本地数据失败，请稍后重试`)
      console.error(`pageQuery err: ${JSON.stringify(err)}`)
    })
  }

  const fetchAll = (db, tbl) => {
    cursorGetData(db, tbl).then(res=>{
      console.log('getDataByKey res', res)
      setAllUser(res)
    }).catch(err=>{
      message.error(`获取全部用户失败，请稍后重试`)
      console.error(`getDataByKey err: ${JSON.stringify(err)}`)
      setAllUser([])
    })
  }

  const fetchByCursor = (db, tbl) => {
    cursorGetData(db, tbl).then(res=>{
      setCursorRest(res)
    }).catch(err=>{
      console.error(`cursorGetData err: ${JSON.stringify(err)}`)
      message.error('通过指针获取全部失败，请稍后重试')
    })
  }

  useEffect(()=>{
    connectDB()
  },[])

  useEffect(()=>{
    if(db) {
      fetchAll(db, Constant6.INDEXEDDB_TBL_NAME)
      fetchByCursor(db, Constant6.INDEXEDDB_TBL_NAME)
      fetchTblData()
    }
  },[db])

  const reqDelete = (itemData) => {
    setLoading(true)
    deleteDBData(db, Constant6.INDEXEDDB_TBL_NAME, itemData?.['t_id']).then(res=>{
      setLoading(false)
      fetchTblData()
      fetchAll(db, Constant6.INDEXEDDB_TBL_NAME)
      fetchByCursor(db, Constant6.INDEXEDDB_TBL_NAME)
      message.success('本地删除成功')
    }).catch(err=>{
      setLoading(false)
      message.error('本地删除数据失败，请稍后重试')
      console.error(`deleteDBData err: ${JSON.stringify(err)}`)
    })
  }

  const handleDelete = itemData => {
    Modal.confirm({
      title: '删除用户',
      content: `确认删除【${itemData.username}】吗？`,
      okText: '确定',
      cancelText: '取消',
      onOk: () => reqDelete(itemData)
    });
  }

  const columns = [
    {
      title: '序号',
      width: 60,
      render: (text, record, idx) => `${idx + 1 + (searchParam.page-1) * searchParam.size}`,
    },
    {
      title: '姓名',
      dataIndex: 'username',
      width: 100,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{checkInputNone(text)}</Tooltip>
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 100,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{checkInputNone(text)}</Tooltip>
    },
    {
      title: '操作',
      width: 300,
      ellipsis: { showTitle: false },
      render: (text, record) => {
        return (
          <div className={'ctl-group'}>
            <div
              className={'ctl-unit'}
              onClick={()=>handleCommitUser(record)}
            >编辑</div>
            <div
              className={'ctl-unit'}
              onClick={()=>handleDelete(record)}
            >删除</div>
          </div>
        )
      }
    }
  ]

  const handlePaginationChange = pagination => {
    const reqParam = { ...searchParam, ...{page: pagination.current, size: pagination.pageSize} }
    setSearchParam(reqParam)
    fetchTblData(reqParam)
  }

  const handleCommitUser = recordData => {
    dispatchContent6({
      type: Constant6.UPDATE_DATA,
      data: { userRecord: recordData, newUserModalVisible: true }
    })
  }

  return (
    <UnitContent title={'6_5_1'}>
      <Wrapper>
        <div className={'header-search'}>
          <div>
            <div>{`目前用户总数: ${allUser?.length || 0} 人`}</div>
          </div>
          <div>
            <Button type={'primary'} onClick={()=>handleCommitUser()}>创建新用户</Button>
          </div>
        </div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={tblList}
          size={'small'}
          scroll={{x: 560}}
          onChange={handlePaginationChange}
          pagination={{
            showQuickJumper: true,
            showSizeChanger: true,
            current: searchParam.page,
            pageSize: searchParam.size,
            // total: pageTotal,
            // showTotal: () =>{
            //   return <span>{`共 ${pageTotal} 条数据`}</span>;
            // }
          }}
        />
      </Wrapper>
      <UserModal fetchAll={fetchAll} fetchTblData={fetchTblData} />
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  width: 98%;
  margin-top: 20px;
  .header-search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    & > div {
      display: flex;
      flex-direction: row;
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

export default Demo6_5_1
