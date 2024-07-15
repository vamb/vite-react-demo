import React, { lazy } from "react";

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

const mainRouter = [
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
]

export { mainRouter }
