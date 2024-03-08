import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '@/utils/utils'

const numCount = 10 // 一共有几个数字
const max_num = 100 // 最大的数字是多少

const Demo11_11 = () => {
  const [ randomArr, setRandomArr ] = useState([])
  const [ restArr, setRestArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(numCount, max_num)
    setRandomArr(randomArr)
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  const bucketSort = (nums, n=3, max_num) => {
    const buckets = []
    for(let i=0;i<n;i++) {
      buckets.push([])
    }

    for(let idx = 0;idx<nums.length;idx ++) {
      const bucketIdx = parseInt(nums[idx] / parseInt(max_num / n))

      buckets[bucketIdx].push(nums[idx])
      const temp = nums[idx]
      let j = buckets[bucketIdx].length - 2
      while(j>=0 && buckets[bucketIdx][j] > temp) {
        buckets[bucketIdx][j + 1] = buckets[bucketIdx][j]
        j--
      }
      buckets[bucketIdx][j + 1] = temp
    }

    const tempArr = []
    for(let i=0;i<buckets.length;i++) {
      for(let j = 0;j<buckets[i].length;j++) {
        tempArr.push(buckets[i][j])
      }
    }
    return tempArr
  }

  useEffect(()=>{
    if(Array.isArray(randomArr) && randomArr.length>0) {
      const newArr = bucketSort(randomArr, 3, 100)
      setRestArr(newArr)
    }
  },[randomArr])

  return (
    <UnitContent title={'11_11 桶排序'}>
      <Wrapper>
        <div>{`Random Array: ${randomArr}`}</div>
        <div>{`Random Array after: ${restArr}`}</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Demo11_11
