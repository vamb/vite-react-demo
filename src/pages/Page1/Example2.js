import React, { useState } from 'react'
import UnitContent from "../components/UnitContent";
import { Input, Button } from "antd";

export default function Example2(){
  const [ age, setAge ] = useState(18)
  const [ work, setWork ] = useState('developer')
  const [ gender, setGender ] = useState(0)

  return(
    <UnitContent title={'Example2 最简单的 useState'}>
      <div className={'flex-col'}>
        <div className={'one-line'}>
          <div className={'label-area'}>Age: {age}</div>
          <div className={'one-line'}>
            <Input type="number" onChange={(val)=>setAge(val?.target?.value)} />
            <Button onClick={()=>setAge(18  )}>Reset</Button>
          </div>
        </div>
        <div className={'one-line'}>
          <div className={'label-area'}>Work: {work}</div>
          <div className={'one-line'}>
            <Input type="text" onChange={(val)=>setWork(val?.target?.value)} />
            <Button onClick={()=>setWork('developer')}>Reset</Button>
          </div>
        </div>
        <div className={'one-line'}>
          <div className={'label-area'}>Gender: {0 === gender? '男': '女'}</div>
          <div className={'one-line'}>
            <Input type="radio" name="ggender" id="male" onClick={()=>setGender(0)}/>男<br/>
            <Input type="radio" name="ggender" id="female" onClick={()=>setGender(1)}/>女<br/>
            <Button onClick={()=>setGender(0)}>Reset</Button>
          </div>
        </div>
      </div>
    </UnitContent>
  )
}
