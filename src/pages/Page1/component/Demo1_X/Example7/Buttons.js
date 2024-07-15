import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './Color'
import { Button } from "antd";

function Buttons() {
    const { dispatch } = useContext(ColorContext)
    return(
        <div className={'one-line'}>
            <Button type={'primary'} onClick={()=>{dispatch({type: UPDATE_COLOR, color: 'red'})}}>红色</Button>
            <Button type={'primary'} onClick={()=>{dispatch({type: UPDATE_COLOR, color: 'yellow'})}}>黄色</Button>
            <Button type={'primary'} onClick={()=>{dispatch({type: UPDATE_COLOR, color: 'green'})}}>绿色</Button>
        </div>
    )
}

export default Buttons
