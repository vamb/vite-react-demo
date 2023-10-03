import React, {useEffect, useState} from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { generateRandomArr } from '../../utils/utils'

const Demo11_09_2 = () => {
  const [ randomArr, setRandomArr ] = useState([])

  const divideSort = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
      let mid = (left + right) >>> 1;
      if(nums[mid] < target) {
        left = mid + 1;
      }else if(nums[mid] > target) {
        right = mid - 1;
      }else {
        return mid;
      }
    }
    return -1;
  };

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  return (
    <UnitContent title={'11_09_2 二分查找法'}>
      <Wrapper>
        <div>{`Random Array: ${randomArr}`}</div>
        <div>{`Find ${randomArr[4]}: ${divideSort(randomArr, randomArr[4])}`}</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Demo11_09_2