import React, { lazy } from "react";

const BasicLayoutPage = lazy(()=>import("@/pages/Layout/BasicLayout"))
const SingleLayoutPage = lazy(()=>import("@/pages/Layout/SingleLayout"))

const MainPage1 = lazy(()=> import("@/pages/Page1"))
const MainPage2 = lazy(()=> import("@/pages/Page2"))
const MainPage3 = lazy(()=> import("@/pages/Page3/ThirdPageCombine"))
const MainPage4 = lazy(()=> import("@/pages/page4/FourthPageCombine"))
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
const UniverDemo = lazy(() => import("@/pages/SinglePage/UniverDemo"))
const AudioRecordDemo = lazy(() => import("@/pages/SinglePage/audioRecord"))

const routerConfig = [
  {
    title: 'Main',
    path: '/main',
    element: BasicLayoutPage,
    component: "@/pages/Layout/BasicLayout",
    children: [
      {
        title: 'Hooks Related',
        path: '/main/firstPage',
        element: MainPage1,
        component: "@/pages/Page1"
      },
      {
        title: 'Page',
        path: '/main/secondPage',
        element: MainPage2,
        component: "@/pages/Page2",
      },
      {
        title: 'LifeCycle',
        path: '/main/thirdPage',
        element: MainPage3,
        component: "@/pages/Page3/ThirdPageCombine",
      },
      {
        title: 'Page',
        path: '/main/forthPage',
        element: MainPage4,
        component: "@/pages/page4/FourthPageCombine",
      },
      {
        title: 'Canvas',
        path: '/main/fifThPage',
        element: MainPage5,
        component: "@/pages/page5",
      },
      {
        title: 'XHR & Fetch',
        path: '/main/sixthPage',
        element: MainPage6,
        component: "@/pages/page6",
      },
      {
        title: 'Web3.0',
        path: '/main/seventhPage',
        element: MainPage7,
        component: "@/pages/Page7",
      },
      {
        title: 'CSS',
        path: '/main/eighthPage',
        element: MainPage8,
        component: "@/pages/Page8"
      },
      {
        title: 'Page',
        path: '/main/ninthPage',
        element: MainPage9,
        component: "@/pages/Page9",
      },
      {
        title: 'threeJs',
        path: '/main/tenthPage',
        element: MainPage10,
        component: "@/pages/Page10"
      },
      {
        title: 'JS练习',
        path: '/main/eleventhPage',
        element: MainPage11,
        component: "@/pages/Page11"
      },
      {
        title: '爪哇',
        path: '/main/twelvePage',
        element: MainPage12,
        component: "@/pages/Page12"
      },
      {
        title: '状态托管',
        path: '/main/fourteenPage',
        element: MainPage14,
        component: "@/pages/Page14"
      },
      {
        title: '蝴蝶图标',
        path: '/main/butterflyDag',
        element: MainPage15,
        component: "@/pages/Page15"
      },
    ]
  },
  {
    title: 'SinglePage',
    path: '/single',
    element: SingleLayoutPage,
    component: "@/pages/Layout/SingleLayout",
    isBlank: true,
    children: [
      {
        title: 'intersection',
        path: '/single/intersection',
        element: IntersectionPage,
        component: "@/pages/SinglePage/IntersectionPage",
        isBlank: true,
      },
      {
        title: 'perspective',
        path: '/single/perspectivePage',
        element: PerspectivePage,
        component: "@/pages/SinglePage/Perspective/PerspectivePage",
        isBlank: true,
      },
      {
        title: 'switchDemo',
        path: '/single/perspectivePage',
        element: SwitchDemoPage,
        component: "@/pages/SinglePage/SwitchDemo",
        isBlank: true,
      },
      {
        title: 'scrollDemoV1',
        path: '/single/scrollDemoV1',
        element: ScrollDemoV1,
        component: "@/pages/SinglePage/ScrollDemoV1",
        isBlank: true,
      },
      {
        title: 'dragDemoV1',
        path: '/single/dragDemoV1',
        element: DragDemoV1,
        component: "@/pages/SinglePage/DragDemoV1",
        isBlank: true,
      },
      {
        title: 'dragDemoV2',
        path: '/single/dragDemoV2',
        element: DragDemoV2,
        component: "@/pages/SinglePage/DragDemoV2",
        isBlank: true,
      },
      {
        title: 'dragDemoV3',
        path: '/single/dragDemoV3',
        element: DragDemoV3,
        component: "@/pages/SinglePage/DragDemoV3",
        isBlank: true,
      },
      {
        title: 'UniverDemo',
        path: '/single/univerDemo',
        element: UniverDemo,
        component: "@/pages/SinglePage/UniverDemo",
        isBlank: true,
      },
      {
        title: 'UniverDemo',
        path: '/single/audioRecord',
        element: AudioRecordDemo,
        component: "@/pages/SinglePage/audioRecord",
        isBlank: true,
      }
    ]
  }
]

export default routerConfig
