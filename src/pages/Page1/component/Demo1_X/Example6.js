import React, { useReducer } from 'react'
import UnitContent from "../../../components/UnitContent";
import { Button } from "antd";

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
    <UnitContent title={'Example6'} label={'useReducer 简单应用'} disBtn={true}>
      <div className={'one-line'}>
        <h2 className={'label-area'}>Count: {count}</h2>
        <Button type={'primary'} onClick={()=>{dispatch('add')}}>Add</Button>
        <Button type={'primary'} onClick={()=>{dispatch('sub')}}>Sub</Button>
      </div>
    </UnitContent>
  )
}
