import React, { useEffect, useState } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Http } from '../../utils/Http'
import { Table, Tooltip, Form, Input, Button, message } from 'antd'

const { Item } = Form

const Demo7 = ()=>{
  const [ tblList, setTblList ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ form ] = Form.useForm();

  const queryBooks = async () =>{
    setLoading(true)
    let rest = await Http({url: 'http://ajax-base-api-t.itheima.net/api/getbooks'})
    setLoading(false)
    const { data, msg, status } = rest
    let tempArr = []
    if(Array.isArray(data) && data.length>0){
      data.map((item, idx)=>{
        item['key'] = `tbl-book-${idx}`
        tempArr.push(item)
      })
    }
    setTblList(tempArr)
    console.log('queryBooks rest', rest)
  }

  const checkInBook = async (values) =>{
    let rest = await Http({
      url: 'http://ajax-base-api-t.itheima.net/api/addbook',
      data: values,
      method: 'post'
    })
    console.log('checkInBook rest', rest)
    const { status, msg } = rest
    if(200 <= status && 400 > status){
      message.success(msg)
      queryBooks()
      handleCancel()
    }else {
      message.error('提交数据失败，请稍后重试')
      console.error(`checkInBook ${msg} ${status}`)
    }
  }

  const deleteBook = async (record) =>{
    let rest = await Http({
      url: 'http://ajax-base-api-t.itheima.net/api/delbook',
      params: { id: record.id }
    })
    const { status, msg } = rest
    if(200 <= status && 400 > status){
      message.success(msg)
      queryBooks()
    }else {
      message.error('提交数据失败，请稍后重试')
      console.error(`checkInBook ${msg} ${status}`)
    }
  }

  const handleSubmit = async values => {
    console.log('handleSubmit values', values)
    await checkInBook(values)
  }

  const handleCancel = () =>{
    form.resetFields()
  }

  useEffect(()=>{
    queryBooks()
  },[])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
    },
    {
      title: '书名',
      dataIndex: 'bookname',
      width: 150,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
    },
    {
      title: '作者',
      dataIndex: 'author',
      width: 150,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
    },
    {
      title: '出版社',
      dataIndex: 'publisher',
      width: 150,
      ellipsis: { showTitle: false },
      render: (text) => <Tooltip title={text} placement="topLeft">{text}</Tooltip>
    },
    {
      title: '操作',
      width: 150,
      render: (text, record) =>{
        return <Button type={'link'} onClick={()=>deleteBook(record)}>删除</Button>
      }
    }
  ]

  return (
    <UnitContent title={'6 - Demo7'}>
      <Wrapper>
        <Table
          loading={loading}
          columns={columns}
          dataSource={tblList}
          size={'small'}
          scroll={{ x: 530 }}
        />
        <Form
          labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
          scrollToFirstError name={'bookForm'} form={form}
          onFinish={async (values)=>await handleSubmit(values)}
        >
          <Item name={'id'} className={'item-hidden'} />
          <Item
            name={'bookname'} label={'书名'}
            rules={[{ required: true, message: '请录入书名' }]}
          >
            <Input allowClear={true} style={{width: '80%'}} placeholder={'请录入书名'} maxLength={20} />
          </Item>
          <Item
            name={'author'} label={'作者'}
            rules={[{ required: true, message: '请录入作者' }]}
          >
            <Input allowClear={true} style={{width: '80%'}} placeholder={'请录入作者'} maxLength={20} />
          </Item>
          <Item
            name={'publisher'} label={'出版社'}
            rules={[{ required: true, message: '请录入出版社' }]}
          >
            <Input allowClear={true} style={{width: '80%'}} placeholder={'请录入出版社'} maxLength={20} />
          </Item>
          <div className={'btn-group'}>
            <Button onClick={()=>queryBooks()} >刷新</Button>
            <div>
              <Button
                onClick={()=>handleCancel()}
                style={{marginRight: '10px'}}
              >取消</Button>
              <Button type={'primary'} htmlType={'submit'}>提交</Button>
            </div>
          </div>
        </Form>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  .btn-group {
    display: flex;
    justify-content: space-between;
    padding: 0 130px;
  }
`

export default Demo7
