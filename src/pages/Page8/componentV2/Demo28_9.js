import React, { useEffect, useState } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo28_9 = () => {
  const [ renderCount, setRenderCount ] = useState(34)

  const resizeFun = () => {
    const contentObj = document.querySelector('.content')
    const contentWidth = contentObj.offsetWidth

    const imgs = contentObj.children

    const imgItemWidth = imgs[0].offsetWidth

    // 获取第一行有几个图片单元
    const nums = Math.floor(contentWidth / imgItemWidth)

    // 收集第一行的所有高度
    const arrHeight = []

    for(let i=0;i<imgs.length;i++){
      if(i<nums){ // 这里都是第一行的元素
        arrHeight.push(imgs[i].offsetHeight)
      }else {
        let obj = {
          minH: arrHeight[0],
          minIdx: 0
        }
        for(let j=0;j<arrHeight.length;j++){
          if(arrHeight[j] < obj.minH){
            obj.minH = arrHeight[j]
            obj.minIdx = j
          }
        }
        imgs[i].style.position = 'absolute'
        imgs[i].style.left = `${imgs[obj.minIdx].offsetLeft}px`
        imgs[i].style.top = `${obj.minH}px`

        arrHeight[obj.minIdx] = arrHeight[obj.minIdx] + imgs[i].offsetHeight
      }
    }

    let maxHeight = arrHeight[0]
    for(let i=0;i<arrHeight.length;i++){
      if(arrHeight[i] > maxHeight){
        maxHeight = arrHeight[i]
      }
    }
    contentObj.style.height = `${maxHeight}px`
  }

  useEffect(()=>{
    resizeFun()
    window.addEventListener('resize', resizeFun)
    return ()=> window.removeEventListener('resize', resizeFun)
  },[])

  const handleImgName =(num)=> {
    const restNum = (num % 17) + 1
    if(restNum<10){
      return '0' + restNum
    }else{
      return restNum
    }
  }

  const imgList = (count) => {
    const tempArr = []
    for(let i=0;i<count;i++){
      // const currImg = import(`./imgRes/${handleImgName(i)}.jpg`)
      const currImg = new URL(`./imgRes/${handleImgName(i)}.jpg`, import.meta.url).href
      tempArr.push(
        <div key={`img-item-${i}`}>
          <img
            //从第二次开始图片加载就是从内从中加载，然后从内存中拿到的图片是有问题的，不知道为什么
            onLoad={()=>resizeFun()}
            src={currImg} alt={''} />
        </div>
      )
    }
    return tempArr
  }

  return (
    <UnitContent title={'28_9 瀑布流布局'}>
      <Wrapper>
        <div className={'content'}>{imgList(renderCount)}</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  background-color: #222;
  .content {
    width: 100%;
    height: 100%;
    position: relative;
    div {
      float: left;
      border: 1px solid lightgray;
      border-radius: 6px;
      padding: 10px;
      img {
        width: 180px;
      }
    }
  }
`

export default Demo28_9
