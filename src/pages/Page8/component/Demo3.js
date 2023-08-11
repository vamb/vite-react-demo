import React, { Component } from 'react'
import UnitContent from "../../components/UnitContent";

const widthSize = (Component)=>{
  return class toSize extends Component {
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
      return <Component {...this.state} />
    }
  }
}

class Sub extends Component {
  render() {
    return(
      <div>
        <p>{`sub => xPos: ${this.props.xPos}, yPos: ${this.props.yPos}`}</p>
      </div>
    )
  }
}

class Foo extends Component {
  render() {
    return(
      <div>
        <p>{`foo => xPos: ${this.props.xPos}, yPos: ${this.props.yPos}`}</p>
      </div>
    )
  }
}

const SizeSub = widthSize(Sub)
const SizeFoo = widthSize(Foo)

class Demo3 extends Component {
  render() {
    return(
      <UnitContent title={'Demo3 HOC 改造后'}>
        <div>{'Demo3 => HOC final version 使用高阶组件概念修改后的代码'}</div>
        <SizeSub />
        <SizeFoo />
      </UnitContent>
    )
  }
}

export default Demo3
