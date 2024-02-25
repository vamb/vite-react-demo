import React, { useState, useContext, useEffect } from 'react'
import styled from "styled-components";
import { Modal, Form, Divider, Button, Input, Spin, message, InputNumber } from 'antd'
import Constant6 from "../Constant6";
import { Context6 } from "../Constent6"
import { addData } from './utils'

const { Item } = Form

const UserModal = props => {
  const { fetchAll } = props
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
    console.log('handleSubmit values', values)
    const newUser = {
      name: 'testName',
      age: Math.round(Math.random() * 30)
    }
    setLoading(true)
    addData(db, Constant6.INDEXEDDB_TBL_NAME, newUser).then(res=>{
      setLoading(false)
      message.success('添加新用户成功')
      fetchAll(db, Constant6.INDEXEDDB_TBL_NAME)
    }).catch(err=>{
      setLoading(false)
      message.error('提交数据失败，请稍后重试')
      console.error(`addData err: ${JSON.stringify(err)}`)
    })
  }

  return (
    <Spin>
      <Modal
        title={userRecord?.id? '修改用户数据': '添加新用户'}
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
`

export default UserModal
