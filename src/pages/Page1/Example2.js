import React, { useState } from 'react'
import UnitContent from "../components/UnitContent";

export default function Example2(){
    const [age, setAge] = useState(18)
    const [work, setWork] = useState('developer')
    const [gender, setGender] = useState(0)
    return(
        <UnitContent title={'Example 2'}>
            <div>
                <div>Age: {age}</div>
                <div><input type="number" onChange={(val)=>setAge(val?.target?.value)}/><button onClick={()=>setAge(18  )}>Reset</button></div>
            </div>
            <div>
                <div>Work: {work}</div>
                <div><input type="text" onChange={(val)=>setWork(val?.target?.value)}/><button onClick={()=>setWork('developer')}>Reset</button></div>
            </div>
            <div>
                <div>Gender: {0 === gender? '男': '女'}</div>
                <div>
                    <input type="radio" name="ggender" id="male" onClick={()=>setGender(0)}/>男<br/>
                    <input type="radio" name="ggender" id="female" onClick={()=>setGender(1)}/>女<br/>
                    <button onClick={()=>setGender(0)}>Reset</button>
                </div>
            </div>
        </UnitContent>
    )
}
