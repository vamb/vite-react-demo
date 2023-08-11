import React, { createContext, useReducer } from 'react'
import Constant6 from "./Constant6";

export const Context6 = createContext({})

const initData = {
  demo8ModalShow: false,
  demo8SearchObj: null,
  demo8FormData: null
}

const reducer = (state, action) =>{
  switch (action?.type){
    case Constant6.UPDATE_DATA:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export const Content6 = props => {
  const [ content6Data, dispatchContent6 ] = useReducer(reducer, initData)
  return (
    <Context6.Provider value={{content6Data, dispatchContent6}}>
      {props.children}
    </Context6.Provider>
  )
}
