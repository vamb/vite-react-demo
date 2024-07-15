import { useEffect, useState } from 'react'
import styled from "styled-components";
// @ts-ignore
import { Button } from "antd";

interface ContentProps {
  idx?: any,
  unitTitle?: any,
  title?: any,
  children: any,
  disBtn?: boolean,
  label?: any
}

const UnitContent = (props: ContentProps) =>{
  const { idx, unitTitle, title, disBtn, label } = props
  const [ hideContent, setHideContent ] = useState(false)

  useEffect(()=>{
    disBtn? setHideContent(disBtn): null
  },[disBtn])


  return (
    <Wrapper>
      { !hideContent && props.children }

      {
        (idx || unitTitle || title) && !label &&
        // @ts-ignore
        <div className={'common-unit-content-idx-display'}>{`${idx? idx: ''} ${unitTitle || title}`}</div>
      }
      {
        (idx || unitTitle || title) && label &&
        <>
          {/* @ts-ignore */}
          <div className={'common-unit-content-idx-display'}>
            {/* @ts-ignore */}
            <div className={'strong'}>{`${idx? idx: ''} ${unitTitle || title}`}</div>
            {/* @ts-ignore */}
            <div>{label || ''}</div>
            {/* @ts-ignore */}
          </div>
        </>
      }
      {
        disBtn &&
        <Button
          type={'primary'} size={'small'} className={'common-unit-content-btn-display'}
          onClick={()=>setHideContent(!hideContent)}
        >{hideContent? '展示': '隐藏'}</Button>
      }
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  padding: 20px;
  border: 1px dashed #ddd;
  margin: 20px 0;
  position: relative;
  .common-unit-content-idx-display {
    position: absolute;
    top: 1px;
    left: 10px;
    font-size: 12px;
    font-weight: 500;
    opacity: 0.6;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
  }
  .common-unit-content-btn-display {
    position: absolute;
    top: 1px;
    right: 10px;
  }
  .strong {
    font-weight: bold;
  }
`

export default UnitContent
