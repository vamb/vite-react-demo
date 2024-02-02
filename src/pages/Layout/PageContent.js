import React, { lazy, Suspense } from 'react'
import styled from "styled-components";
import { Route, Redirect } from "react-router-dom"
import { Switch } from "react-router";
import LoadingPage from '../components/LoadingPage'

const PageContent = (props) => {
  const { parentHeight } = props
  const Page1Lazy = lazy(() => import("../Page1"))
  const Page2Lazy = lazy(() => import("../Page2"))
  const Page3Lazy = lazy(() => import("../Page3/ThirdPageCombine"))
  const Page4Lazy = lazy(() => import("../Page4/FourthPageCombine"))
  const Page5Lazy = lazy(() => import("../page5"))
  const Page6Lazy = lazy(() => import("../page6"))
  const Page7Lazy = lazy(() => import("../Page7"))
  const Page8Lazy = lazy(() => import("../Page8"))
  const Page9Lazy = lazy(() => import("../Page9"))
  const Page10Lazy = lazy(() => import("../Page10"))
  const Page11Lazy = lazy(() => import("../Page11"))
  const Page12Lazy = lazy(() => import("../Page12"))
  const Page14Lazy = lazy(() => import("../Page14"))
  const Page15Lazy = lazy(() => import("../Page15"))

  return (
    <ContentWrapper>
      <Suspense fallback={<LoadingPage />}>
        <div className={'page-content'} style={{minHeight: `${parentHeight}px`}}>
          <Switch>
            <Route path="/main/firstPage" exact component={Page1Lazy} />
            <Route path="/main/secondPage" exact component={Page2Lazy} />
            <Route path="/main/thirdPage" exact component={Page3Lazy} />
            <Route path="/main/forthPage" exact component={Page4Lazy} />
            <Route path='/main/fifthPage' exact component={Page5Lazy} />
            <Route path='/main/sixthPage' exact component={Page6Lazy} />
            <Route path='/main/seventhPage' exact component={Page7Lazy} />
            <Route path='/main/eighthPage' exact component={Page8Lazy} />
            <Route path='/main/ninthPage' exact component={Page9Lazy} />
            <Route path='/main/tenthPage' exact component={Page10Lazy} />
            <Route path='/main/eleventhPage' exact component={Page11Lazy} />
            <Route path='/main/twelvePage' exact component={Page12Lazy} />
            <Route path='/main/fourteenPage' exact component={Page14Lazy} />
            <Route path='/main/butterflyDag' exact component={Page15Lazy} />
            <Redirect from="/main" to="/main/firstPage" />
          </Switch>
        </div>
      </Suspense>
    </ContentWrapper>
  )
}

const ContentWrapper = styled('div')`
  flex-grow: 1;
  border-inline-start: 1px solid rgba(5, 5, 5, 0.06);
  .page-content {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: start;
    & > div {
      width: 100%;
      padding: 10px;
    }
  }
`

export default PageContent
