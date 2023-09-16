import React, { createContext, useReducer } from 'react'
import BFDagConstant from "./BFDagConstant";

export const BFDagContext = createContext({})

const initData = {}

const reducer = (state, action) => {
  switch (action?.type) {
    case BFDagConstant.UPDATE_DATA:
      return { ...state, ...action?.data}
    default:
      return state
  }
}

export const BFDagContent = props => {
  const [ bfdData, bfdDispatch ] = useReducer(reducer, initData)
  return (
    <BFDagContext.Provider value={{bfdData, bfdDispatch}}>
      {props.children}
    </BFDagContext.Provider>
  )
}
