import React from 'react'
import UnitContent from "../../components/UnitContent";
import { Button } from 'antd'
import styled from "styled-components";

class Demo11_02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date() ,
      count: 0,
      batchVl: 0,

      combineVal: 0,
      liveCycleVal: 0,
      nativeVal: 0
    }
  }

  increment = () => {
    this.setState({combineVal: this.state.combineVal + 1})
    console.log('this.state.combineVal', this.state.combineVal)
  }

  componentWillMount() {
    console.log('setState 只在合成事件和⽣命周期中是“异步”的，在原⽣事件和 setTimeout 中都是同步的;')
    console.log('1. 在合成事件increment，输出的是更新前的0')
    console.log('2. 在⽣命周期liveCycleVal，输出的是更新前的0')
    console.log('1. 在原⽣事件addEventListener - nativeVal，输出的是更新后的1')
  }

  componentDidMount() {
    this.timerID = setInterval(
      ()=> this.trick(),1000
    )
    this.setState({liveCycleVal: this.state.liveCycleVal + 1})
    console.log('this.state.liveCycleVal', this.state.liveCycleVal)
    document.getElementById('nativeBtn').addEventListener('click',()=>{
      this.setState({nativeVal: this.state.nativeVal + 1})
      console.log('this.state.nativeVal', this.state.nativeVal)
    },false) // false是默认值，是冒泡阶段 - 从内向外，true是捕获阶段
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  trick() {
    this.setState({data: new Date()})
  }

  render() {
    return (
      <UnitContent title={"Demo11_02"}>
        <Wrapper>
          <h2>Hello, {this.props?.name}</h2>
          <h3>It is {this.state.data.toLocaleTimeString()}</h3>
          <div className={'line-display'}>
            <Button type={'primary'} onClick={()=>this.setState({count: ++this.state.count})}>计数</Button>
            <div>{this.state.count}</div>
          </div>
          <div className={'line-display'}>
            <Button
              type={'primary'}
              onClick={()=>{
                this.setState({batchVl: this.state.batchVl + 1})
                this.setState({batchVl: this.state.batchVl + 1})
                this.setState(
                  {batchVl: this.state.batchVl + 1},
                  //setState的第二个参数是一个callback，在这里可以拿到更新后的值
                  ()=>{console.log('ppppp batchVl', this.state.batchVl)}
                  )
              }}>Batch Update</Button>
            <div>{this.state.batchVl}</div>
          </div>
          <div className={'line-display'}>
            <Button onClick={()=>this.increment()} type={'primary'}>combineVal</Button>
            <div>{`combineVal: ${this.state.combineVal}`}</div>
            <div>{`liveCycleVal: ${this.state.liveCycleVal}`}</div>
            <Button type={'primary'} id={'nativeBtn'}>nativeVal</Button>
            <div>{`nativeVal: ${this.state.nativeVal}`}</div>
          </div>
        </Wrapper>
      </UnitContent>
    )
  }
}

const Wrapper = styled('div')`
  .line-display {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 3px 0;
    & > button, & > div {
      margin-right: 10px;
    }
  }
`

export default Demo11_02
