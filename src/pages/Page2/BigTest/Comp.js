import React, { useState, memo, useCallback } from 'react';
import UnitContent from "../../components/UnitContent";

function Expensive({ onClick, name }) {
  console.log('Expensive渲染');
  return <div style={{color: '#1890ff', cursor: 'pointer'}} onClick={onClick}>{name}</div>
}

const MemoExpensive = memo(Expensive);

function Cheap({ onClick, name }) {
  console.log('cheap渲染');
  return <div style={{color: '#1890ff', cursor: 'pointer'}} onClick={onClick}>{name}</div>
}

export default function Comp() {
  const [dataA, setDataA] = useState(0);
  const [dataB, setDataB] = useState(0);
  const [num, setNum] = useState(0)

  const onClickA = () => {
    setDataA(o => o + 1);
  };

  const onClickB = useCallback(() => {
    setDataB(o => o + 1);
  }, []);

  return (
    <UnitContent title={'Comp'}>
      <div>
        <div><span onClick={()=>setNum(num+1)}>add: </span><span>{num}</span></div>
        <Cheap onClick={onClickA} name={`组件Cheap：${dataA}`}/>
        <MemoExpensive onClick={onClickB} name={`组件Expensive：${dataB}`} />
      </div>
    </UnitContent>
  )
}
