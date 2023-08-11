import React, { memo, useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { Button, Input } from 'antd'

const Demo24 = memo(()=>{
  const [ inputValue, setInputValue ] = useState(null)
  const [ displayMsg, setDisplayMsg ] = useState([])
 const [ socketInstance, setSocketInstance ] = useState(null)

  const initSocket = () =>{
    let socket = null
    if(!socketInstance){
      const newSocketInstance = new WebSocket('ws://localhost:8002')
      setSocketInstance(newSocketInstance)
      socket = newSocketInstance
    }else{
      socket = socketInstance
    }
    socket.addEventListener('open', function(){
      console.log('socket connected successfully')
    })

    socket.addEventListener('message', function(e){
      if(e?.['data']){
        displayMsg.push((e?.['data']))
        setDisplayMsg(displayMsg)
      }
    })
  }

  const sendMessage = () =>{
    if(socketInstance){
      socketInstance.send(inputValue)
    }
  }

  useEffect(()=>{
    initSocket()
  },[])

  return(
    <UnitContent title={'24'}>
      <Wrapper>
        <div className={'socket-window'}>
          <div className={'chat-content'}>
            {
              Array.isArray(displayMsg) && displayMsg.length>0 &&
              displayMsg.map((item, idx)=>{
                return <div key={`msg-${idx}`}>{item}</div>
              })
            }
          </div>
          <div className={'action-content'}>
            <div className={'input-content'}>
              <Input
                style={{width: '100%', height: '100%', borderRadius: '6px', border: '0px'}}
                onChange={(e)=>setInputValue(e.target.value)}
              />
            </div>
            <div className={'btn-group'}>
              <Button type={'primary'} onClick={()=>sendMessage()}>发送</Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  .socket-window {
    width: 500px;
    height: 450px;
    background: skyblue;
    box-sizing: border-box;
    border: 1px solid blueviolet;
    border-radius: 6px;
    padding: 5px;
    display: flex;
    flex-direction: column;
  }
  .chat-content {
    width: 100%;
    height: 300px;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid blueviolet;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }
  .chat-content>div{
    margin: 5px;
    font-size: 18px;
    font-weight: 700;
  }
  .action-content {
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    border: 1px solid blueviolet;
    border-radius: 6px;
    margin-top: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
  }
  .input-content {
    width: 100%;
    height: 80px;
    background: lightgreen;
    border-radius: 6px;
  }
  .btn-group {
    display: flex;
    justify-content: end;
    padding: 2px 10px;
  }
`

export default Demo24
