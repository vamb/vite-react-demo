import React, { useEffect, useState } from 'react'
import UnitContent from "../../components/UnitContent";

export default function TwoUseEffect(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('count useEffect display')
    },[count])

    useEffect(()=>{
        console.log('useEffect display')
    })
    return(
        <UnitContent title={'TwoUseEffect'}>
            {`TwoUseEffect ${count}`}<br/>
            <button onClick={()=>{
                let temp = count
                setCount(++temp)
            }}>click</button>
        </UnitContent>
    )
}
