import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

let chooseStart = false
let isMouseDown = false
let selectArr = []

const Demo30_2 = () => {
  const [ divCount, setDivCount ] = useState(15)
  // const [ chooseStart, setChooseStart ] = useState(false)

  const divArr = []
  for(let i=0;i<divCount;i++) {
    divArr.push(<div className={'div-unit'} key={`div-count-unit-${i}`} />)
  }

  const arrAdd = (idx) => {
    selectArr.push(idx)
  }

  const arrMinus = idx => {
    const tempArr = []
    selectArr.map(obj=>{
      if(obj !== idx){
        tempArr.push(obj)
      }
    })
    selectArr = tempArr
  }

  const handleSort = arr =>{
    return arr.sort((a, b)=>a-b)
  }

  useEffect(()=>{
    const arr = document.querySelectorAll('.div-unit')

    for(let i=0;i<arr.length;i++) {
      arr[i].addEventListener('mousedown', (e)=>{
        isMouseDown = true
        if('lightgreen' !== e.target.style.backgroundColor) {
          e.target.style.backgroundColor = 'lightgreen'
          chooseStart = true
          arrAdd(i)
        }else {
          e.target.style.backgroundColor = '#fff'
          chooseStart = false
          arrMinus(i)
        }
        document.addEventListener('mouseup', ()=>{
          chooseStart = false
          isMouseDown = false
          selectArr = handleSort(selectArr)
          console.log('selectArr', selectArr)
        })
      })

      arr[i].addEventListener('mouseenter', (e)=>{
        if(isMouseDown && chooseStart) {
          e.target.style.backgroundColor = 'lightgreen'
          arrAdd(i)
        }else if(isMouseDown && !chooseStart){
          e.target.style.backgroundColor = '#fff'
          arrMinus(i)
        }
      })
    }
  },[])

  return (
    <UnitContent title={'30_2 拖动选择'}>
      <Wrapper>
        {divArr}
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  & > :last-child {
    border-right: 1px solid #000;
  }
  .div-unit {
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
  }
`

export default Demo30_2