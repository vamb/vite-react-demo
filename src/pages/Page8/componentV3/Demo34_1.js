import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Button } from "antd";
import pdfFile from "./react_file/ppp2.pdf";
import pdf2 from "./react_file/pdf2.pdf";

const Demo34_1 = () => {
  const [ isPdf1, setIsPdf1 ] = useState(true)

  return (
    <UnitContent title={'34_1'}>
      <Wrapper>
        <Button type={'primary'} onClick={()=>setIsPdf1(!isPdf1)}>change pdf (iframe)</Button>
        <iframe src={`${isPdf1? pdfFile: pdf2}#view=FitH`} width={800} height={800} />
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
`

export default Demo34_1
