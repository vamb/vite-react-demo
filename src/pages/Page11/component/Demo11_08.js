import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '../../utils/utils'

/**
 * 堆排序：一种特殊的完全二叉树
 * 1. 大根树 => 所有的父节点，都比子节点大
 * 2. 小根数 => 所有的父节点，都比子节点小
 *
 * 可是使用链表的形式去设置，也可以使用数组的方式去设置
 *
 * i => 父节点的下标
 * 左子节点与父节点的关系 2i + 1
 * 右子节点与父节点的关系 2i + 2
 *
 * 1) 构造堆：从最小的子类开始，一层一层往上，将当前堆变成有序大根堆
 * 2) 将根节点取出，让最后一个叶子节点补上，然后开始调整使之成为有序大根堆
 * 3）重复操作2直到所有节点都取完，此时原大根堆被最终排序完成
 */
const Demo11_08 = () => {
  const [ randomArr, setRandomArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  return (
    <UnitContent title={'11_08 堆排序'} disBtn={false}>
      <Wrapper>
        <div>{`Random Array: ${randomArr}`}</div>
        {/*<div>{`Random Array after: ${insertSort(randomArr)}`}</div>*/}
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default Demo11_08
