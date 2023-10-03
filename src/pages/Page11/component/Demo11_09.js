import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '../../utils/utils'

/**
 * 归并排序
 * 假设现在的列表分两段有序，如何将其合成为一个有序列表
 *
 * 时间复杂度：O(n*logn)
 * 空间复杂度：O(n)
 *
 * 1) 将列表越分越小，直至分成一个元素
 * 2) 终止条件：一个元素是有序的
 * 3) 合并：将两个有序列表归并，列表越来越大
 */
const Demo11_09 = () => {
  const [ randomArr, setRandomArr ] = useState([])
  const [ restArr, setRestArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    const restArr = JSON.parse(JSON.stringify(randomArr))
    mergeSort(restArr, 0, restArr.length-1)
    setRandomArr(randomArr)
    setRestArr(restArr)
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  // 一次归并操作
  const merge = (arr, low, mid, high) => {
    let i = low
    let j = mid + 1
    let temp = []
    while ( i <= mid && j <= high ) { // 只要左右两边都有数
      if(arr[i] < arr[j]) {
        temp.push(arr[i])
        i++
      }else{
        temp.push(arr[j])
        j++
      }
    }
    // ============== 执行完成后，肯定有一部分没有数了

    while (i<=mid) {
      temp.push(arr[i])
      i++
    }
    while (j<=high) {
      temp.push(arr[j])
      j++
    }
    for(let idx=low;idx<high+1;idx++) {
      arr[idx] = temp[idx-low]
    }
  }

  const mergeSort = (arr, low, high) =>{
    if(low < high) { // 至少有两个元素，递归
      let mid = parseInt((low + high) / 2)
      mergeSort(arr, low, mid)
      mergeSort(arr, mid+1, high)
      merge(arr, low, mid, high)
    }
  }

  return (
    <UnitContent title={'11_09 归并排序'} disBtn={false}>
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

export default Demo11_09
