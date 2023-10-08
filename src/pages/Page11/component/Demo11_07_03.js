import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '../../utils/utils'

const Demo11_07_03 = () => {
  const [ randomArr, setRandomArr ] = useState([])
  const [ restArr, setRestArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  useEffect(()=>{
    if(randomArr?.length) {
      let tempArr = []
      for(let i=0;i<randomArr.length;i++) {
        tempArr.push(randomArr[i])
      }
      shellSort(tempArr)
      setRestArr(tempArr)
    }
  },[randomArr])

  /**
   * 希尔排序
   */
  const shellSort = nums => {
    // 间隔序列，在希尔排序中我们称之为增量序列
    for (let gap = (nums.length >> 1); gap > 0; gap = (gap >> 1)) {
      // 从 gap 开始，按照顺序将每个元素依次向前插入自己所在的组
      for (let i = gap; i < nums.length; i++) {
        // currentNumber 站起来，开始找位置
        let temp = nums[i];
        // 该组前一个数字的索引
        let j = i - gap;
        while (j >= 0 && temp < nums[j]) {
          // 向后挪位置
          nums[j + gap] = nums[j];
          j = j - gap;
        }
        // currentNumber 找到了自己的位置，坐下
        nums[j + gap] = temp;
      }
    }
  }

  return (
    <UnitContent title={'11_07_03 希尔排序 - 快速排序的变种 O(n^1.4) ~ O(n^7/6) 之间的时间复杂度'}>
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

export default Demo11_07_03
