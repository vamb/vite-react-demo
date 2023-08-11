import React, { useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import defaultImg from '../component/assets/demo21.jpg'

const Demo28_14 = () => {

  useEffect(()=>{
    const ob = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = `https://picsum.photos/200/200?r=${Math.random()}`
          ob.unobserve(img) // 已经完成了图片更新，取消监听该对象
        }
      }
    });

    const imgs = document.querySelectorAll('.image-obj');
    imgs.forEach(img => {
      ob.observe(img)
    })
  },[])

  const imgUnitArr = []
  for(let i=0;i<100;i++){
    imgUnitArr.push(
      <div key={`28-14-item-${i}`}>
        <img className={'image-obj'} src={defaultImg} alt={'img'} />
      </div>
    )
  }

  return(
    <UnitContent title={'28_14 懒加载'}>
      <Wrapper>
        {imgUnitArr}
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  & > div {
    border-radius: 4px;
    width: 200px;
    height: 200px;
    aspect-ratio: 1/1;
    transition: all 0.2s;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & > div:hover {
    opacity: 0.8;
  }
`

export default Demo28_14
