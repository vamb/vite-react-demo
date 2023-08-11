import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import axios from "axios";
import { Button } from 'antd'

const Demo9 = () => {

  const reqApi = async () => {
    const rest =  await axios.get(
      'http://127.0.0.1:8080/http://10.0.49.126:801/api/team/list',{
        headers: {
          'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJWYW1ia25pZ2h0MTEiLCJjcmVhdGVkIjoxNjg4MzcyMTI2MzUxLCJleHAiOjE2ODgzOTAxMjZ9.AXlAPkOJ1ATtd_ZQlz5tYO2COdPMJKqvz4UysaLMJ4hiQUZvxHtvpsua7mMjugxR5o7WaeJOm-MBaz1BkOwsSw'
        }
      })
    console.log('reqApi rest', rest)
  }

  useEffect(()=>{
    reqApi()
  },[])

  return (
    <UnitContent title={'Demo9 cors-anywhere 通过外部启动的服务转发请求'}>
      <Wrapper>
        <Button type={'primary'}>Click</Button>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo9
