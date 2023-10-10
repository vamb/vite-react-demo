import React, { useState, useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { generateRandomArr } from '../../utils/utils'

/**
 * 对于TopK问题
 * 1. 我们一般先创建一个长度为K的小根堆
 * 2. 然后我们将后面的每一个数和这个小根堆的首位进行大小比较
 * 3. 若 nums[k-1+i] > nums[0]
 * 4. 则 nums[0] = nums[k-1+i] => smallSift(nums, 0, k-1)
 */
const k = 4
const Demo11_08_02 = () => {
  const [ randomArr, setRandomArr ] = useState([])
  const [ actionArr, setActionArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  useEffect(()=>{
    if(Array.isArray(randomArr) && randomArr.length>0){
      const newArr = JSON.parse(JSON.stringify(randomArr))
      setActionArr(topKHeapSort(newArr, k))
    }
  },[randomArr])

  /**
   * 这个是小根堆的算法
   * @param arr
   * @param low
   * @param high
   */
  const smallSift = (arr, low, high) => {
    let i = low // 最开始指向的根节点
    let j = 2 * i + 1 // 左子节点
    const temp = arr[low] // 要移动的数据
    while (j <= high && low !== high) {
      if(j + 1 <= high && arr[j+1] < arr[j]) { //如果右子节点没有越界，且右子节点比左子节点小
        j = j + 1 // 确定要比较的是右子节点
      }
      if(arr[j] < temp) { // 如果更小的子节点更小
        arr[i] = arr[j] // 这个更小的子节点往上移动
        i = j
        j = 2 * i + 1
      }else { // 要比较的数据比两个子节点都小，那么这个数据就放在当前位置，循环结束
        arr[i] = temp
        break
      }
    }
    arr[i] = temp
  }

  const topKHeapSort = (nums, k) => {
    const topKArr = []
    for(let i=0;i<k;i++) {
      topKArr.push(nums[i])
    }
    const arrLength = topKArr.length
    const lastPNodeIdx = arrLength%2===0? arrLength/2-1: (arrLength-3)/2

    // 建堆
    for(let i=lastPNodeIdx;i>=0;i--) {
      smallSift(topKArr, i, arrLength-1)
    }

    // 然后一个个循环排序过去
    for(let i = k;i<nums.length;i++) {
      if(nums[i] > topKArr[0]){
        topKArr[0] = nums[i]
        smallSift(topKArr, 0, arrLength-1)
      }
    }

    for(let i= arrLength-1;i>=0;i--) {
      const temp = topKArr[0]
      topKArr[0] = topKArr[i]
      topKArr[i] = temp
      smallSift(topKArr, 0, i-1) // 因为最后一位已经被原列表的第一个赋值了，且不需要在排序了，顾而是 i-1
    }
    return topKArr
  }

  return (
    <UnitContent title={'11_08_2 TopK 问题'}>
      <Wrapper>
        <div>{`Random Array: ${randomArr}`}</div>
        <div>{`TopK ${k} after: ${actionArr}`}</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Demo11_08_02
