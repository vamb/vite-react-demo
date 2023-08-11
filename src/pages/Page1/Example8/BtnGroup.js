import React, { useContext } from "react";
import { ColorContext, UPDATE_COLOR } from './ColorContent'

export default function BtnGroup(){
    const { dispatchColor } = useContext(ColorContext)
    return(
        <div>
            <button
                onClick={()=>dispatchColor({type: UPDATE_COLOR, data: {color: 'red'}})}
            >Red</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
                onClick={()=>dispatchColor({type: UPDATE_COLOR, data: {color: 'green'}})}
            >Green</button>
        </div>
    )
}