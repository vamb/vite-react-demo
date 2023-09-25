import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '../../utils/utils'

const Demo11_04 = () => {
  const [ randomArr, setRandomArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
  }

  const bubbleSortArr = arr => {
    if(Array.isArray(arr) && arr.length>0) {
      for(let i=0;i<arr.length-1;i++) {
        for(let j=i+1;j<arr.length;j++) {
          if(arr[i] > arr[j]){
            const temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
          }
        }
      }
      return arr
    }
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  return (
    <UnitContent title={'11_04 冒泡排序'} disBtn={false}>
      <Wrapper>
        <div>{`Random Array: ${randomArr}`}</div>
        <div>{`Random Array after: ${bubbleSortArr(randomArr)}`}</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Demo11_04
