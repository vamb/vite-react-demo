import React, { createContext, useReducer } from 'react'
import P11Constant from "./P11Constant";

export const P11Context = createContext({})

const initData = {}

const reducer = (state, action) => {
  switch (action?.type) {
    case P11Constant.UPDATE_DATA:
      return {...state, ...action.data}
    default:
      return state
  }
}

export const P11Content = props => {
  const [ p11Data, dispatchP11Data ] = useReducer(reducer, initData)
  return (
    <P11Context.Provider value={{p11Data, dispatchP11Data}}>
      {props.children}
    </P11Context.Provider>
  )
}
