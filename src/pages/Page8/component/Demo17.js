import React, { memo, useState, useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Button } from 'antd'

const Demo17 = memo(()=>{
  const [ timeLabel, setTimeLabel ] = useState('YYYY-MM-DD HH:mm:ss')
  const [ btnLabel, setBtnLabel ] = useState('TestBtn')

  const fN = (num) =>{
    return num < 10? '0' + num: num
  }

  const setupTimeData =()=>{
    const current = new Date()
    const displayLabel = `${fN(current.getFullYear())}-${fN(current.getMonth() + 1)}-${fN(current.getDate())} ${fN(current.getHours())}:${fN(current.getMinutes())}:${fN(current.getSeconds())}`
    setTimeLabel(displayLabel)
  }

  useEffect(()=>{
    const demo17Interval = window.setInterval(setupTimeData, 1000)
    return ()=>{
      window.clearInterval(demo17Interval)
    }
  },[])


  return(
    <UnitContent unitTitle={'Demo17 setInterval demo btn loading'}>
      <Wrapper>
        <div>{`Interval TimeLabel: ${timeLabel}`}</div>
        <div>
          <Button
            type={'primary'}
            disabled={!btnLabel.startsWith("T")}
            onClick={()=>{
              let time = 3
              let disableInterval = window.setInterval(function (){
                if(time === 0){
                  clearInterval(disableInterval)
                  setBtnLabel('TestBtn')
                }else{
                  setBtnLabel(`还剩下  ${time} 秒`)
                  time--
                }
              },1000)
            }}
          >{btnLabel}</Button>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`  
  display: flex;
  div {
    margin: 10px;
    border: 1px solid #E6CEAC;
    padding: 10px;
  }
`

export default Demo17
