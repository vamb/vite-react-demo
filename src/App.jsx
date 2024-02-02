import React from 'react'
import { BrowserRouter, Redirect } from "react-router-dom"
import BasicLayout from './pages/Layout/BasicLayout'
import SingleLayout from "./pages/Layout/SingleLayout";
import { Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter basename="/">
      <Route path={`/main`} component={BasicLayout} />
      <Route path={'/single'} component={SingleLayout} />
      <Redirect from="/" to="/main" />
    </BrowserRouter>
  )
}

export default App
