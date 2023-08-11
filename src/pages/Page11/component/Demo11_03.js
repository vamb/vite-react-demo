import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Checkbox, Button, Form, Radio } from "antd";
import P11Constant from "../P11Constant";

const { Item } = Form

/**
 * Tips:
 * 1. 任务申请的处理器数量只能是1、 2、 4、 8。
 * 2. 编号0-3的处理器处于⼀个链路，编号4-7的处理器处于另外⼀个链路。
 * 3. 处理器编号唯⼀，且不存在相同编号处理器。
 *
 * 亲和性调度原则：
 * -如果申请处理器个数为1，则选择同⼀链路，剩余可⽤的处理器数量为1个的最佳，其次是剩余3个
 * 的为次佳，然后是剩余2个，最后是剩余4个。
 * -如果申请处理器个数为2，则选择同⼀链路剩余可⽤的处理器数量2个的为最佳，其次是剩余4个，
 * 最后是剩余3个。
 * -如果申请处理器个数为4，则必须选择同⼀链路剩余可⽤的处理器数量为4个。
 * -如果申请处理器个数为8，则申请节点所有8个处理器。
 */

const Demo11_03 = () => {
  const [ form ] = Form.useForm();
  const [ reqCount, setReqCount ] = useState(0)
  const [ availableCores, setAvailableCores ] = useState([])
  const [ restArr, setRestArr ] = useState([])

  const handleCancel =()=> {
    setReqCount(0)
    setAvailableCores([])
    setRestArr([])
    form.resetFields()
  }


  const handleSubmit =(values)=> {
    setReqCount(values['reqCount'])
    setAvailableCores(values['availableCores'])
  }

  const splitGroup = (coreArr) =>{
    const arr1 = []
    const arr2 = []
    if(Array.isArray(coreArr) && coreArr.length>0) {
      coreArr.map(item=>{
        if(
          P11Constant.DEMO_11_0_GROUP_MAP.GROUP1.value ===
          P11Constant.DEMO_11_0_CORES_MAP[item]?.groupKey
        ) {
          arr1.push(item)
        }else {
          arr2.push(item)
        }
      })
    }
    return { arr1: arr1, arr2: arr2 }
  }

  const checkAvailable = (availableArr1, availableArr2) => {
    if (availableArr1.length > 0 || availableArr2.length >0) {
      return { availableArr1: availableArr1, availableArr2: availableArr2 }
    }else {
      return null
    }
  }

  const handleReq = (coreArr, expectLengthArr) => {
    const { arr1, arr2 } = splitGroup(coreArr)
    let availableArr1 = []
    let availableArr2 = []
    for(let i=0;i<expectLengthArr.length;i++){
      if (arr1.length === expectLengthArr[i]) {
        availableArr1 = arr1
      }
      if (arr2.length === expectLengthArr[i]) {
        availableArr2 = arr2
      }
      const restObj = checkAvailable(availableArr1, availableArr2)
      if(restObj){
        return restObj
      }
    }
  }

  // 排列组合
  const formatArr = (arr, coreCount) => {

  }

  const handle11_03_0_Algorithm = (coreArr, coreCount) => {
    let rest = null
    switch (coreCount) {
      case P11Constant.DEMO_11_0_REQ_CORE_COUNT_OPPO.ONE.value:
        rest = handleReq(coreArr, [1, 3, 2, 4])
        break
      case P11Constant.DEMO_11_0_REQ_CORE_COUNT_OPPO.TWO.value:
        rest = handleReq(coreArr, [2, 4, 3])
        break
      case P11Constant.DEMO_11_0_REQ_CORE_COUNT_OPPO.FOUR.value:
        rest = handleReq(coreArr, [4])
        break
      case P11Constant.DEMO_11_0_REQ_CORE_COUNT_OPPO.EIGHT.value:
        if(coreArr?.length === 8){
          rest = coreArr
        }
        break
      default:
        break
    }
    const tempArr = []
    if(rest?.availableArr1?.length > 0){
      tempArr.push(rest?.availableArr1)
    }
    if(rest?.availableArr2?.length > 0){
      tempArr.push(rest?.availableArr2)
    }
    setRestArr(tempArr)
  }

  useEffect(()=>{
    if(availableCores?.length>0 && reqCount !== 0) {
      handle11_03_0_Algorithm(availableCores, reqCount)
    }
  },[reqCount, availableCores])

  useEffect(()=>{
    handleCancel()
  },[])

  return (
    <UnitContent title={'11_03'}>
      <Wrapper>
        <div className={'param-content'}>
          <Form
            labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
            scrollToFirstError name={'computerCoresAIForm'} form={form}
            onFinish={handleSubmit}
          >
            <Item
              name={'availableCores'} label={'可用核心编号'}
              rules={[{ required: true, message: '请选择可用核心编号' }]}
            >
              <Checkbox.Group>
                {
                  P11Constant.DEMO_11_0_CORES.map((item, idx)=>{
                    return <Checkbox value={item.value} key={`core-opt-${idx}`}>{item.label}</Checkbox>
                  })
                }
              </Checkbox.Group>
            </Item>
            <Item
              name={'reqCount'} label={'申请的核心数量'}
              rules={[{ required: true, message: '请选择申请核心量' }]}
            >
              <Radio.Group>
                {
                  P11Constant.DEMO_11_0_REQ_CORE_COUNT_OPTS.map((item, idx) => {
                    return <Radio value={item.value} key={`req-core-count-opt-${idx}`}>{item.label}</Radio>
                  })
                }
              </Radio.Group>
            </Item>
            <div className={'btn-group'}>
              <Button onClick={()=>handleCancel()} >取消</Button>
              <Button type={'primary'} htmlType={'submit'}>确定</Button>
            </div>
          </Form>
        </div>
        <div className={'display-content'}>
          {`reqCount: ${reqCount}`}<br />
          {`resultCoreArr: ${JSON.stringify(restArr)}`}
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .param-content {
    width: 40%;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    & > :not(:last-child) {
      margin-right: 10px;
    }
  }
`

export default Demo11_03
