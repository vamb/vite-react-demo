import React, { memo } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo13 = memo(()=>{
  return(
    <UnitContent unitTitle={'Demo13'}>
      <Wrapper>
        <div className={'box-split'}>
          <div className={'box-title'} id={'ppp'}>{`1. id选择器`}</div>
        </div>
        <div className={'box-split'}>
          <div className={'ppp'}>{`2. 类选择器`}</div>
        </div>
        <div className={'box-split'}>
          <div>{`3. 结构选择器，子和孙都起效 => article h2 {}`}</div>
          <article>
            <span>
              <h2>this is article h2</h2>
            </span>
          </article>
          <h2>this is outer h2</h2>
        </div>
        <div className={'box-split'}>
          <div>{`4. 结构选择器，只有子起效 #id > h2 {}`}</div>
          <div>
            <span>
              <h2>this is article h2</h2>
            </span>
          </div>
          <div id={'ppp-article'}>
            <h2>this is outer h2</h2>
            <span>
              <h2>this is span h2</h2>
            </span>
          </div>
        </div>
        <div className={'box-split'}>
          <div>{`5. 结构选择器，紧挨着的 => h1+h2`}</div>
          <h1>this is h1</h1>
          <h2 className={'test-h2'}>this is h2-1</h2>
          <h2 className={'test-h2'}>this is h2-2</h2>
        </div>
        <div className={'box-split'}>
          <div>{`6. 属性选择器，具有title属性的span被选中 => span[title]`}</div>
          <div className={'tips'}>react编译会把没有值的属性干掉</div>
          <div><span title={"aaa"}>span with title</span></div>
          <div><span>span without title</span></div>
        </div>
        <div className={'box-split'}>
          <div>{`7. * + * 测试(非第一个都选上)`}</div>
          <div>测试结果1</div>
          <div>测试结果2</div>
          <div>测试结果3</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  & > .box-split:nth-child(7) {
    & > * + * {
      color: blueviolet;
    }
    // & > :not(:first-child) {
    //   color: blueviolet;
    // }
  }
  .tips {
    font-size: 12px;
    color: #a29898;
  }
  .box-split {
    padding: 10px;
    border: 1px solid #E6CEAC;
    margin: 10px;
    display: flex;
    flex-direction: column;
  }
  // .box-split >:first-child {
  //   font-weight: 700;
  // }
  .box-split >:nth-child(1) {
    font-weight: 700;
  }
  //表示.box-split 的子h2，且这个h2在所有子的顺序中排在第4的那个被选中
  .box-split >h2:nth-child(4) {
    color: red;
  }
  #ppp {
    color: #19CAAD;
  }
  .ppp {
    color: #8CC7B5;
  }
  article h2 {
    color: blueviolet;
  }
  #ppp-article > h2 {
    color: blueviolet;
  }
  h1+h2 {
    color: blueviolet;
  }
  span[title] {
    color: blueviolet;
  }
`

export default Demo13
