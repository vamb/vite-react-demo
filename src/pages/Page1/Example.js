import React, { useState } from 'react';
import UnitContent from "../components/UnitContent";

export default function Example(){
    const [count, setCount] = useState(0);
    return(
        <UnitContent title={'Example 1'}>
            <div>{count}</div><br />
            <button onClick={()=>{
                setCount(count+1)
            }}>click add</button>
            <button onClick={()=>setCount(count-1)}>click sub</button>
        </UnitContent>
    )
}
