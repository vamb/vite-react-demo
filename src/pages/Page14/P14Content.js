import React, { createContext, useReducer } from 'react'
import P14Constant from "./P14Constant";

export const P14Context = createContext({})

const initData = {

}

const reducer = (state, action) => {
  switch (action?.type) {
    case P14Constant.UPDATE_DATA:
      return {...state, ...action.data}
    default:
      return state
  }
}

export const P14Content = props => {
  const [ p14Data, dispatchP14Data ] = useReducer(reducer, initData)
  return (
    <P14Context.Provider value={{p14Data, dispatchP14Data}}>
      {props.children}
    </P14Context.Provider>
  )
}
