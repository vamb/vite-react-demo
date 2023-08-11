import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Button, Space } from 'antd'
import axios from "axios";
// import corsReq from 'cors-anywhere'

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

const Demo10 = () => {

  const original = async () => {
    const rest =  await axios.get(
      'http://10.0.49.126:801/api/team/list',{
        headers: {
          'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJWYW1ia25pZ2h0MTEiLCJjcmVhdGVkIjoxNjg4MzcyMTI2MzUxLCJleHAiOjE2ODgzOTAxMjZ9.AXlAPkOJ1ATtd_ZQlz5tYO2COdPMJKqvz4UysaLMJ4hiQUZvxHtvpsua7mMjugxR5o7WaeJOm-MBaz1BkOwsSw',
          "Access-Control-Allow-Origin": '*'
        }
      })
    console.log('original rest', rest)
  }

  const newFun = () => {
    // corsReq.createServer({
    //   originWhitelist: [], // Allow all origins
    //   requireHeader: ['origin', 'x-requested-with'],
    //   removeHeaders: ['cookie', 'cookie2']
    // }).listen(port, host, function() {
    //   console.log('Running CORS Anywhere on ' + host + ':' + port);
    // });
  }

  return (
    <UnitContent title={'Demo10 '}>
      <Wrapper>
        <Space>
          <Button type={'primary'} onClick={()=>original()}>Original Click</Button>
          <Button type={'primary'} onClick={()=>newFun()}>New Click</Button>
        </Space>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo10
