import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '../../utils/utils'

const Demo11_05 =()=> {
  const [ randomArr, setRandomArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
  }

  const chooseSort = (arr) => {
    if(Array.isArray(arr) && arr.length>0) {
      for(let i = 0; i< arr.length - 1;i++) {
        let min_idx = i
        for(let j= i+1; j< arr.length;j++){
          if(arr[j] < arr[min_idx]) {
            min_idx = j
          }
        }
        if( min_idx !== i) {
          const temp = arr[i]
          arr[i] = arr[min_idx]
          arr[min_idx] = temp
        }
      }
    }
    return arr
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  return (
    <UnitContent title={'11_05 选择排序'} disBtn={false}>
      <Wrapper>
        <div>{`Random Array: ${randomArr}`}</div>
        <div>{`Random Array after: ${chooseSort(randomArr)}`}</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Demo11_05
