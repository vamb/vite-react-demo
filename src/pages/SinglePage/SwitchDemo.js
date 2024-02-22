import React, { useEffect } from 'react'
import styled from "styled-components";

const SwitchDemo = () => {

  return (
    <Wrapper>
      <div id="expanding-cards">
        <input type="radio" name="select" id="active1" checked/>
        <label htmlFor="active1" />
        <input type="radio" name="select" id="active2"/>
        <label htmlFor="active2" />
        <input type="radio" name="select" id="active3"/>
        <label htmlFor="active3" />
        <input type="radio" name="select" id="active4"/>
        <label htmlFor="active4" />
        <input type="radio" name="select" id="active5"/>
        <label htmlFor="active5" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  justify-content: center;
  
  #expanding-cards {
    display: flex;
    width: 80vw;
  }

  label {
    cursor: pointer;
    height: 80vh;
    flex: 0.5;
    margin: 10px;
    border-radius: 60px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.7s ease-in;
  }

  input[type="radio"] {
    display: none;
  }
  
  input:checked+label {
    flex: 5;
  }
  
  label:nth-of-type(1) {
    background-image: url(http://pic21.photophoto.cn/20111120/0020032845797770_b.jpg);
  }
  
  label:nth-of-type(2) {
    background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F0e2442a7d933c895d14379402c4264f082025aafaaf4&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671257824&t=665ccdd8d36205465a3f19a7f2af8a6a);
  }
  
  label:nth-of-type(3) {
    background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F83025aafa40f4bfbfbed776ffe1e6ff0f736afc3b2f4&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671257861&t=97434d372d580d581475ca35e6d72f8b);
  }
  
  label:nth-of-type(4) {
    color: orange;
    background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fb17eca8065380cd791235ff72908ba345982b2b72bde&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671257912&t=c1126fb5e68d9913909ffa9be5a897f7);
  }
  
  label:nth-of-type(5) {
    background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F03087bf40ad162d9f2d38b05218dbeec8a13632767d5&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671257940&t=ef2990b6661ac1722b80332784d54f80);
  }
`

export default SwitchDemo
