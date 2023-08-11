import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Counter } from './comp14_3/Counter'
import { Provider } from 'react-redux';
import { store } from './comp14_3/store'

const Demo14_3 = () => {

  return (
    <UnitContent title={'Demo14_3 counter'}>
      <Wrapper>
        <Provider store={store}>
          <Counter />
        </Provider>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo14_3
