import React, { useContext } from "react";
import { ColorContext } from "../Example8/ColorContent";

export default function ShowArea(){
    const colorObj = useContext(ColorContext)
    console.log('ShowArea colorObj', colorObj)
    const { colorData } = colorObj
    console.log('ShowArea colorData', colorData)
    return(
        <div style={{color: colorData?.color}}>{`Color: ${colorData?.color}`}</div>
    ) 
}