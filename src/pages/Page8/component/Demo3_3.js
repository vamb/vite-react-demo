import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

// 通过属性代理⽆法直接操作原组件的state，可以通过props和cb抽象state
function HOC(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
      };
      this.onChange = this.onChange.bind(this);
    }
    onChange = (event) => {
      this.setState({
        name: event.target.value,
      })
    }
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange,
        },
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}

class Demo extends React.Component {

  render() {
    return (
      <Wrapper>
        <div>
          <input name="name" {...this.props.name} />
        </div>
      </Wrapper>
    )
  }
}

const HOCDemo = HOC(Demo)

// 使⽤
const Demo3_3 =()=> {
  return (
    <UnitContent title={'Demo3_3'}>
      <HOCDemo />
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Demo3_3
