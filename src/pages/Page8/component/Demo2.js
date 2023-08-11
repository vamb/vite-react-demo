import React, { Component } from 'react'
import UnitContent from "../../components/UnitContent";

class Sub extends Component {
  state = {
    xPos: document.documentElement.clientWidth,
    yPos: document.documentElement.clientHeight
  }

  getPos = () =>{
    this.setState({
      xPos: document.documentElement.clientWidth,
      yPos: document.documentElement.clientHeight
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.getPos)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.getPos)
  }

  render() {
    return(
      <div>
        <p>{`sub => xPos: ${this.state.xPos}, yPos: ${this.state.yPos}`}</p>
      </div>
    )
  }
}

class Foo extends Component {
  state = {
    xPos: document.documentElement.clientWidth,
    yPos: document.documentElement.clientHeight
  }

  getPos = () =>{
    this.setState({
      xPos: document.documentElement.clientWidth,
      yPos: document.documentElement.clientHeight
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.getPos)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.getPos)
  }

  render() {
    return(
      <div>
        <p>{`foo => xPos: ${this.state.xPos}, yPos: ${this.state.yPos}`}</p>
      </div>
    )
  }
}

class Demo2 extends Component {

  render() {
    return(
      <UnitContent title={'Demo2 HOC 改造前'}>
        <div>{'Demo2 => HOC v1 高阶组件原始demo'}</div>
        <Foo />
        <Sub />
      </UnitContent>
    )
  }
}

export default Demo2
