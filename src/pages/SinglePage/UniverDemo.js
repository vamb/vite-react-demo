import UniverSheet from './UniverSheet'
import { useRef, useState } from 'react';
import SheetConstant from "./UniverSheet/SheetConstant";

const UniverDemo = () => {
  const univerRef = useRef();

  return (
    <UniverSheet style={{ flex: 1 }} ref={univerRef} data={SheetConstant.DEFAULT_WORKBOOK_DATA} />
  );
}

export default UniverDemo
