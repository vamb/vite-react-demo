import React, { createContext, useReducer } from 'react'
import P10Constant from "./P10Constant";

export const P10Context = createContext({})

const initData = {

}

const reducer = (state, action) => {
  switch (action?.type) {
    case P10Constant.UPDATE_DATA:
      return {...state, ...action.data}
    default:
      return state
  }
}

export const P10Content = props => {
  const [ p10Data, dispatchP10Data ] = useReducer(reducer, initData)
  return (
    <P10Context.Provider value={{p10Data, dispatchP10Data}}>
      {props.children}
    </P10Context.Provider>
  )
}
