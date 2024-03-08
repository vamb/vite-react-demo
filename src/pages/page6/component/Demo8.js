import React, { useEffect, useState, useContext } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Table, Tooltip, Button, message } from 'antd'
import Demo8Modal from './Demo8Modal'
import { PlusOutlined } from '@ant-design/icons';
import { Context6 } from '../Constent6'
import Constant6 from "../Constant6";
import { Http } from '@/utils/Http'

const Demo8 = () => {
  const [ search, setSearch ] = useState({page: 1, size: 10})
  const [ tblList, setTblList ] = useState([])
  const [ pageTotal, setPageTotal ] = useState(0)
  const [ loading, setLoading ] = useState(false)
  const { dispatchContent6 } = useContext(Context6)

  const fetchTblList = (param) => {
    const reqParam = param? param: search
    setLoading(true)
    Http({
      url: `http://localhost:3000/role/list?page=${reqParam.page}&size=${reqParam.size}`,
    }).then(res=>{
      setLoading(false)
      const { data, status } = res
      if(200 === status){
        const { list, totalCount } = data
        const temp = []
        if(Array.isArray(list) && list.length>0){
          list.map((item, idx)=>{
            item['key'] = `role-tbl-item-${idx}`
            temp.push(item)
          })
        }
        setTblList(temp)
        setPageTotal(totalCount)
      }
    }).catch(err=>{
      setLoading(false)
      console.log('err', err)
    })
  }

  const handleDelete =(record)=> {
    setLoading(true)
    Http({
      url: `http://localhost:3000/role/${record.id}`,
      method: 'delete',
    }).then(res=>{
      setLoading(false)
      const { status } = res
      if( 200 === status ){
        message.success('删除数据成功')
        fetchTblList()
      }
    }).catch(err=>{
      setLoading(false)
      message.error('删除数据失败')
    })
  }

  const handleUpdate =(record)=> {
    dispatchContent6({
      type: Constant6.UPDATE_DATA,
      data: { demo8ModalShow: true, demo8SearchObj: search, demo8FormData: record }
    })
  }

  useEffect(()=>{
    fetchTblList()
  },[])

  const columns = [
    {
      title: '序号',
      width: 80,
      render: (text, record, idx) => `${idx + 1 + (search.page - 1) * search.size}`,
    },
    {
      title: '角色名称',
      dataIndex: 'name',
      width: 120,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
    },
    {
      title: '角色Code',
      dataIndex: 'code',
      width: 120,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
    },
    {
      title: '角色描述',
      dataIndex: 'description',
      width: 150,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
    },
    {
      title: '创建人',
      dataIndex: 'createBy',
      width: 150,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 150,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
    },
    {
      title: '操作',
      width: 150,
      render: (test, record) => {
        return (
          <div className={'opt-group'}>
            <Button type={'primary'} onClick={()=>handleDelete(record)}>删除</Button>
            <Button type={'primary'} onClick={()=>handleUpdate(record)}>修改</Button>
          </div>
        )
      }
    }
  ]

  const handlePaginationChange = (pagination) => {
    const reqParam = {
      page: pagination?.current,
      size: pagination?.pageSize,
    }
    setSearch(reqParam)
    fetchTblList(reqParam)
  }

  return (
    <UnitContent title={'8 - nest-rbac'}>
      <Wrapper>
        <div className={'ctl-group'}>
          <Button onClick={()=>fetchTblList()}>刷新</Button>
          <Button
            type={'primary'}
            icon={<PlusOutlined />}
            onClick={()=>{
              dispatchContent6({
                type: Constant6.UPDATE_DATA,
                data: { demo8ModalShow: true, demo8SearchObj: search }
              })
            }}
          >添加</Button>
        </div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={tblList}
          size={'small'}
          scroll={{ x: 920 }}
          onChange={handlePaginationChange}
          pagination={{
            showQuickJumper: true,
            showSizeChanger: true,
            current: search.page,
            pageSize: search.size,
            total: pageTotal,
            showTotal: () =>{
              return <span>{`共 ${pageTotal} 条数据`}</span>;
            }
          }}
        />
      </Wrapper>
      <Demo8Modal fetchTblList={fetchTblList} />
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  .ctl-group {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 10px;
  }
  .opt-group {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 5px;
  }
`

export default Demo8
