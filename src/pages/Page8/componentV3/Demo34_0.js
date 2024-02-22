import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Button } from "antd";
import FileViewer from 'react-file-viewer';
import { Document, Page, pdfjs } from "react-pdf";

import excelFile from './react_file/xlsx.xlsx'
import pptFile from './react_file/pptx.pptx'
import pngFile from './react_file/2023_roadMap.png'
import pdfFile from './react_file/ppp2.pdf'
import jpgFile from './react_file/ToledoIldefonso_ZH-CN4507206651_1920x1080.jpg'
import docxFile from './react_file/docx.docx'
import docx2File from './react_file/docx2.docx'
import txtFile from './react_file/txt.txt'
import pdf2 from './react_file/pdf2.pdf'
import docFile from './react_file/doc.doc'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const Demo34_0 = () => {
  const [ fileType, setFileType ] = useState(null)
  const [ isPdf1, setIsPdf1 ] = useState(true)
  const [ isDocx1, setIsDocx1 ] = useState(true)
  const [ randomKey, setRandomKey ] = useState(Math.random())
  const [ numPages, setNumPages ] = useState(0)
  const [ pageNumber, setPageNumber ] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  useEffect(()=>{
    setRandomKey(Math.random())
  },[isDocx1])

  return (
    <>
      <UnitContent title={'34_0'}>
        <Wrapper>
          <Button type={'primary'} onClick={()=>setIsPdf1(!isPdf1)}>change pdf (iframe)</Button>
          <iframe src={isPdf1? pdfFile: pdf2} width={800} height={800} />
          <Button type={'primary'} onClick={()=>setIsDocx1(!isDocx1)}>change docx（react-file-viewer）</Button>
          <div style={{width: 800, height: 800, overflowY: "auto", backgroundColor: 'lightyellow'}} key={randomKey}>
            <FileViewer
              styled={{width: 800, height: 800}}
              fileType='docx'//文件类型
              filePath={isDocx1? docxFile: docx2File} //文件地址（后台给返的二进制流也可以）
              // onError={this.onError.bind(this)} //函数[可选]：当文件查看器在获取或呈现请求的资源时发生错误时将调用的函数。在这里可以传递日志记录实用程序的回调。
              errorComponent={console.log("出现错误")} //[可选]：发生错误时呈现的组件，而不是react-file-viewer随附的默认错误组件。
              unsupportedComponent={console.log("不支持")} //[可选]：在不支持文件格式的情况下呈现的组件。
            />
          </div>
          <Document
            file={'./react_file/ppp2.pdf'}
            loading={'加载中...'} options={options}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Wrapper>
      </UnitContent>
    </>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
`

export default Demo34_0
