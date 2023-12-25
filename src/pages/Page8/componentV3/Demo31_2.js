import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Button } from 'antd'

const Demo31_2 = () => {

  const initComponent = () => {
    for(let i=0;i<=8;i++) {
      let tree = document.createElement('div')
      tree.classList.add('trees')
      tree.style.width = `${i * 60}px`
      document.querySelector('.tree').appendChild(tree)
    }
  }

  useEffect(()=>{
    initComponent()
  },[])

  const handleRefresh = () => {

  }

  return (
    <UnitContent title={'31_2 christmas tree'}>
      <Wrapper>
        <div className={'xmas'}>
          <div className={'tree'}>
            <div className={'ball'}>
              <div className={'box'} style={{'--x':25, '--y': 33}} />
              <div className={'box'} style={{'--x':15, '--y': 23}} />
              <div className={'box'} style={{'--x':30, '--y': 23}} />
              <div className={'box'} style={{'--x':10, '--y': 30}} />
              <div className={'box'} style={{'--x':20, '--y': 28}} />
              <div className={'box'} style={{'--x':35, '--y': 33}} />
              <div className={'box'} style={{'--x':20, '--y': 12}} />
              <div className={'box'} style={{'--x':24, '--y': 17}} />
            </div>
          </div>
          <div className={'trunk'} />
        </div>
        <Button
          className={'refresh-btn'} type={'primary'}
          onClick={()=>handleRefresh()}
        >Refresh</Button>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  position: relative;
  .xmas, .tree {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .tree {
    position: relative;
  }
  .box {
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50px;
    left: calc(var(--x) * 10px);
    top: calc(var(--y) * 10px)
  }
  .trunk {
    width: 50px;
    height: 70px;
    background-color: #9e6328;
  }
  .trees {
    height: 50px;
    border-radius: 50px;
  }
  .tree div, .trunk {
    box-shadow: 10px 10px 22px #1c4d1c;
  }
  .tree div:nth-child(4n+1) {
    background-color: #2d6359;
  }
  .tree div:nth-child(4n+2) {
    background-color: #32776a;
  }
  .tree div:nth-child(4n+3) {
    background-color: #268b4c;
  }
  .tree div:nth-child(4n+4) {
    background-color: #459763;
  }
  .refresh-btn {
    position: absolute;
    left: 30px;
    top: 30px;
  }
`

export default Demo31_2
