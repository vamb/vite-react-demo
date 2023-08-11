import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Button } from "antd";
import Demo_3_2_child3 from "./Demo3_1/Demo_3_2_child3";
import Demo_3_1_child2 from "./Demo3_1/Demo_3_1_child2";

class Demo3_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <UnitContent title={'Demo3_2 HOC demo2'}>
        <Wrapper>
          <div className={'unit'}>
            <div>{this.state.count}</div>
            <div>
              <Button
                type={'primary'}
                onClick={()=>this.setState({count: this.state.count+1})}
              >{`${this.state.count} + 1`}</Button>
            </div>
            <Demo_3_2_child3 />
            <Demo_3_1_child2 />
          </div>
          <div className={'unit'}>
            <div>1. 父组件引入两个子组件，但是不会给两个子组件注入value</div>
            <div>2. 如果子组件是component，父组件刷新，子组件也会刷新</div>
            <div>3. 如果子组件是pureComponent，父组件刷新，子组件不会刷新</div>
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

export default Demo3_2
