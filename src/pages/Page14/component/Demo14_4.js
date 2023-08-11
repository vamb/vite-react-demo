import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './comp14_4/components/App'
import rootReducer from './comp14_4/reducers'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const store = createStore(rootReducer)

const Demo14_4 = () => {

  return (
    <UnitContent title={'Demo14_4 todoList'}>
      <Wrapper>
        <Provider store={store}>
          <App />
        </Provider>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo14_4
