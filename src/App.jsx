import React, { useEffect } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
// import BasicLayout from './pages/Layout/BasicLayout'
// import SingleLayout from "./pages/Layout/SingleLayout";
import routerConfig from "@/NewLayout/routerConfig";

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
      {
        routerConfig?.map((item, idx) => {
          return (
            <Route
              path={item?.path} key={`base-router-${idx}`}
              component={item?.element}
            />
          )
        })
      }
      {/*<Route path={`/main`} component={BasicLayout} />*/}
      {/*<Route path={'/single'} component={SingleLayout} />*/}
      {/*<Redirect from="/" to="/main" />*/}
    </BrowserRouter>
  )
}

export default App
