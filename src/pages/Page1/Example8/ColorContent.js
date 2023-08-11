import React, { createContext, useReducer } from 'react'

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'update_color'

const initObj = { color: 'blue' }

const reducer = (state, action) =>{
    console.log('888 state, action', state, action)
    switch(action?.type){
        case UPDATE_COLOR:
            return {...state, ...action?.data}
        default:
            return state
    }
}

export const ColorContent = (props)=>{
    const [colorData, dispatchColor] = useReducer(reducer, initObj)
    return(
        <ColorContext.Provider value={{colorData, dispatchColor}}>
            {props.children}
        </ColorContext.Provider>
    )
}