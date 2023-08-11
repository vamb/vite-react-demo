import React, { useState, useContext, createContext } from 'react'
import UnitContent from "../components/UnitContent";

const CountContext = createContext()

function Counter(){
  const obj = useContext(CountContext)
  console.log('example5 Counter count', obj)
  return (
    <h2>{obj?.num}</h2>
  )
}

export default function Example5(){
  const [count, setCount] = useState(0)
  return(
    <UnitContent title={'Example 5'}>
      <div>{`you clicked ${count} times.`}<br/></div>
      <button onClick={()=>setCount(count+1)}>Click add</button><br/>
      <span>=================================</span><br/>
      <CountContext.Provider value={{num: count}}>
        <Counter />
      </CountContext.Provider>
    </UnitContent>
  )
}
