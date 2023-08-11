import * as React from "react";
import UnitContent from "../../components/UnitContent";

class Child extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      childDate: props?.['date'] || 'pppppp'
    }
    console.log('Child constructor props', props)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // console.log('Child componentWillReceiveProps nextProps nextContext', nextProps, nextContext)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log('Child shouldComponentUpdate nextProps nextState nextContext', nextProps, nextState, nextContext)
    const shouldUpdate = nextProps.date !== nextState.childDate
    console.log('Child shouldComponentUpdate shouldUpdate', shouldUpdate)
    return shouldUpdate
    // return false
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    // console.log('Child componentWillUpdate nextProps nextState nextContext', nextProps, nextState, nextContext)
    if(nextState.childDate !== nextProps.date){
      this.setState({childDate: nextProps.date})
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('Child componentDidUpdate prevProps prevState snapshot', prevProps, prevState, snapshot)
  }

  componentWillMount() {
    // console.log('child componentWillMount childDate', this.state.childDate)
  }

  componentDidMount() {
    // console.log('child componentDidMount childDate', this.state.childDate)
  }

  render() {
    // console.log('child render childDate', this.state.childDate)
    return(
      <UnitContent title={'Demo1 Child'}>
        <div>{`Child Page ${this.state.childDate}`}</div>
        <br/>~~~~~~~~~<br/>
        <div>{`Child Page direct props ${this.props.date}`}</div>
      </UnitContent>
    )
  }
}

export default Child
