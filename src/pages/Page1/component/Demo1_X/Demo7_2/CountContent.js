import React, { createContext, useReducer } from "react";
import CountConstant from "./CountConstant";

const CountContext = createContext({})

function reducer(state, action) {
  switch(action?.type) {
    case CountConstant.ACT_TYPE.PLUS:
      return state + (action?.payload || 0)
    case CountConstant.ACT_TYPE.MINUS:
      let newState = state - (action?.payload || 0)
      return newState >= 0? newState: 0
    default:
      return state
  }
}

const initCount = 0

export const CountContent = props => {
  return (
    <CountContext.Provider value={{}}>
      {props.children}
    </CountContext.Provider>
  )
}
