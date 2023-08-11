import React, { createContext, useReducer } from 'react'

export const SelfContentContext = createContext({})

export const UPDATE_COUNT = 'update_count'

const initState = {
    count: 0
}

const reducer = (state, action) =>{
    console.log('SelfCountContent state', state)
    console.log('SelfCountContent action', action)
    switch(action?.type){
        case UPDATE_COUNT:
            return {...state, ...action.data}
        default:
            return state
    }
}

export const SelfCountContent = (props) =>{
    const [countData, countDispatch] = useReducer(reducer, initState)
    return(
        <SelfContentContext.Provider value={{countData: countData, countDispatch: countDispatch}}>
            {props.children}
        </SelfContentContext.Provider>
    )
}