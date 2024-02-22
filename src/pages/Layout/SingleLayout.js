import React, { Suspense, lazy } from 'react'
import styled from "styled-components";
import { Route } from "react-router-dom"
import { Switch } from "react-router";
import LoadingPage from "../components/LoadingPage";

const SingleLayout = () => {

  const intersectionPage = lazy(()=>import("../SinglePage/IntersectionPage"))
  const perspectivePage = lazy(()=>import("../SinglePage/Perspective/PerspectivePage"))
  const switchDemoPage = lazy(()=>import("../SinglePage/SwitchDemo"))
  const scrollDemoV1 = lazy(()=>import ("../SinglePage/ScrollDemoV1"))
  const dragDemoV1 = lazy(()=>import("../SinglePage/DragDemoV1"))
  const dragDemoV2 = lazy(()=>import("../SinglePage/DragDemoV2"))
  const dragDemoV3 = lazy(()=>import("../SinglePage/DragDemoV3"))

  return (
    <Wrapper>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route path="/single/intersection" exact component={intersectionPage} />
          <Route path="/single/perspectivePage" exact component={perspectivePage} />
          <Route path="/single/switchDemoPage" exact component={switchDemoPage} />
          <Route path="/single/scrollDemoV1" exact component={scrollDemoV1} />
          <Route path="/single/dragDemoV1" exact component={dragDemoV1} />
          <Route path="/single/dragDemoV2" exact component={dragDemoV2} />
          <Route path="/single/dragDemoV3" exact component={dragDemoV3} />
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
