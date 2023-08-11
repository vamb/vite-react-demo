import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo8_3 = () => {
  return (
    <UnitContent title={'Demo8_3 grid-area demo'}>
      <Wrapper>
        <div className={'demo-8-3-header'}>Primary Navigation Or Tools</div>
        <div className={'demo-8-3-nav'}>Secondary Navigation</div>
        <div className={'demo-8-3-main'}>Main Content Space</div>
        <div className={'demo-8-3-aside'}>Tertiary Navigation</div>
        <div className={'demo-8-3-footer'}>Miscellaneous Information</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: grid;
  grid-template-areas:
        "header header header header"
        "nav main . aside"
        "nav footer footer footer";
  grid-gap: 10px;
  div {
    border: 2px solid #000;
    border-radius: 6px;
    padding: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }
  .demo-8-3-header {
    grid-area: header;
    background: #e9bb59;
  }
  .demo-8-3-nav {
    grid-area: nav;
    background: #608f32;
  }
  .demo-8-3-main {
    grid-area: main;
    background: #2b32ab;
  }
  .demo-8-3-aside {
    grid-area: aside;
    background: #9137b0;
  }
  .demo-8-3-footer {
    grid-area: footer;
    background: #e27f5a;
  }
`

export default Demo8_3
