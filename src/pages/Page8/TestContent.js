import React, { createContext, useReducer } from 'react'
import TestConstant from "./TestConstant";

export const TestContext = createContext({})

const initData = {}

const reducer = (state, action) =>{
  switch (action?.type){
    case TestConstant.UPDATE_DATA:
      return {...state, ...action.data}
    default:
      return state
  }
}

export const TestContent = props =>{
  const [ reactTestData, reactTestDispatch ] = useReducer(reducer, initData)
  return(
    <TestContext.Provider value={{reactTestData, reactTestDispatch}}>
      {props.children}
    </TestContext.Provider>
  )
}
