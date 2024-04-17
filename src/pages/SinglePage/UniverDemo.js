import UniverSheet from './UniverSheet'
import { useRef, useState } from 'react';
import SheetConstant from "./UniverSheet/SheetConstant";
import { Button } from 'antd'

const UniverDemo = () => {
  const univerRef = useRef();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="bar">
        <Button
          type={'primary'}
          onClick={() => {
            console.log(univerRef.current?.getData());
          }}
        >get sheet data</Button>
      </div>
      <UniverSheet style={{ flex: 1 }} ref={univerRef} data={SheetConstant.DEFAULT_WORKBOOK_DATA} />
    </div>
  );
}

export default UniverDemo
