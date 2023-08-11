import React, { memo } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo12 = memo(() =>{
  return(
    <UnitContent unitTitle={'Demo12'}>
      <Wrapper>
        <section>
          <div className={'title'}>{`1. !important >行内样式`}</div>
          <div className={'section-content'}>
            <h1 className={'aaa'} style={{color: 'blue'}}>h1 text</h1>
            <h2 className={'aaa'} style={{color: 'green'}}>h2 text</h2>
          </div>
        </section>
        <section>
          <div className={'title'}>{`2. 行内样式> ID 选择器`}</div>
          <div className={'section-content'}>
            <h1 id={"section2_h1"} style={{color: 'blue'}}>h1 text</h1>
            <h2 id={'section2_h2'} style={{color: 'green'}}>h2 text</h2>
          </div>
        </section>
        <section>
          <div className={'title'}>{`3. ID 选择器> 类选择器`}</div>
          <div className={'section-content'}>
            <h1 id={"section3_h1"} className={'section-3-class'}>h1 text</h1>
            <h2 id={'section3_h2'} className={'section-3-class'}>h2 text</h2>
          </div>
        </section>
        <section>
          <div className={'title'}>{`4. 类选择器> 标签选择器`}</div>
          <div className={'section-content'}>
            <span className={'section-4-class'}>h1 text</span>
            <span className={'section-4-class'}>h2 text</span>
          </div>
        </section>
        <section>
          <div className={'title'}>{`5. 标签选择器> 通配符选择器`}</div>
          <div className={'section-content'}>
            <label>h1 text</label>
            <label>h2 text</label>
          </div>
        </section>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  section {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    border: 1px solid #E6CEAC;
    padding: 10px;
    .title {
      font-size: 14px;
      font-weight: 700;
      color: #000;
    }
    .section-content {
      display: flex;
      flex-direction: column;
    }
  }
  
  .aaa {
    color: red !important;
  }
  
  #section2_h1, #section2_h2 {
    color: yellow;
  }
  
  .section-3-class {
    color: lightgreen;
  }
  #section3_h1, #section3_h2 {
    color: lightblue;
  }
  
  span {
    color: #19CAAD;
  }
  .section-4-class {
    color: blueviolet;
  }
  
  * {
    color: #ECAD9E;
  }
  label {
    color: blueviolet;
  }
`

export default Demo12
