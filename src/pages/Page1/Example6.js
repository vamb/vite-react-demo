import React, { useReducer } from 'react'
import UnitContent from "../components/UnitContent";

export default function Example6(){
  const [count, dispatch] = useReducer((state, action)=>{
    switch (action){
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state;
    }
  }, 0)
  return(
    <UnitContent title={'Example 6'}>
      <h2>Count: {count}</h2><br/>
      <button onClick={()=>{dispatch('add')}}>Add</button>
      &nbsp;&nbsp;
      <button onClick={()=>{dispatch('sub')}}>Sub</button>
    </UnitContent>
  )
}
