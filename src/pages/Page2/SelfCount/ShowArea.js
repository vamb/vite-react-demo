import React,{ useContext } from "react"
import { SelfContentContext } from './SelfCountContent'

export default function ShowArea(){
    const { countData } = useContext(SelfContentContext)
    console.log('ShowArea countData', countData)
    return(
        <div>{countData?.count}</div>
    )
}
  