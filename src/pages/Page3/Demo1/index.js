import * as React from "react";
import Child from './Child';
import UnitContent from "../../components/UnitContent";
import { Button } from 'antd'

class Demo1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
    console.log('Demo1 Parent constructor Date', this.state.date.date)
  }

  componentWillMount() {
    console.log('Demo1 Parent componentWillMount Date', this.state.date)
  }

  componentDidMount() {
    console.log('Demo1 Parent componentDidMount Date', this.state.date)
  }

  componentWillUnmount() {
    console.log('Demo1 Parent componentWillUnmount')
  }

  render() {
    console.log('Demo1 Parent render Date', this.state.date)

    return (
      <UnitContent title={'Demo1 Parent'}>
        <span>{`Demo1 ${this.state.date}`}</span><br/>
        <Button
          type={'primary'}
          onClick={()=>{
            const newDate = new Date()
            this.setState({date: newDate})
          }}>Update Date</Button>
        <Child
          // date={this.state.date}
        />
      </UnitContent>
    )
  }
}

export default Demo1
