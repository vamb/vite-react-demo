import React, { useEffect, useState, useMemo, useCallback } from 'react'
import UnitContent from "../../components/UnitContent";

export default function PracticeMemo(){
  const [count, setCount] = useState(0)

  useEffect(()=>{
    // console.log('this is useEffect console count', count)
  },[count])

  return(
    <UnitContent title={'PracticeMemo'}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{fontSize: '2rem'}}>{count}</div>
        <div>
          <button
            onClick={()=>{
              let temp = count
              setCount(++temp)
            }}
          >add</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={()=>{
              let temp = count
              setCount(--temp)
            }}
          >sub</button>
        </div>
      </div>
    </UnitContent>
  )
}
