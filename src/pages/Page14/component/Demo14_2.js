import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Button } from 'antd'
import { useState } from "react";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

const Demo14_2 = () => {
  const [ storeValue, setStoreValue ] = useState(0)

  store.subscribe(() => {
    setStoreValue(store?.getState()?.value)
  })

  return (
    <UnitContent title={'Demo14_2 redux_toolkit'}>
      <Wrapper>
        <Button
          type={'primary'}
          onClick={()=>store?.dispatch(incremented())}
        >Btn</Button>
        <div>{storeValue}</div>
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

export default Demo14_2
