import React, { useState, useContext, useMemo } from 'react'
import styled from "styled-components";
import { Context6 } from '../Constent6'
import Constant6 from "../Constant6";
import { Modal, Form, Button, message, Spin, Input } from "antd";
import { Http } from '../../utils/Http'

const { Item } = Form

const Demo8Modal = (props) => {
  const { fetchTblList } = props
  const [ modalLoading, setModalLoading ] = useState(false)
  const { content6Data, dispatchContent6 } = useContext(Context6)
  const { demo8ModalShow, demo8SearchObj, demo8FormData } = content6Data
  const [ form ] = Form.useForm();

  const modalClose =()=> {
    dispatchContent6({
      type: Constant6.UPDATE_DATA,
      data: { demo8ModalShow: false, demo8SearchObj: null, demo8FormData: null }
    })
    form.resetFields()
  }

  useMemo(()=>{
    if(demo8FormData){
      form.setFieldsValue({
        id: demo8FormData.id,
        name: demo8FormData.name,
        code: demo8FormData.code,
        description: demo8FormData.description,
      })
    }
  },[demo8FormData])

  const handleSubmit = (values) => {
    // console.log('values', values)
    values.privilegeIds = []
    setModalLoading(true)
    if(!values.id){
      Http({
        method: 'POST',
        url: `http://localhost:3000/role/save`,
        data: values
      }).then(res=>{
        setModalLoading(false)
        const { status } = res
        if( 200 === status ){
          message.success('提交数据成功')
          fetchTblList(demo8SearchObj)
          modalClose()
        }
      }).catch(err=>{
        setModalLoading(false)
        message.error('提交数据失败')
        console.log('err', err)
      })
    }else {
      Http({
        method: 'PATCH',
        url: `http://localhost:3000/role/${values.id}`,
        data: values
      }).then(res=>{
        setModalLoading(false)
        const { status } = res
        if( 200 === status ){
          message.success('提交数据成功')
          fetchTblList(demo8SearchObj)
          modalClose()
        }
      }).catch(err=>{
        setModalLoading(false)
        message.error('提交数据失败')
        console.log('err', err)
      })
    }
  }

  return (
    <Modal
      title={'Role Modal'}
      open={demo8ModalShow}
      width={800}
      footer={null}
      maskClosable={false}
      onCancel={()=>modalClose()}
    >
      <Wrapper>
        <Spin spinning={modalLoading}>
          <Form
            labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
            scrollToFirstError name={'roleForm'} form={form}
            onFinish={handleSubmit}
          >
            <Item name={'id'} className={'item-hidden'} />
            <Item
              name={'name'} label={'角色名'}
              rules={[{ required: true, message: '请录入角色名' }]}
            >
              <Input allowClear={true} style={{width: '80%'}} placeholder={'请录入角色名'} maxLength={20} />
            </Item>
            <Item
              name={'code'} label={'Code'}
              rules={[{ required: true, message: '请录入Code' }]}
            >
              <Input allowClear={true} style={{width: '80%'}} placeholder={'请录入Code'} maxLength={20} />
            </Item>
            <Item name={'description'} label={'角色描述'}>
              <Input.TextArea
                allowClear={true}
                style={{width: '80%'}}
                placeholder={'角色描述'}
                maxLength={200}
              />
            </Item>
            <div className={'btn-group'}>
              <div>
                <Button
                  onClick={()=>modalClose()}
                  style={{marginRight: '10px'}}
                >取消</Button>
                <Button type={'primary'} htmlType={'submit'}>提交</Button>
              </div>
            </div>
          </Form>
        </Spin>
      </Wrapper>
    </Modal>
  )
}

const Wrapper = styled('div')`
  .btn-group {
    padding: 0 15%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 20px;
  }
`

export default Demo8Modal
