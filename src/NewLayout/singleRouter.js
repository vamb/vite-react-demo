import React, { lazy } from "react";

const IntersectionPage = lazy(()=>import("@/pages/SinglePage/IntersectionPage"))
const PerspectivePage = lazy(()=>import("@/pages/SinglePage/Perspective/PerspectivePage"))
const SwitchDemoPage = lazy(()=>import("@/pages/SinglePage/SwitchDemo"))
const ScrollDemoV1 = lazy(()=>import ("@/pages/SinglePage/ScrollDemoV1"))
const DragDemoV1 = lazy(()=>import("@/pages/SinglePage/DragDemoV1"))
const DragDemoV2 = lazy(()=>import("@/pages/SinglePage/DragDemoV2"))
const DragDemoV3 = lazy(()=>import("@/pages/SinglePage/DragDemoV3"))

const singleRouter = [
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

export { singleRouter }
