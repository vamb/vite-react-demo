import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Button } from "antd";
import Demo_3_1_child1 from "./Demo3_1/Demo_3_1_child1";
import Demo_3_1_child2 from "./Demo3_1/Demo_3_1_child2";

class Demo3_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <UnitContent title={'Demo3_1 HOC demo'}>
        <Wrapper>
          <div className={'unit'}>
            <div>{this.state.count}</div>
            <div>
              <Button
                type={'primary'}
                onClick={()=>this.setState({count: this.state.count+1})}
              >{`${this.state.count} + 1`}</Button>
            </div>
            <Demo_3_1_child1 count={this.state.count} />
            <Demo_3_1_child2 count={this.state.count} />
          </div>
          <div className={'unit'}>
            <div>1. 父组件引入两个子组件，并且给两个子组件注入value</div>
            <div>2. 父组件刷新，两个子组件都会刷新</div>
          </div>
        </Wrapper>
      </UnitContent>
    )
  }
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
  .unit {
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    border: 1px dashed #dfdfdf;
    border-radius: 5px;
    padding: 10px;
  }
`

export default Demo3_1
