import React, { useState } from "react"
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import { Button, message } from "antd"
import Recorder from 'js-audio-recorder';
import {Link} from "react-router-dom";

const Demo9_6 = () => {
  const [ recoder, setRecoder ] = useState(new Recorder({
    sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
    sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
    numChannels: 1, // 声道，支持 1 或 2， 默认是1
    // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
  }))

   //开始录音
  const startRecordAudio = (recorder) => {
    Recorder.getPermission().then(
      () => {
        console.log("开始录音");
        recorder.start(); // 开始录音
      },
      (error) => {
        message.info("请先允许该网页使用麦克风");
        console.log(`${error.name} : ${error.message}`);
      }
    );
  }

  //停止录音
  const stopRecordAudio = (recorder) => {
    console.log("停止录音", recorder, recorder?.stop);
    recorder?.stop();
  }

  const destroyRecordAudio = recoder => {

  }

  //播放录音
  function playRecordAudio(recorder) {
    console.log("播放录音", recorder);
    recorder?.play();
  }

  const requestApi = blob => {
    let reader = new FileReader();
    reader.onload = function(event) {
      let base64Data = event.target.result.split(',')[1];
      fetch('http://192.168.15.6:5000/ASR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify({ audio_base64: base64Data })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };
    reader.readAsDataURL(blob);
  }

  //获取PCB录音数据
  function getPCBRecordAudioData(recorder) {
    const pcmBlob = recorder?.getPCMBlob();
    requestApi(pcmBlob)
    console.log(pcmBlob);
  }

  //获取WAV录音数据
  function getWAVRecordAudioData(recorder) {
    const wavBlob = recorder?.getWAVBlob();
    console.log(wavBlob);
  }

  //下载PCB录音文件
  function downloadPCBRecordAudioData(recorder) {
    recorder?.downloadPCM("badao");
  }

  //下载WAV录音文件
  function downloadWAVRecordAudioData(recorder) {
    recorder?.downloadWAV("badao");
  }

  return (
    <UnitContent title={'9_6'}>
      <Wrapper>
        <div className={'one-line'}>
          <Button type="button" onClick={()=>startRecordAudio(recoder)}>开始录音</Button>
          {/*<h3>录音时长：{{ recorder?.duration?.toFixed(4) }}</h3>*/}
          <Button type="button" onClick={()=>stopRecordAudio(recoder)}>停止录音</Button>
          <Button type="button" onClick={()=>playRecordAudio(recoder)}>播放录音</Button>
          <Button type="button" onClick={()=>getPCBRecordAudioData(recoder)}>获取PCB录音数据</Button>
          <Button type="button" onClick={()=>downloadPCBRecordAudioData(recoder)}>下载PCB录音文件</Button>
          <Button type="button" onClick={()=>getWAVRecordAudioData(recoder)}>获取WAV录音数据</Button>
          <Button type="button" onClick={()=>downloadWAVRecordAudioData(recoder)}>下载WAV录音文件</Button>
        </div>
        <div>
          <Link
            target = "_blank" title={'JS Audio Record'}
            to='/single/audioRecord'
          >JS Audio Record</Link>
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
    gap: 1rem;
  }
`

export default Demo9_6
