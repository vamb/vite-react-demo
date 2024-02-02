import React, { Suspense, lazy } from 'react'
import styled from "styled-components";
import { Route } from "react-router-dom"
import { Switch } from "react-router";
import LoadingPage from "../components/LoadingPage";

const SingleLayout = () => {

  const intersectionPage = lazy(()=>import("../SinglePage/IntersectionPage"))

  return (
    <Wrapper>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route path="/single/intersection" exact component={intersectionPage} />
        </Switch>
      </Suspense>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  height: 100vh;
  width: 100vw;
`

export default SingleLayout
