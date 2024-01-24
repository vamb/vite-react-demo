import React, { useEffect } from 'react'
import styled from "styled-components";
import UnitContent from "../../../components/UnitContent";
import { XMindEmbedViewer } from 'xmind-embed-viewer'

const Demo32_1 = () => {

  const generate = async () => {
    const viewer = new XMindEmbedViewer({
      el: '#embed-dom', // HTMLElement | HTMLIFrameElement | string
      // 如果在中国大陆境内速度慢，可以添加的参数 `region: 'cn'` 改为使用 xmind.cn 的图库作为依赖。
      // region: 'cn' //optinal, global(default) or cn
    })
    viewer.setStyles({
      width: '100%'
    })
    await fetch('b.xmind')
      .then(res => res.arrayBuffer())
      .then(file => viewer.load(file))
  }

  useEffect(()=>{
    generate()
  },[])

  return (
    <UnitContent title={'32_1 加载本地的xmind文件'}>
      <Wrapper>
        <div id={'embed-dom'}></div>
      </Wrapper>
    </UnitContent>

  )
}

const Wrapper = styled('div')`

`

export default Demo32_1
