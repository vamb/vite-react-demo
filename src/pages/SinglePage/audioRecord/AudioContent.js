import React, { createContext, useReducer } from "react";
import AudioConstant from "./AudioConstant";

export const AudioContext = createContext({})

const initData = {

}

const reducer = (state, action) => {
  switch (action?.type) {
    case AudioConstant.UPDATE_DATA:
      return {...state, ...action.data}
    default:
      return state
  }
}

export const AudioContent = props => {
  const [ audioData, audioDispatch ] = useReducer(reducer, initData)
  return (
    <AudioContext.Provider value={{ audioData, audioDispatch }}>
      {props.children}
    </AudioContext.Provider>
  )
}