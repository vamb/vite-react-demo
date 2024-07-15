import React, { useState, useContext, createContext } from 'react'
import UnitContent from "../../../components/UnitContent";
import { Button } from "antd";
import styled from "styled-components";
import CommTips from "@/pages/Page1/component/CommTips";

const CountContext = createContext({})

function Counter(){
  const { num, count, setCount} = useContext(CountContext)

  const childChange = isPlus => {
    let newCount = count
    if(isPlus) {
      newCount ++
    }else{
      newCount --
      newCount = newCount < 0? 0: newCount
    }
    setCount(newCount)
  }

  return (
    <div className={'child-holder flex-col'}>
      <div className={'one-line justify-start'}>
        <div className={'label-area'}>{`num: ${num}`}</div>
        <div className={'label-area'}>{`count: ${count}`}</div>
      </div>
      <div className={'one-line justify-start'}>
        <Button type={'primary'} onClick={()=>childChange(false)}>-</Button>
        <Button type={'primary'} onClick={()=>childChange(true)}>+</Button>
      </div>
    </div>
  )
}

function Example5() {
  const [ count, setCount ] = useState(0)

  const changeCount = isPlus => {
    let newCount = count
    if(isPlus) {
      newCount ++
    }else{
      newCount --
      newCount = newCount < 0? 0: newCount
    }
    setCount(newCount)
  }

  return(
    <UnitContent title={'Example5'} label={'只用 useContext 实现父子组件共享值、及修改值'}>
      <Wrapper>
        <div className={'flex-col'}>
          <div className={'one-line'}>
            <div className={'label-area'}>{`you clicked ${count} times.`}</div>
            <Button type={'primary'} onClick={()=>changeCount(false)}>-</Button>
            <Button type={'primary'} onClick={()=>changeCount(true)}>+</Button>
            <CommTips
              title={
                <div className={'flex-col'}>
                  <div>1.可以通过 context 的 value 创建一个共享域</div>
                  <div>2.value 的内容是一个对象形式，可以是 参数，也可以是改变参数的方法</div>
                  <div>3.这里把 useState 的内容放了进去，所以子组件也能修改值</div>
                </div>
              }
            />
          </div>
          <div className={'one-line'}>
            <CountContext.Provider value={{num: count, count, setCount}}>
              <Counter />
            </CountContext.Provider>
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  .one-line {
    width: 100%;
  }
  .justify-start {
    justify-content: start;
  }
`

export default Example5
