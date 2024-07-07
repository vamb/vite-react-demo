import React, { useState, useEffect } from "react"
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import { Button, message } from "antd"
import { Link } from "react-router-dom";
import Recorder from 'js-audio-recorder';
import Player from 'js-audio-recorder/src/player/player';
import { encodeWAV } from 'js-audio-recorder/src/transform/transform';

let playTimer = null;
let recorder = null;

const Demo9_6 = () => {
  const [ recoder, setRecoder ] = useState(new Recorder({
    sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
    sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
    numChannels: 1, // 声道，支持 1 或 2， 默认是1
    // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
  }))

  const [ isStop, setIsStop ] = useState(true)

  const [ sampleBits, setSampleBits ] = useState(16)
  const [ sampleRate, setSampleRate ] = useState(16000)
  const [ numChannels, setNumChannels ] = useState(1)
  const [ compiling, setCompiling ] = useState(false)
  // const [ recorder, setRecorder ] = useState()

  const [ audioAvailable, setAudioAvailable ] = useState(false)

  const checkAudioInputAvailable = () => {
    try {
      navigator.mediaDevices.enumerateDevices().then(function (devices) {
        let newAudioAvail = false
        devices.forEach(function (device) {
          switch (device?.kind) {
            case 'audioinput':
              console.log('音频输入设备(麦克风|话筒)：', device);
              newAudioAvail = true
              return
            // case 'audiooutput':
            //   console.log('音频输出设备(扬声器|音响)：', device);
            //   break;
            // case 'videoinput':
            //   console.log('视频输入设备(摄像头|相机)：', device);
            //   break;
            // default:
            //   console.log('当前可用的媒体设备: ', device);
            //   break;
          }
        });
        setAudioAvailable(newAudioAvail)
        if(!newAudioAvail) {
          message.error('未检测到音频输入设备(麦克风|话筒)')
        }
      }).catch(function (err) {
        console.error(err);
      });
    } catch (err) {
      console.error(err);
    } finally {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.log("不支持mediaDevices.enumerateDevices(), 未识别到多媒体设备！");
      }
    }
  }

  useEffect(()=>{
    checkAudioInputAvailable()
  },[])


  const collectData = () => {
    return { sampleBits, sampleRate, numChannels, compiling };
  }

   //开始录音
  const startRecordAudio = (recoder) => {
    Recorder.getPermission().then(() => {
      console.log("开始录音");
      recoder?.start(); // 开始录音
    },
    (error) => {
      message.info("请先允许该网页使用麦克风");
      console.log(`${error.name} : ${error.message}`);
    });
  }

  //停止录音
  const stopRecordAudio = (recorder) => {
    console.log("停止录音", recorder, recorder?.stop);
    recorder?.stop();
  }

  // 销毁实例
  const destroyRecordAudio = recorder => {
    if (recorder !== null) {
      recorder?.destroy().then(() => {
        console.log('销毁实例');
        setRecoder(null)
      });
    }
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

  const startRecordV2 = () => {
    const config = collectData();
    if (!recorder) {
      recorder = new Recorder(config);

      recorder.onprogress = (params) => {
        // console.log('onprogress params', params)
        // this.setState({
        //   duration: params.duration.toFixed(5),
        //   fileSize: params.fileSize,
        //   vol: params.vol.toFixed(2)
        // });
        // // 此处控制数据的收集频率
        // if (config.compiling) {
        //   console.log('音频总数据：', params.data);
        // }
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
  }

  // 播放录音
  const playRecordV2 = () => {
    recorder && recorder.play();
    console.log('播放录音');
  }

  // 销毁实例
  const destroyRecordV2 = () => {
    if (recorder) {
      recorder.destroy().then(() => {
        console.log('销毁实例');
        recorder = null;
      });
    }
  }

  // 停止录音
  const endRecord = () => {
    recorder && recorder.stop();
    console.log('结束录音');
  }

  const combineStart = () => {
    setIsStop(false)
    startRecordV2()
  }

  const combineStop = (recorder) => {
    const selfEnd = ({recorder}) => {
      return new Promise((resolve)=> {
        recorder && recorder.stop();
        resolve({recorder})
      })
    }

    const selfPlay = ({recorder}) => {
      return new Promise(resolve => {
        recorder && recorder.play();
        resolve({recorder})
      })
    }

    const selfDestroy = ({recorder}) => {
      return new Promise(resolve => {
        if (recorder) {
          recorder.destroy().then(() => {
            console.log('销毁实例');
            recorder = null;
            resolve()
            setIsStop(true)
          });
        }else{
          setIsStop(true)
          resolve()
        }
      })
    }
    new Promise(resolve => {
      resolve({recorder})
    }).then(selfEnd).then(selfPlay).then(selfDestroy)
  }

  return (
    <UnitContent title={'9_6'}>
      <Wrapper>
        <div className={'one-line'}>
          <Button type="button" disabled={!audioAvailable} onClick={()=>startRecordAudio(recoder)}>开始录音</Button>
          {/*<h3>录音时长：{{ recorder?.duration?.toFixed(4) }}</h3>*/}
          <Button type="button" disabled={!audioAvailable} onClick={()=>stopRecordAudio(recoder)}>停止录音</Button>
          <Button type="button" disabled={!audioAvailable} onClick={()=>playRecordAudio(recoder)}>播放录音</Button>
          <Button type="button" disabled={!audioAvailable} onClick={()=>getPCBRecordAudioData(recoder)}>获取PCB录音数据</Button>
          <Button type="button" disabled={!audioAvailable} onClick={()=>downloadPCBRecordAudioData(recoder)}>下载PCB录音文件</Button>
          <Button type="button" disabled={!audioAvailable} onClick={()=>getWAVRecordAudioData(recoder)}>获取WAV录音数据</Button>
          <Button type="button" disabled={!audioAvailable} onClick={()=>downloadWAVRecordAudioData(recoder)}>下载WAV录音文件</Button>
          <Button type="button" disabled={!audioAvailable} onClick={()=>destroyRecordAudio(recoder)}>销毁实例</Button>
        </div>
        <div className={'one-line'}>
          <Button type="button" disabled={!audioAvailable} onClick={()=>startRecordV2()}>开始录音V2</Button>
          <Button type="button" disabled={!audioAvailable} onClick={()=>endRecord()}>停止录音V2</Button>
          <Button type="button" disabled={!audioAvailable} onClick={()=>playRecordV2()}>播放录音V2</Button>
          <Button type="button" disabled={!audioAvailable} onClick={()=>destroyRecordV2()}>销毁实例V2</Button>
        </div>
        <div className={'one-line'}>
          {
            isStop?
            <Button type={'primary'} disabled={!audioAvailable} onClick={()=>combineStart()}>开始录音</Button>:
            <Button type={'primary'} disabled={!audioAvailable} onClick={()=>combineStop(recorder)}>停止录音</Button>
          }
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
