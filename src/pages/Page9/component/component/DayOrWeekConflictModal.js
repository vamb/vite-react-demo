import React, { useContext } from 'react'
import styled from "styled-components";
import { Modal, Button } from 'antd'
import { PageContext } from "../../PageContent";
import PageConstant from "../../PageConstant";

const DayOrWeekConflictModal = () => {
  const { pageData, dispatchPageData } = useContext(PageContext)
  const { conflictModalVisible, conflictObj, conflictType } = pageData

  const modalClose = () =>{
    dispatchPageData({
      type: PageConstant.UPDATE_DATA,
      data: { conflictObj: null, conflictModalVisible: false, conflictType: null }
    })
  }

  const handleSubmit = () => {
    dispatchPageData({
      type: PageConstant.UPDATE_DATA,
      data: {...conflictObj, ...{ conflictObj: null, conflictModalVisible: false, conflictType: null } }
    })
  }

  return (
    <Modal
      title={'规则冲突'}
      visible={conflictModalVisible}
      width={600}
      footer={null}
      maskClosable={false}
      onCancel={()=> modalClose()}
    >
      <Wrapper>
        <div><strong>日期&nbsp;&nbsp;</strong>和<strong>&nbsp;&nbsp;星期&nbsp;&nbsp;</strong>同时只能有一个被配置，而且必须要有一个被配置过。</div>
        <div>
          {
            PageConstant.CONFLICT.DAY_2_WEEK === conflictType &&
            1 === conflictObj?.weekRadioValue &&
            <span>是否强制将<strong>&nbsp;&nbsp;周&nbsp;&nbsp;</strong>的规则修改为 （<strong>通配符</strong>）</span>
          }
          {
            PageConstant.CONFLICT.DAY_2_WEEK === conflictType &&
            2 === conflictObj?.weekRadioValue &&
            <span>是否强制将<strong>&nbsp;&nbsp;周&nbsp;&nbsp;</strong>的规则修改为 （<strong>不指定</strong>）</span>
          }
          {
            PageConstant.CONFLICT.WEEK_2_DAY === conflictType &&
            1 === conflictObj?.dayRadioValue &&
            <span>是否强制将<strong>&nbsp;&nbsp;日期&nbsp;&nbsp;</strong>的规则修改为 （<strong>通配符</strong>）</span>
          }
          {
            PageConstant.CONFLICT.WEEK_2_DAY === conflictType &&
            2 === conflictObj?.dayRadioValue &&
            <span>是否强制将<strong>&nbsp;&nbsp;日期&nbsp;&nbsp;</strong>的规则修改为 （<strong>不指定</strong>）</span>
          }
        </div>
        <div className={'btn-group'}>
          <Button style={{marginRight: '10px'}} onClick={()=>modalClose()}>取消</Button>
          <Button type={'primary'} onClick={()=>handleSubmit()}>确定</Button>
        </div>
      </Wrapper>
    </Modal>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  & > div {
    margin: 5px 0;
    font-size: 16px
  }
  .btn-group {
    display: flex;
    justify-content: end;
  }
`

export default DayOrWeekConflictModal
