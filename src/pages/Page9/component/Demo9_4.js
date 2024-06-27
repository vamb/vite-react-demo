import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import "/node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

const Demo9_4 = () => {

  // 通过 js 来禁用 某个元素的右击功能
  useEffect(()=>{
    const videoDom = document.getElementById('video')
    if(videoDom) {
      videoDom.addEventListener("contextmenu", (e) => {
        e = event || window.event;
        e.returnValue = false || e.preventDefault();
      });
    }
  },[])

  return (
    <UnitContent title={'9_3 video'}>
      <Wrapper>
        <div>
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
        {/*<div>*/}
        {/*  <Player*/}
        {/*    playsInline*/}
        {/*    poster="/assets/poster.png"*/}
        {/*    src="http://192.168.15.4:5000/api/file/download/test2.mp4"*/}
        {/*  />*/}
        {/*</div>*/}
        <div>
          <video
            playsInline="true"
            onContextMenu="return false" // 禁用右击，防止下载 (html里面可以用)
            width="100%" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" id="video"
            controls="controls" controlsList="nodownload" // 工具条上禁用下载功能
          ></video>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`

export default Demo9_4
