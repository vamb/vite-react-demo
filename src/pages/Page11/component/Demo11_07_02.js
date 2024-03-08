import React, { useState, useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { generateRandomArr } from '@/utils/utils'

const Demo11_07_02 = () => {
  const [ randomArr, setRandomArr ] = useState([])
  const [ restArr, setRestArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  const quickSort =(arr, start, end)=> {
    // 如果区域内的数字少于 2 个，退出递归
    if (start < end){
      // 将数组分区，并获得中间值的下标
      let middle = partition(arr, start, end);
      // 对左边区域快速排序
      quickSort(arr, start, middle - 1);
      // 对右边区域快速排序
      quickSort(arr, middle + 1, end);
    }
  }

  // 将 arr 从 start 到 end 分区，左边区域比基数小，右边区域比基数大，然后返回中间值的下标
  const partition =( arr, start, end) => {
    // 取第一个数为基数
    let pivot = arr[start];
    // 从第二个数开始分区
    let left = start + 1;
    // 右边界
    let right = end;
    // left、right 相遇时退出循环
    while (left < right) {
      // 找到第一个大于基数的位置
      while (left < right && arr[left] <= pivot) {
        left++;
      }
      // 交换这两个数，使得左边分区都小于或等于基数，右边分区大于或等于基数
      if (left !== right) {
        // exchange(arr, left, right);
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        right--;
      }
    }
    // 如果 left 和 right 相等，单独比较 arr[right] 和 pivot
    if (left === right && arr[right] > pivot) {
      right--;
    }
    // 将基数和中间数交换
    if (right !== start) {
      // exchange(arr, start, right);
      const temp = arr[start]
      arr[start] = arr[right]
      arr[right] = temp
    }
    // 返回中间值的下标
    return right;
  }

  const exchange =(arr, i, j)=> {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  useEffect(()=>{
    if(randomArr?.length) {
      let tempArr = []
      for(let i=0;i<randomArr.length;i++) {
        tempArr.push(randomArr[i])
      }
      quickSort(tempArr, 0, tempArr.length-1)
      setRestArr(tempArr)
    }
  },[randomArr])

  return (
    <UnitContent title={'11_07_02 快速排序 V2 速度更快'}>
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

export default Demo11_07_02
