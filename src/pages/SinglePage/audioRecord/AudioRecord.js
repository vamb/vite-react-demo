import React, { useState } from "react"
import { Button, Container, Statistic, Form, Divider, Checkbox, Segment } from 'semantic-ui-react';
import styled from "styled-components";
import Recorder from "js-audio-recorder";
import lamejs from "lamejs"

import Player from "js-audio-recorder/src/player/player";
import { encodeWAV } from 'js-audio-recorder/src/transform/transform';

import Translate from './Translate'

import 'semantic-ui-css/semantic.min.css';

let recorder = null;
let playTimer = null;
let oCanvas = null;
let ctx = null;
let drawRecordId = null;
let pCanvas = null;
let pCtx = null;
let drawPlayId = null;

const AudioRecord = () => {
  const [ sampleBit, setSampleBig ] = useState(16)
  const [ sampleRate, setSampleRage ] = useState(16000)
  const [ numChannel, setNumChannel ] = useState(1)
  const [ compiling, setCompiling ] = useState(false)
  const [ isRecording, setIsRecording ] = useState(false)
  const [ duration, setDuration ] = useState(0)
  const [ fileSize, setFileSize ] = useState(0)
  const [ vol, setVol ] = useState(0)

  const changeSampleBit = val => {
    setSampleBig(val)
  }

  const changeSampleRate = val => {
    setSampleRage(val)
  }

  const changeNumChannel = val => {
    setNumChannel(val)
  }

  const changeCompile = val => {
    setCompiling(val)
  }

  const collectData = () => {
    return { sampleBit, sampleRate, numChannel, compiling }
  }

  const modifyOption = () => {
    if(recorder) {
      const config = collectData()
      recorder?.setOption(config)
      recorder = null
    }
  }

  // const

  return (
    <Wrapper>AudioRecord</Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default AudioRecord
