import React  from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './comp14_5/reducers'
import { getAllProducts } from './comp14_5/actions'
import App from './comp14_5/containers/App'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ thunk ];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const Demo14_5 = () => {

  return (
    <UnitContent title={'Demo14_5 shopping cart'}>
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

export default Demo14_5
