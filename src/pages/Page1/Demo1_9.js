import React, { useState } from "react";
import UnitContent from "../components/UnitContent";
import styled from "styled-components";
import { Form, InputNumber } from "antd";

// isPrime 用于计算传入的参数是否为质数
function isPrime(n){
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

const Demo1_9 = () => {
  const [selectedNum, setSelectedNum] = useState(20);

  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  return (
    <UnitContent
      title={'Demo1_9'}
      label={'useMemo 目标方法只用来判断当前数字是否为质数'}
      disBtn={true}
    >
      <Wrapper>
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

export default Demo1_9
