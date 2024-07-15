import React, { useState, useEffect } from "react"
import { Button, Container, Statistic, Form, Divider, Checkbox, Segment } from 'semantic-ui-react';
import styled from "styled-components";
import Recorder from "js-audio-recorder";
import lamejs from "lamejs"

import Player from "js-audio-recorder/src/player/player";
import { encodeWAV } from 'js-audio-recorder/src/transform/transform';

import Translate from './Translate'

import 'semantic-ui-css/semantic.min.css';
import AudioConstant from "@/pages/SinglePage/audioRecord/AudioConstant";

let recorder = null;
let playTimer = null;
let oCanvas = null;
let ctx = null;
let drawRecordId = null;
let pCanvas = null;
let pCtx = null;
let drawPlayId = null;

const AudioRecord = () => {
  const [ sampleBit, setSampleBit ] = useState(16)
  const [ sampleRate, setSampleRage ] = useState(16000)
  const [ numChannel, setNumChannel ] = useState(1)
  const [ compiling, setCompiling ] = useState(false)
  const [ isRecording, setIsRecording ] = useState(false) // 是否正在录音
  const [ duration, setDuration ] = useState(0)
  const [ fileSize, setFileSize ] = useState(0)
  const [ vol, setVol ] = useState(0)

  const changeSampleRate = val => {
    setSampleRage(val)
  }

  const changeSampleBit = val => {
    setSampleBit(val)
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

  const startRecord = () => {
    clearPlay();

    const config = collectData();

    if (!recorder) {
      recorder = new Recorder(config);

      recorder.onprogress = (params) => {
        // console.log(recorder.duration);
        // console.log(recorder.fileSize);

        setDuration(params.duration.toFixed(5))
        setFileSize(params.fileSize)
        setVol(params.vol.toFixed(2))

        // 此处控制数据的收集频率
        if (config.compiling) {
          console.log('音频总数据：', params.data);
        }
      }

      recorder.onplay = () => {
        console.log('%c回调监听，开始播放音频', 'color: #2196f3')
      }
      recorder.onpauseplay = () => {
        console.log('%c回调监听，暂停播放音频', 'color: #2196f3')
      }
      recorder.onresumeplay = () => {
        console.log('%c回调监听，恢复播放音频', 'color: #2196f3')
      }
      recorder.onstopplay = () => {
        console.log('%c回调监听，停止播放音频', 'color: #2196f3')
      }
      recorder.onplayend = () => {
        console.log('%c回调监听，音频已经完成播放', 'color: #2196f3')
        // 播放结束后，停止绘制canavs
        stopDrawPlay();
      }

      // 定时获取录音的数据并播放
      config.compiling && (playTimer = setInterval(() => {
        if (!recorder) {
          return;
        }

        let newData = recorder.getNextData();
        if (!newData.length) {
          return;
        }
        let byteLength = newData[0].byteLength
        let buffer = new ArrayBuffer(newData.length * byteLength)
        let dataView = new DataView(buffer)

        // 数据合并
        for (let i = 0, iLen = newData.length; i < iLen; ++i) {
          for (let j = 0, jLen = newData[i].byteLength; j < jLen; ++j) {
            dataView.setInt8(i * byteLength + j, newData[i].getInt8(j))
          }
        }

        // 将录音数据转成WAV格式，并播放
        let a = encodeWAV(dataView, config.sampleRate, config.sampleRate, config.numChannels, config.sampleBits)
        let blob = new Blob([ a ], { type: 'audio/wav' });

        blob.arrayBuffer().then((arraybuffer) => {
          Player.play(arraybuffer);
        });
      }, 3000))
    } else {
      recorder.stop();
    }

    recorder.start().then(() => {
      console.log('开始录音');
    }, (error) => {
      console.log(`异常了,${error.name}:${error.message}`);
    });
    // 开始绘制canvas
    drawRecord();
  }

  const drawRecord = () => {
    // 用requestAnimationFrame稳定60fps绘制
    drawRecordId = requestAnimationFrame(drawRecord);

    // 实时获取音频大小数据
    let dataArray = recorder.getRecordAnalyseData(),
      bufferLength = dataArray.length;

    // 填充背景色
    ctx.fillStyle = 'rgb(200, 200, 200)';
    ctx.fillRect(0, 0, oCanvas.width, oCanvas.height);

    // 设定波形绘制颜色
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0, 0, 0)';

    ctx.beginPath();

    let sliceWidth = oCanvas.width * 1.0 / bufferLength, // 一个点占多少位置，共有bufferLength个点要绘制
      x = 0;          // 绘制点的x轴位置

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 128.0;
      let y = v * oCanvas.height / 2;

      if (i === 0) {
        // 第一个点
        ctx.moveTo(x, y);
      } else {
        // 剩余的点
        ctx.lineTo(x, y);
      }
      // 依次平移，绘制所有点
      x += sliceWidth;
    }

    ctx.lineTo(oCanvas.width, oCanvas.height / 2);
    ctx.stroke();
  }

  const drawPlay = () => {
    // 用requestAnimationFrame稳定60fps绘制
    drawPlayId = requestAnimationFrame(drawPlay);

    // 实时获取音频大小数据
    let dataArray = recorder.getPlayAnalyseData(),
      bufferLength = dataArray.length;

    // 填充背景色
    pCtx.fillStyle = 'rgb(200, 200, 200)';
    pCtx.fillRect(0, 0, pCanvas.width, pCanvas.height);

    // 设定波形绘制颜色
    pCtx.lineWidth = 2;
    pCtx.strokeStyle = 'rgb(0, 0, 0)';

    pCtx.beginPath();

    let sliceWidth = pCanvas.width * 1.0 / bufferLength, // 一个点占多少位置，共有bufferLength个点要绘制
      x = 0;          // 绘制点的x轴位置

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 128.0;
      let y = v * pCanvas.height / 2;

      if (i === 0) {
        // 第一个点
        pCtx.moveTo(x, y);
      } else {
        // 剩余的点
        pCtx.lineTo(x, y);
      }
      // 依次平移，绘制所有点
      x += sliceWidth;
    }

    pCtx.lineTo(pCanvas.width, pCanvas.height / 2);
    pCtx.stroke();
  }

  const pauseRecord = () => {
    if (recorder) {
      recorder.pause();
      console.log('暂停录音');
      drawRecordId && cancelAnimationFrame(drawRecordId);
      drawRecordId = null;
    }
  }
  const resumeRecord = () => {
    recorder && recorder.resume();
    console.log('恢复录音');
    drawRecord();
  }
  const endRecord = () => {
    recorder && recorder.stop();
    console.log('结束录音');
    drawRecordId && cancelAnimationFrame(drawRecordId);
    drawRecordId = null;
  }
  const playRecord = () => {
    recorder && recorder.play();
    drawRecordId && cancelAnimationFrame(drawRecordId);
    drawRecordId = null;
    console.log('播放录音');
    recorder && drawPlay();
    // setInterval(() => {
    //     recorder.getPlayTime()
    // }, 500)
  }
  const pausePlay = () => {
    stopDrawPlay();
    recorder && recorder.pausePlay();
    console.log('暂停播放');
  }
  const resumePlay = () => {
    recorder && recorder.resumePlay();
    console.log('恢复播放');
    drawPlay();
  }
  const clearPlay = () => {
    if (playTimer) {
      clearInterval(playTimer);
      playTimer = null;
    }
    if (drawRecordId) {
      cancelAnimationFrame(drawRecordId);
      drawRecordId = null;
    }
    stopDrawPlay();
  }
  const stopDrawPlay= () => {
    drawPlayId && cancelAnimationFrame(drawPlayId);
    drawPlayId = null;
  }
  const stopPlay = () => {
    clearPlay();
    recorder && recorder.stopPlay();
    console.log('停止播放');
    stopDrawPlay();
  }
  const destroyRecord = () => {
    clearPlay();
    if (recorder) {
      recorder.destroy().then(() => {
        console.log('销毁实例');
        recorder = null;
        drawRecordId && cancelAnimationFrame(drawRecordId);
        stopDrawPlay();
      });
    }
  }
  const downloadPCM = () => {
    if (recorder) {
      console.log('pcm: ', recorder.getPCMBlob());
      recorder.downloadPCM();
    }
  }
  const downloadWAV = () => {
    if (recorder) {
      console.log('wav: ', recorder.getWAVBlob());
      recorder.downloadWAV();
    }
  }

  const playMP3 = () => {
    if (recorder) {
      const mp3Blob = convertToMp3(recorder.getWAV());
      const reader = new FileReader();

      reader.onload = function() {
        Player?.play(this.result);
      }

      reader.readAsArrayBuffer(mp3Blob)

      console.log(mp3Blob);
    }
  }

  const downloadMP3 = () => {
    if (recorder) {
      const mp3Blob = convertToMp3(recorder.getWAV());

      recorder.download(mp3Blob, 'recorder', 'mp3');
    }
  }

  // playOGG = () => {
  //     if (recorder) {
  //         const mp3Blob = convertToMp3(recorder.getWAV());
  //         const oggBlob = convertToOgg(mp3Blob);
  //         const reader = new FileReader();

  //         reader.onload = function() {
  //             Player.play(this.result);
  //         }

  //         reader.readAsArrayBuffer(oggBlob)
  //         console.log(oggBlob)
  //         // recorder.download(oggBlob, 'recorder', 'ogg');
  //     }
  // }
  // downloadOGG = () => {}

  const uploadAudio = (e) => {
    e.target.files[0].arrayBuffer().then((arraybuffer) => {
      Player?.play(arraybuffer);
    });
  }

  useEffect(() => {
    oCanvas = document.getElementById('canvas');
    if(oCanvas) {
      ctx = oCanvas.getContext("2d");
    }
    pCanvas = document.getElementById('playChart');
    if(pCanvas) {
      pCtx = pCanvas.getContext("2d");
    }
  },[])

  return (
    <Wrapper>
      <Container className="App" style={{ margin: '20px 0' }}>
        <Form>
          <Form.Group widths='equal'>
            <Form.Select
              fluid label='采样率'
              value={ sampleRate }
              options={ AudioConstant.sampleRateOptions }
              onChange={ changeSampleRate }
            />
            <Form.Select
              fluid label='采样位数'
              value={ sampleBit }
              options={ AudioConstant.sampleBitOptions }
              onChange={ changeSampleBit }
            />
            <Form.Select
              fluid label='声道数'
              value={numChannel}
              options={AudioConstant.numChannelOptions}
              onChange={changeNumChannel}
            />
          </Form.Group>
          <Form.Field>
            <Checkbox
              label='边录边转(播)' disabled checked={ compiling } toggle
              onChange={ changeCompile }
            />
          </Form.Field>
        </Form>
        <Divider />
        <div>
          <Button primary onClick={modifyOption}>重置配置</Button>
        </div>
        <Divider />
        <div>
          <Button primary onClick={startRecord}>录音开启</Button>
          <Button primary onClick={pauseRecord}>暂停</Button>
          <Button primary onClick={resumeRecord}>恢复</Button>
          <Button primary onClick={endRecord}>录音停止</Button>
        </div>
        <Divider />
        <Statistic.Group widths='three'>
          <Statistic>
            <Statistic.Value>{ duration }</Statistic.Value>
            <Statistic.Label>录音时长(秒)</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{ fileSize }</Statistic.Value>
            <Statistic.Label>录音大小(字节)</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{ vol }</Statistic.Value>
            <Statistic.Label>当前录音音量百分比(%)</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <div>
          <span>录音：</span>
          <canvas id="canvas" />
          <span>播放：</span>
          <canvas id="playChart" />
        </div>
        <Divider />
        <div>
          <Button onClick={ playRecord }>录音播放</Button>
          <Button onClick={ pausePlay }>暂停播放</Button>
          <Button onClick={ resumePlay }>恢复播放</Button>
          <Button onClick={ stopPlay }>停止播放</Button>
          <Button onClick={ destroyRecord }>销毁实例</Button>
        </div>
        <Divider />
        <div>
          <h3>下载</h3>
          <Button onClick={ downloadPCM } secondary>下载PCM</Button>
          <Button onClick={ downloadWAV } secondary>下载WAV</Button>
        </div>
        <Divider />
        <div>
          <h3>其他音频格式</h3>
          <h4>MP3</h4>
          <Button onClick={ playMP3 } secondary>播放MP3</Button>
          <Button onClick={ downloadMP3 } secondary>下载MP3</Button>

          {/* <h4>OGG</h4>
                    <Button onClick={ this.playOGG } secondary>
                        播放OGG
                    </Button>
                    <Button onClick={ this.downloadOGG } secondary>
                        下载OGG
                    </Button> */}
        </div>
        <Divider />
        <div style={{ position: 'relative' }}>
          <h3>播放外部音频</h3>
          <Button.Group basic size='small'>
            <Button icon='upload' />
          </Button.Group>
          <input
            type="file" onChange={ uploadAudio }
            style={{
              position: 'absolute', width: '30px', height: '30px',
              top: '36px', cursor: 'pointer',  left: '0px', opacity: 0
            }}
          />
        </div>
        <Divider />
        <h3>应用</h3>
        <Translate />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

// https://github.com/2fps/recorder/issues/33 支持mp3
// 请用 16位的采样位数
function convertToMp3(wavDataView) {
  // 获取wav头信息
  const wav = lamejs.WavHeader.readHeader(wavDataView); // 此处其实可以不用去读wav头信息，毕竟有对应的config配置
  const { channels, sampleRate } = wav;
  console.log('wav', wav)
  const mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
  // 获取左右通道数据
  const result = recorder.getChannelData()
  const buffer = [];

  const leftData = result.left && new Int16Array(result.left.buffer, 0, result.left.byteLength / 2);
  const rightData = result.right && new Int16Array(result.right.buffer, 0, result.right.byteLength / 2);
  const remaining = leftData.length + (rightData ? rightData.length : 0);

  const maxSamples = 1152;
  for (let i = 0; i < remaining; i += maxSamples) {
    const left = leftData.subarray(i, i + maxSamples);
    let right = null;
    let mp3buf = null;

    if (channels === 2) {
      right = rightData.subarray(i, i + maxSamples);
      mp3buf = mp3enc.encodeBuffer(left, right);
    } else {
      mp3buf = mp3enc.encodeBuffer(left);
    }

    if (mp3buf.length > 0) {
      buffer.push(mp3buf);
    }
  }

  const enc = mp3enc.flush();

  if (enc.length > 0) {
    buffer.push(enc);
  }

  return new Blob(buffer, { type: 'audio/mp3' });
}

export default AudioRecord
