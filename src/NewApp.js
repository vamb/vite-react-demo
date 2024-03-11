import React, { Suspense, lazy } from "react";
import LoadingPage from '@/pages/components/LoadingPage'

const LazyLayout = lazy(() => import("@/NewLayout/NewBasicLayout"))

const NewApp = () => {


  return (
    <Suspense fallback={<LoadingPage />}>
      <LazyLayout />
    </Suspense>
  )
}

export default NewApp
