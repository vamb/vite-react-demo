import React, { createContext, useReducer } from "react";
import Page2Constant from "./Page2Constant";

export const Page2Context = createContext({})

const initData = {}

const reducer = (state, action) => {
  switch (action?.type) {
    case Page2Constant.UPDATE_DATA:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export const Page2Content = props => {
  const [ page2Data, page2Dispatch ] = useReducer(reducer, initData)
  return (
    <Page2Context.Provider value={{ page2Data, page2Dispatch }}>
      {props.children}
    </Page2Context.Provider>
  )
}
