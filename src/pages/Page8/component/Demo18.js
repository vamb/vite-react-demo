import React, { memo } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo18 = memo(()=>{
  console.log('this', this)
  const fn=()=>{
    console.log('fn this', this)
  }
  let aaa = {
    sayHi: function (){
      console.log('aaa sayHi this', this)
    }
  }
  aaa.sayHi()
  return(
    <UnitContent title={'Demo18'}>
      <Wrapper>
        <article>
          <p>因为react目前的架构会对this进行干扰，因此请参考 DemoThis.html</p>
        </article>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`

`

export default Demo18
