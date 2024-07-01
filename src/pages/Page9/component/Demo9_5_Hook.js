import React, { useState, useRef } from "react"

const useMediaRecorder = () => {
  const [ mediaUrl, setMediaUrl ] = useState('');
  const [ base64, setBase64 ] = useState('');
  const mediaStream = useRef();
  const mediaRecorder = useRef();
  const mediaBlobs = useRef([]);

  const startRecord = async () => {
    mediaStream.current = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    mediaRecorder.current = new MediaRecorder(mediaStream.current);

    mediaRecorder.current.ondataavailable = (blobEvent) => {
      mediaBlobs.current.push(blobEvent.data);
    }
    mediaRecorder.current.onstop = () => {
      const blob = new Blob(mediaBlobs.current, { type: 'audio/wav' })
      requestApi(blob)
      const url = URL.createObjectURL(blob);
      convertToBase64(blob)
      setMediaUrl(url);
    }
    mediaRecorder.current?.start();
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

  // 将二进制数据转换为Base64
  function toBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  }

  // 例子：将Blob对象转换为Base64
  function convertToBase64(blob) {
    const reader = new FileReader();
    reader.onloadend = function() {
      const base64Data = toBase64(reader.result);
      // console.log('base64Data', base64Data)
      setBase64(base64Data)
    }
    reader.readAsArrayBuffer(blob);
  }

  const pauseRecord = async () => {
    mediaRecorder.current?.pause();
  }

  const resumeRecord = async () => {
    mediaRecorder.current?.resume()
  }

  const stopRecord = async () => {
    mediaRecorder.current?.stop()
    mediaStream.current?.getTracks().forEach((track) => track.stop());
    mediaBlobs.current = [];
  }

  return {
    mediaUrl,
    base64,
    startRecord,
    pauseRecord,
    resumeRecord,
    stopRecord,
  }
}

export default useMediaRecorder
