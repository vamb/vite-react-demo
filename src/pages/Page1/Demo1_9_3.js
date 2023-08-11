import React, { useState, useMemo } from 'react'
import UnitContent from "../components/UnitContent";
import styled from "styled-components";
import { Form, InputNumber } from "antd";
import moment from "moment";

// isPrime 用于计算传入的参数是否为质数
function isPrime(n){
  console.log('isPrime n', n)
  const max = Math.ceil(Math.sqrt(n));
  if (n === 2) {
    return true;
  }
  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }
  return true;
}

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
    }
  }, []);

  return time;
}

const Demo1_9_3 = () => {
  const [selectedNum, setSelectedNum] = useState(20);

  // const allPrimes = [];
  // for (let counter = 2; counter < selectedNum; counter++) {
  //   if (isPrime(counter)) {
  //     allPrimes.push(counter);
  //   }
  // }

  const allPrimes = React.useMemo(() => {
    const result = [];
    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        result.push(counter);
      }
    }
    return result;
  }, [selectedNum]);


  // `time` 是一个状态变量，每秒钟变化一次，所以它总是与当前时间同步
  const time = useTime();

  return (
    <UnitContent title={'Demo1_9_3 用useMemo将数组的组装方发包起来，只要数据数据不变，这个方法返回的数据就不会变'}>
      <Wrapper>
        <Form.Item label={'当前时间'}>
          {time? moment(time).format('YYYY MM DD HH:mm:ss'): null}
        </Form.Item>
        <Form.Item label={'Your number'}>
          <InputNumber
            style={{width: '120px'}}
            value={selectedNum}
            onChange={val=>{
              // 为了防止电脑烧起来，我们限制一下传入的值最大为 100k
              let num = Math.min(100_000, Number(val));

              setSelectedNum(num);
            }}
          />
        </Form.Item>
        <Form.Item label={`There are ${allPrimes.length} prime(s) between 1 and ${selectedNum}`}>
          <label>{allPrimes.join(', ')}</label>
        </Form.Item>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo1_9_3
