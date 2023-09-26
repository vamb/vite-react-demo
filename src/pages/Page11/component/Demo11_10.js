import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo11_10 = () => {

  return (
    <UnitContent title={'NB 三人组 排序小结'}>
      <Wrapper>
        <div>快速排序（quickSort），堆排序（heapSort），归并排序（mergeSort）</div>
        <div>三种排序算法的 时间复杂的：O(n*logn)</div>
        <div>{`运行耗时: 快速排序 < 堆排序 < 归并排序`}</div>
        <div>快速排序：极端情况下排序效率低</div>
        <div>堆排序：在快的排序算法中相对较慢</div>
        <div>归并排序：需要额外的内存开销</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .second_level {
    padding-left: 30px;
  }
`

export default Demo11_10
