import React, { useContext } from 'react'
import { ColorContext } from './Color'

function ShowArea(){
    const { color } = useContext(ColorContext)
    console.log('ShowArea color', color)
    return (
        <div style={{color: color}}><h2>字体颜色 {color}</h2></div>
    )
}

export default ShowArea