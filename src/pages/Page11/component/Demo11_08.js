import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '@/utils/utils'

/**
 * 堆排序：一种特殊的完全二叉树
 * 时间复杂度：O(n*logn)，比快速排序慢一点
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
  const [ actionArr, setActionArr ] = useState([])

  const initRandomArr = () => {
    const randomArr = generateRandomArr(10, 100)
    setRandomArr(randomArr)
    const actionArr = JSON.parse(JSON.stringify(randomArr))
    heapSort(actionArr)
    setActionArr(actionArr)
  }

  useEffect(()=>{
    initRandomArr()
  },[])

  /**
   * 目前是大根堆
   * 一次移动（从上往下移动）
   * @param arr 完整的数组
   * @param low 移动的起始坐标（初始是顶层）
   * @param high 移动的结束坐标（初始是最后一个叶子节点）
   */
  const sift = (arr, low, high) => {
    let i = low // 最开始指向的根节点
    let j = 2 * i + 1 // 左子节点
    const temp = arr[low] // 要移动的数据
    while (j <= high && low !== high) {
      if(j + 1 <= high && arr[j+1] > arr[j]) { //如果右子节点没有越界，且右子节点比左子节点大
        j = j + 1 // 确定要比较的是右子节点
      }
      if(arr[j] > temp) { // 如果更大的子节点比较大
        arr[i] = arr[j] // 这个更大的子节点往上移动
        i = j
        j = 2 * i + 1
      }else { // 要比较的数据比两个子节点都大，那么这个数据就放在当前位置，循环结束
        arr[i] = temp
        break
      }
    }
    arr[i] = temp
  }

  const heapSort = (arr) => {
    const arrLength = arr.length
    // 获取最后一个父节点的坐标，得到后所有需要调整的坐标就是 0 开始，到 lastSiftNodeIdx 结束
    const lastSiftNodeIdx = (arrLength -1) % 2 === 1? (arrLength /2 -1): (arrLength - 3) /2

    for(let i=lastSiftNodeIdx;i >= 0; i--) {
      sift(arr, i, arrLength-1) // 可以简单的用左右一个叶子节点作为最后一个节点，这么做不用算，不会错
    }
    //================= 到这里，构造堆的任务完成 =======================

    for(let i = arrLength -1; i >= 0; i--) {
      const temp = arr[i]
      arr[i] = arr[0]
      arr[0] = temp
      sift(arr, 0, i-1) // 因为最后一位已经被原列表的第一个赋值了，且不需要在排序了，顾而是 i-1
    }
  }

  return (
    <UnitContent title={'11_08 堆排序'} disBtn={false}>
      <Wrapper>
        <div>{`Random Array: ${randomArr}`}</div>
        <div>{`Random Array after: ${actionArr}`}</div>
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
