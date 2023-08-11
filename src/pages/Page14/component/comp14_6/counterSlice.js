import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter16',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },
    addByAmount: (state, action) => {
      state.value += action.payload
    },
    minusByAmount: (state, action) => {
      state.value -= action.payload
    },
  }
})

export const { incremented, decremented, addByAmount, minusByAmount } = counterSlice.actions

export const store = configureStore({
  reducer: {
    counterPPP: counterSlice.reducer
  }
})

export const selectCount = state => {
  console.log('selectCount state', state)
  return state.counterPPP.value;
}
