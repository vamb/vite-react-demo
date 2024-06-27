import React from 'react'
import styled from "styled-components";
import UnitContent from "@/pages/components/UnitContent";
import "/node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

const Demo9_4 = () => {
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
        <div>
          <Player
            playsInline
            poster="/assets/poster.png"
            src="http://192.168.15.4:5000/api/file/download/test2.mp4"
          />
        </div>
        {/*<div>*/}
        {/*  <video*/}
        {/*    playsInline={true} controls preload="auto"*/}
        {/*    width="100%" src={'http://192.168.15.4:5000/api/file/mp4/test2.mp4'} id="video"/>*/}
        {/*</div>*/}
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
