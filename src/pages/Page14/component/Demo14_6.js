import React from 'react'
import UnitContent from "../../components/UnitContent";
import App from './comp14_6/App'
import { Provider } from 'react-redux';
import { store } from './comp14_6/counterSlice'

const Demo14_6 =()=>{

  return (
    <UnitContent title={'Demo14_6 count toolkit - 用上了Provider+store'}>
      <Provider store={store}>
        <App />
      </Provider>
    </UnitContent>
  )
}

export default Demo14_6
