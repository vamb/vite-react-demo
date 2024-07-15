import React, { useState, useContext, createContext } from 'react'
import UnitContent from "../../../components/UnitContent";
import { Button } from "antd";

const CountContext = createContext({})

function Counter(){
  const obj = useContext(CountContext)
  console.log('example5 Counter count', obj)
  return (
    <div>{`useContext result: ${obj?.num}`}</div>
  )
}

export default function Example5(){
  const [count, setCount] = useState(0)
  return(
    <UnitContent title={'Example5'} disBtn={true} label={'useContext 简单应用'}>
      <div className={'flex-col'}>
        <div className={'one-line'}>
          <div className={'label-area'}>{`you clicked ${count} times.`}</div>
          <Button type={'primary'} onClick={()=>setCount(count+1)}>Click add</Button>
        </div>
        <div className={'one-line'}>
          <CountContext.Provider value={{num: count}}>
            <Counter />
          </CountContext.Provider>
        </div>
      </div>
    </UnitContent>
  )
}
