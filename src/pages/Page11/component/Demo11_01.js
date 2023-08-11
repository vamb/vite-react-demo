import React from 'react'
import styled from "styled-components";
import { Button, Space } from 'antd'
import UnitContent from "../../components/UnitContent";

const Demo11_01 = () => {

  function xitu() {
    var x = 1;
    function xitu2() {
      var x = 'a'
      console.log('inner x', x)
    }
    console.log('outer x', x)
    xitu2()
  }

  function xitu3() {
    var x = 'x' + y
    console.log('x', x)
    console.log('这里的y是变量提升，如果后面没有定义y则会报错，如果定义了但是没有赋值，一律是undefined')
    var y = 'y'
  }

  function xitu4() {
    console.log('window?.allVal', window?.allVal)
    console.log('在根路径下定义的var会自动绑定到window上 - 全局变量')
  }

  var xitu5 = {}
  xitu5.name = 'xitu5'
  xitu5.add = function(a, b) {
    console.log(`a + b (${a} + ${b}) => `, a + b)
    console.log('通过对象的方式，每个对象都是唯一的，对象对应的方法也将是唯一')
    return a + b
  }

  return (
    <UnitContent title={'Demo11_01'}>
      <Wrapper>
        <Space>
          <Button type={'primary'} onClick={()=>xitu()}>不同区块的var相隔离</Button>
          <Button type={'primary'} onClick={()=>xitu3()}>var变量提升</Button>
          <Button type={'primary'} onClick={()=>xitu4()}>全局变量</Button>
          <Button type={'primary'} onClick={()=>xitu5.add(3,4)}>避免全局重复</Button>
        </Space>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  padding: 5px;
`

export default Demo11_01
