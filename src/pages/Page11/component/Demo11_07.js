import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '../../utils/utils'

/**
 * 时间复杂度 O(n*logn)
 */
const Demo11_07 = () => {
  const [ randomArr, setRandomArr ] = useState([])
  const [ restArr, setRestArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  // 先归为，将Arr[left] 作为基准，arr[left] ~ arr[right] 中所有比基准小的在基准左侧，大的在右侧
  const partition = (arr, left, right) => {
    const midVal = arr[left]
    let currMove = 1 // 1=>right 动， 0=>left dong
    while(left !== right) {
      if(currMove) {
        if(arr[right] < midVal) {
          arr[left] = arr[right]
          currMove = 0
        }else {
          right --
        }
      }else{
        if(arr[left] > midVal) {
          arr[right] = arr[left]
          currMove = 1
        }else {
          left ++
        }
      }
    }
    arr[left] = midVal
    return left
  }

  const quickSort = (arr, left, right) => {
    if(left < right) {
      const mid = partition(arr, left, right) // 确定了基准后，再对基准左右两部分分别作递归，知道全部排序完成
      quickSort(arr, left, mid-1)
      quickSort(arr, mid+1, right)
    }
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
    <UnitContent title={'11_7 快速排序'} disBtn={false}>
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

export default Demo11_07
