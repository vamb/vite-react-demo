import React, { useContext } from 'react'
import { ColorContext } from './Color'

function ShowArea(){
  const { color } = useContext(ColorContext)
  console.log('ShowArea color', color)
  return (
    <div className={'one-line'}>
      <h2>字体颜色</h2>
      <h2 style={{color: color}}>{`${color}`}</h2>
    </div>
  )
}

export default ShowArea
