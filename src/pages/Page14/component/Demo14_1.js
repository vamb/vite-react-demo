import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { createStore } from 'redux'
import { Button } from 'antd'

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

const Demo14_1 = () => {
  return (
    <UnitContent title={'Demo14_1 basic demo'}>
      <Wrapper>
        <div>
          <Button
            type={'primary'}
            onClick={()=>store?.dispatch({ type: 'counter/incremented' })}
          >Btn</Button>
        </div>
        <div>{`check console`}</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`

export default Demo14_1
