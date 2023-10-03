import React, {useEffect, useState} from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { generateRandomArr } from '../../utils/utils'

const Demo11_09_2 = () => {
  const [ randomArr, setRandomArr ] = useState([])

  const divideSort = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
      /**
       * 假定
       * left = 200;
       * right = 250;
       * 则left+right =450 > 255，此时已经溢出了
       * 0001 1100 0010 因为只能存储8位，实际1100 0010=194
       * mid = (left+right)/2;  //此时实际mid=194/2
       * mid = left+(right-left)/2; //200+(250-200)/2 = 225
       * 此方法绝对不会溢出，最好写成这样
       */
      let mid = left + ((right - left) >> 1)
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