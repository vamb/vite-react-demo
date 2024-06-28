import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import useMediaRecorder from "./Demo9_5_Hook";
import { Button } from "antd";

const Demo9_5 = () => {
  const { mediaUrl, base64, startRecord, resumeRecord, pauseRecord, stopRecord } = useMediaRecorder();
  console.log('mediaUrl', mediaUrl)
  console.log('base64', base64)

  return (
    <UnitContent title={'9_5'}>
      <Wrapper>
        <h1>react 录音</h1>

        <audio src={mediaUrl} controls />

        <div className={'one-line'}>
          <Button type={'primary'} onClick={startRecord}>开始</Button>
          <Button type={'primary'} onClick={pauseRecord}>暂停</Button>
          <Button type={'primary'} onClick={resumeRecord}>恢复</Button>
          <Button type={'primary'} onClick={stopRecord}>停止</Button>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .one-line {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 1rem;
  }
`

export default Demo9_5
