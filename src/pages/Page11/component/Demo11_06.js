import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '@/utils/utils'

const Demo11_06 = () => {
  const [ randomArr, setRandomArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
  }

  /**
   * 标准插入排序的写法
   * @param arr
   * @returns {*}
   */
  const insertSortV2 = arr => {
    for(let i=1;i<arr.length;i++) {
      const temp = arr[i]
      let j = i - 1
      while(arr[j] > temp && j >= 0){
        arr[j + 1] = arr[j]
        j--
      }
      arr[j+1] = temp
    }
    return arr
  }

  const insertSort = arr => {
    let restArr = [arr?.[0]]
    if(Array.isArray(arr) && arr.length >0) {
      for(let i=1;i< arr.length;i++) {
        let newArr = []
        let isPushed = false
        for(let j=0;j<restArr.length;j++) {
          if(arr[i] < restArr[j] && !isPushed){
            newArr.push(arr[i])
            isPushed = true
          }
          newArr.push(restArr[j])
        }
        if(!isPushed) {
          newArr.push(arr[i])
        }
        restArr = newArr
      }
    }
    return restArr
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  return (
    <UnitContent title={'11_06 插入排序'} disBtn={false}>
      <Wrapper>
        <div>{`Random Array: ${randomArr}`}</div>
        <div>{`Random Array after: ${insertSortV2(randomArr)}`}</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Demo11_06
