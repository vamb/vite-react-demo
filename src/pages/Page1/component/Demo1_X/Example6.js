import React, { useReducer } from 'react'
import UnitContent from "../../../components/UnitContent";
import { Button } from "antd";

export default function Example6(){

  const [ count, dispatch ] = useReducer((state, action)=>{
    switch (action){
      case 'add':
        return state + 1;
      case 'sub':
        if(state - 1 >= 0) {
          return state - 1;
        }else{
          return 0
        }
      default:
        return state;
    }
  }, 0)

  return(
    <UnitContent title={'Example6'} label={'useReducer 简单应用'}>
      <div className={'one-line'}>
        <h2 className={'label-area'}>Count: {count}</h2>
        <Button type={'primary'} onClick={()=>{dispatch('sub')}}>Sub</Button>
        <Button type={'primary'} onClick={()=>{dispatch('add')}}>Add</Button>
      </div>
    </UnitContent>
  )
}
