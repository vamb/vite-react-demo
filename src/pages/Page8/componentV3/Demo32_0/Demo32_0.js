import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../../components/UnitContent";
import { Button } from 'antd'
import TurndownService from 'turndown';

const Demo32_0 = () => {


  const handleBtnClick = () => {
    const turndownService = new TurndownService();
    const dom = document.getElementsByClassName('test-dom')?.[0]
    console.log('dom', dom, dom.outerHTML)
    const markdown = turndownService.turndown(dom.outerHTML);
    console.log('markdown =>', markdown)
  }

  return (
    <UnitContent title={'32-0'}>
      <Wrapper>
        <div className={'test-holder'}>
          <div className={'test-dom'}>
            <div className={'left'}>
              <div>this is test text</div>
              <div>this is test text2</div>
            </div>
            <div className={'right'}>
              <div>this is test text3</div>
              <div>this is test text4</div>
            </div>
          </div>
        </div>
        <Button type={'primary'} onClick={()=>handleBtnClick()}>btn</Button>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 10px;
  .test-dom {
    background-color: blueviolet;
    color: #fff;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 10px;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  .test-dom:hover {
    border: 1px solid #fff;
  }
`

export default Demo32_0
