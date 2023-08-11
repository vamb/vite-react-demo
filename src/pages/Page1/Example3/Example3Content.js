import React, { useEffect, useState } from 'react'

export default function Example3Content (){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log('Example3Content main useEffect')
    },[])
    return (
        <div>
            <div>{`Example3Content ${count}`}</div><br/>
            <div><button onClick={()=>setCount(count+1)}>add count</button></div>
        </div>
    )
}

