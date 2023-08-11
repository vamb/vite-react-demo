import React from 'react'
import { BrowserRouter } from "react-router-dom"
import BasicLayout from './pages/Layout/BasicLayout'

function App() {

  return (
    <BrowserRouter>
      <BasicLayout />
    </BrowserRouter>
  )
}

export default App
