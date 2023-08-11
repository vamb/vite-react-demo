import React, { memo, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { shallowClone, deepClone } from '../../utils/utils'

const Demo9_1 = memo(()=>{

  useEffect(()=>{
    const originObj = { name : '浪里行舟', arr : [1,[2,3],4] }
    /**
     * 浅拷贝
     *  对于引用类型属性，所使用的还是相同的内容地址
     */
    const shallowObj = shallowClone(originObj)

    /**
     * 深拷贝
     *  ok啦，没问题了
     */
    const deepObj = deepClone(originObj)

    originObj.arr[1] = [5,6,7]
    console.log('originObj shallowObj deepObj', originObj, shallowObj, deepObj)

  },[])

  return (
    <UnitContent title={'Demo9_1 深拷贝 浅拷贝'}>
      <Wrapper>
        Demo9_1
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`

`

export default Demo9_1
