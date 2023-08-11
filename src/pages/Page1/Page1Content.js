import React, { createContext, useReducer } from "react";
import Page1Constant from "./Page1Constant";

export const Page1Context = createContext({})

const initData = {}

const reducer = (state, action) => {
  switch (action?.type) {
    case Page1Constant.UPDATE_DATA:
      return {...state, ...action.data}
    default:
      return state
  }
}

export const Page1Content = props => {
  const [ page1Data, page1Dispatch ] = useReducer(reducer, initData)
  return (
    <Page1Context.Provider value={{page1Data, page1Dispatch}}>
      {props.children}
    </Page1Context.Provider>
  )
}
