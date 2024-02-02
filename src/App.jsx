import React, { useEffect } from 'react'
import { BrowserRouter, Redirect } from "react-router-dom"
import BasicLayout from './pages/Layout/BasicLayout'
import SingleLayout from "./pages/Layout/SingleLayout";
import { Route } from "react-router-dom"

function App() {

  const initRouteToMain = () => {
    const pathname = window.location.pathname
    if('/' === pathname) {
      window.location.href = '/main'
    }
  }

  useEffect(()=>{
    initRouteToMain()
  },[])

  return (
    <BrowserRouter basename="/">
      <Route path={`/main`} component={BasicLayout} />
      <Route path={'/single'} component={SingleLayout} />
      {/*<Redirect from="/" to="/main" />*/}
    </BrowserRouter>
  )
}

export default App
