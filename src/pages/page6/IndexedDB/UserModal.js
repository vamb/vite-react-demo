import React, { useState, useContext, useEffect } from 'react'
import styled from "styled-components";
import { Modal, Form, Divider, Button, Input, Spin, message, InputNumber } from 'antd'
import Constant6 from "../Constant6";
import { Context6 } from "../Constent6"
import { addData, updateDBData } from './DBUtils'

const { Item } = Form

const UserModal = props => {
  const { fetchAll, fetchTblData } = props
  const { content6Data, dispatchContent6 } = useContext(Context6)
  const { db, newUserModalVisible, userRecord } = content6Data
  const [ loading, setLoading ] = useState(false)
  const [ form ] = Form.useForm();

  const modalClose = () => {
    dispatchContent6({
      type: Constant6.UPDATE_DATA,
      data: { userRecord: null, newUserModalVisible: false }
    })
    form.resetFields()
  }

  const handleSubmit = values => {
    setLoading(true)
    if(values?.t_id) {
      updateDBData(db, Constant6.INDEXEDDB_TBL_NAME, values).then(res => {
        setLoading(false)
        message.success('更新用户到本地成功')
        fetchAll(db, Constant6.INDEXEDDB_TBL_NAME)
        fetchTblData()
        modalClose()
      }).catch(err=>{
        setLoading(false)
        message.error('跟新用户到本地失败，请稍后重试')
        console.error(`updateDB err: ${JSON.stringify(err)}`)
      })
    }else{
      delete values['t_id']
      addData(db, Constant6.INDEXEDDB_TBL_NAME, values).then(res => {
        setLoading(false)
        message.success('添加用户到本地成功')
        fetchAll(db, Constant6.INDEXEDDB_TBL_NAME)
        fetchTblData()
        modalClose()
      }).catch(err=>{
        setLoading(false)
        message.error('添加用户到本地失败，请稍后重试')
        console.error(`addData err: ${JSON.stringify(err)}`)
      })
    }
  }

  const initForm = recordData => {
    form.setFieldsValue({
      t_id: recordData?.['t_id'],
      username: recordData?.['username'],
      age: recordData?.['age'],
    })
  }

  useEffect(()=>{
    if(newUserModalVisible && userRecord?.['t_id']) {
      initForm(userRecord)
    }
  },[newUserModalVisible, userRecord])

  return (
    <Spin spinning={loading}>
      <Modal
        title={userRecord?.['t_id']? '修改用户数据': '添加新用户'}
        visible={newUserModalVisible}
        width={800} footer={null} maskClosable={false}
        onCancel={()=>modalClose()}
      >
        <Wrapper>
          <Form
            labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
            onFinish={handleSubmit} form={form}
            scrollToFirstError name={'userForm'}
          >
            <Item name={'t_id'} className={'item-hidden'} />
            <Item
              name={'username'} label={'用户名称'}
              rules={[{ required: true, message: '请输入用户名称' }]}
            >
              <Input
                allowClear={true} style={{width: '80%'}}
                placeholder={'请输入用户名称'} maxLength={20}
              />
            </Item>
            <Item
              name={'age'} label={'年龄'}
              rules={[ { required: true, message: '清输入年龄' } ]}
            >
              <InputNumber
                precision={0} min={0} max={100} step={1}
                style={{width: '80%'}} placeholder={`清输入年龄`}
              />
            </Item>
            <Divider />
            <div className={'btn-group'}>
              <Button onClick={()=>modalClose()}>取消</Button>
              <Button type={'primary'} htmlType={'submit'}>提交</Button>
            </div>
          </Form>
        </Wrapper>
      </Modal>
    </Spin>
  )
}

const Wrapper = styled('div')`
  .btn-group {
    display: flex;
    justify-content: end;
  }
  .btn-group > :not(:last-child) {
    margin-right: 10px;
  }
  .item-hidden {
    display: none;
  }
`

export default UserModal
