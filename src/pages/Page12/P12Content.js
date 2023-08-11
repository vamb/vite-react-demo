import React, { createContext, useReducer } from "react";
import P12Constant from "./P12Constant";

export const P12Context = createContext({})

const initData = {}

const reducer = (state, action) => {
  switch (action?.type) {
    case P12Constant.UPDATE_DATA:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export const P12Content = props => {
  const [ p12Data, dispatchP12Data ] = useReducer(reducer, initData)
  return (
    <P12Context.Provider value={{p12Data, dispatchP12Data}}>
      {props.children}
    </P12Context.Provider>
  )
}
