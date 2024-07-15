import React, { lazy } from 'react'
import { createBrowserRouter, Navigate } from "react-router-dom"

const MainPage1 = lazy(()=> import("@/pages/Page1"))
const MainPage2 = lazy(()=> import("@/pages/Page2"))
const MainPage3 = lazy(()=> import("@/pages/Page3"))
const MainPage4 = lazy(()=> import("@/pages/page4"))
const MainPage5 = lazy(()=> import("@/pages/page5"))
const MainPage6 = lazy(()=> import("@/pages/page6"))
const MainPage7 = lazy(()=> import("@/pages/Page7"))
const MainPage8 = lazy(()=> import("@/pages/Page8"))
const MainPage9 = lazy(()=> import("@/pages/Page9"))
const MainPage10 = lazy(()=> import("@/pages/Page10"))
const MainPage11 = lazy(()=> import("@/pages/Page11"))
const MainPage12 = lazy(()=> import("@/pages/Page12"))
const MainPage14 = lazy(()=> import("@/pages/Page14"))
const MainPage15 = lazy(()=> import("@/pages/Page15"))


const IntersectionPage = lazy(()=>import("@/pages/SinglePage/IntersectionPage"))
const PerspectivePage = lazy(()=>import("@/pages/SinglePage/Perspective/PerspectivePage"))
const SwitchDemoPage = lazy(()=>import("@/pages/SinglePage/SwitchDemo"))
const ScrollDemoV1 = lazy(()=>import ("@/pages/SinglePage/ScrollDemoV1"))
const DragDemoV1 = lazy(()=>import("@/pages/SinglePage/DragDemoV1"))
const DragDemoV2 = lazy(()=>import("@/pages/SinglePage/DragDemoV2"))
const DragDemoV3 = lazy(()=>import("@/pages/SinglePage/DragDemoV3"))

const routerConfig = [
  {
    title: 'Main',
    path: '/main',
    children: [
      {
        title: 'Hooks',
        path: '/main/firstPage',
        element: <MainPage1 />
      },
      {
        title: '2 - Page',
        path: '/main/secondPage',
        element: <MainPage2 />
      },
      {
        title: '3 - LifeCycle',
        path: '/main/thirdPage',
        element: <MainPage3 />
      },
      {
        title: '4 - Page',
        path: '/main/forthPage',
        element: <MainPage4 />
      },
      {
        title: '5 - Canvas',
        path: '/main/fifThPage',
        element: <MainPage5 />
      },
      {
        title: '6 - XHR & Fetch',
        path: '/main/sixthPage',
        element: <MainPage6 />
      },
      {
        title: '7 - Web3.0',
        path: '/main/seventhPage',
        element: <MainPage7 />
      },
      {
        title: '8 - CSS',
        path: '/main/eighthPage',
        element: <MainPage8 />
      },
      {
        title: '9 - Page',
        path: '/main/ninthPage',
        element: <MainPage9 />
      },
      {
        title: '10 - threeJs',
        path: '/main/tenthPage',
        element: <MainPage10 />
      },
      {
        title: '11 - JS练习',
        path: '/main/eleventhPage',
        element: <MainPage11 />
      },
      {
        title: '12 - 爪哇',
        path: '/main/twelvePage',
        element: <MainPage12 />
      },
      {
        title: '14 - 状态托管',
        path: '/main/fourteenPage',
        element: <MainPage14 />
      },
      {
        title: '15 - 蝴蝶图标',
        path: '/main/butterflyDag',
        element: <MainPage15 />
      },
    ]
  },
  {
    title: 'SinglePage',
    path: '/single',
    children: [
      {
        title: 'intersection',
        path: '/single/intersection',
        element: <IntersectionPage />
      },
      {
        title: 'perspective',
        path: '/single/perspectivePage',
        element: <PerspectivePage />
      },
      {
        title: 'switchDemo',
        path: '/single/perspectivePage',
        element: <SwitchDemoPage />
      },
      {
        title: 'scrollDemoV1',
        path: '/single/scrollDemoV1',
        element: <ScrollDemoV1 />
      },
      {
        title: 'dragDemoV1',
        path: '/single/dragDemoV1',
        element: <DragDemoV1 />
      },
      {
        title: 'dragDemoV2',
        path: '/single/dragDemoV2',
        element: <DragDemoV2 />
      },
      {
        title: 'dragDemoV3',
        path: '/single/dragDemoV3',
        element: <DragDemoV3 />
      },
    ]
  }
]

export { routerConfig }

export default createBrowserRouter(routerConfig);
