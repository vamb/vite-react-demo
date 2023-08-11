import React, { memo, useState } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Select, Form } from 'antd'
import Demo25Cost from './Demo25Cost'

const { Item } = Form

const Demo25 = memo(()=>{
  const [ selectValue, setSelectValue ] = useState(Demo25Cost.OPTIONS[0].value)
  const [ itemValue, setItemValue ] = useState(Demo25Cost.ITEMS_OPT[0].value)
  const [ justifyItems, setJustifyItems ] = useState(Demo25Cost.ITEMS_OPT[0].value)
  const [ justifyContent, setJustifyContent ] = useState(Demo25Cost.JUSTIFY_CONTENT[0].value)
  const [ leftDir, setLeftDir ] = useState(Demo25Cost.DIRECTION[0].value)
  const [ rightDir, setRightDir ] = useState(Demo25Cost.DIRECTION[1].value)
  const [ leftWritingMode, setLeftWritingMode ] = useState(Demo25Cost.WRITE_MODE[2].value)
  const [ rightWritingMode, setRightWritingMode ] = useState(Demo25Cost.WRITE_MODE[2].value)

  return(
    <UnitContent title={'Demo25 grid demo'}>
      <Wrapper>
        <div className={'main-content'}>
          <div>
            <div className={'test-unit'} />
            <div className={'test-unit'} />
            <div className={'test-unit'} />
            <div className={'test-unit'} />
            <div className={'test-unit'} />
            <div className={'test-unit'} />
            <div className={'test-unit'} />
            <div className={'test-unit'} />
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div className={'third-part'}>
          <Form style={{position: 'absolute', top: '5px', left: '1%'}} layout="inline">
            <Item label={'flex-direction'}>
              <Select
                value={selectValue}
                onChange={e=>setSelectValue(e)}
                style={{width: '150px'}}
              >
                {
                  Demo25Cost.OPTIONS.map((item, idx)=>{
                    return <Select.Option value={item.value} key={`test-opt-${idx}`}>{item.label}</Select.Option>
                  })
                }
              </Select>
            </Item>
            {/*<Item label={'justify-items(无效)'}>*/}
            {/*  <Select*/}
            {/*    value={justifyItems}*/}
            {/*    onChange={e=>setJustifyItems(e)}*/}
            {/*    style={{width: '150px'}}*/}
            {/*  >*/}
            {/*    {*/}
            {/*      Demo25Cost.ITEMS_OPT.map((item, idx)=>{*/}
            {/*        return <Select.Option value={item.value} key={`test-justify-item-opt-${idx}`}>{item.label}</Select.Option>*/}
            {/*      })*/}
            {/*    }*/}
            {/*  </Select>*/}
            {/*</Item>*/}
            <Item label={'justify-content'}>
              <Select
                value={justifyContent}
                onChange={e=>setJustifyContent(e)}
                style={{width: '150px'}}
              >
                {
                  Demo25Cost.JUSTIFY_CONTENT.map((item, idx)=>{
                    return <Select.Option value={item.value} key={`test-justify-content-opt-${idx}`}>{item.label}</Select.Option>
                  })
                }
              </Select>
            </Item>
            <Item label={'align-items'}>
              <Select
                value={itemValue}
                onChange={e=>setItemValue(e)}
                style={{width: '150px'}}
              >
                {
                  Demo25Cost.ITEMS_OPT.map((item, idx)=>{
                    return <Select.Option value={item.value} key={`test-item-opt-${idx}`}>{item.label}</Select.Option>
                  })
                }
              </Select>
            </Item>
          </Form>
          <div className={'left-ctl'}>
            <Form layout="inline">
              <Item label={'left-dir'}>
                <Select
                  value={leftDir}
                  onChange={e=>setLeftDir(e)}
                  style={{width: '150px'}}
                >
                  {
                    Demo25Cost.DIRECTION.map((item, idx)=>{
                      return (
                        <Select.Option
                          value={item.value}
                          key={`test-left-dir-opt-${idx}`}
                        >{item.label}</Select.Option>
                      )
                    })
                  }
                </Select>
              </Item>
              <Item label={'left-writing-mode'}>
                <Select
                  value={leftWritingMode}
                  onChange={e=>setLeftWritingMode(e)}
                  style={{width: '150px'}}
                >
                  {
                    Demo25Cost.WRITE_MODE.map((item, idx)=>{
                      return (
                        <Select.Option
                          value={item.value}
                          key={`test-left-write-mode-opt-${idx}`}
                        >{item.label}</Select.Option>
                      )
                    })
                  }
                </Select>
              </Item>
            </Form>
          </div>
          <div className={'right-ctl'}>
            <Form layout="inline">
              <Item label={'right-dir'}>
                <Select
                  value={rightDir}
                  onChange={e=>setRightDir(e)}
                  style={{width: '150px'}}
                >
                  {
                    Demo25Cost.DIRECTION.map((item, idx)=>{
                      return (
                        <Select.Option
                          value={item.value}
                          key={`test-right-dir-opt-${idx}`}
                        >{item.label}</Select.Option>
                      )
                    })
                  }
                </Select>
              </Item>
              <Item label={'right-writing-mode'}>
                <Select
                  value={rightWritingMode}
                  onChange={e=>setRightWritingMode(e)}
                  style={{width: '150px'}}
                >
                  {
                    Demo25Cost.WRITE_MODE.map((item, idx)=>{
                      return (
                        <Select.Option
                          value={item.value}
                          key={`test-right-write-mode-opt-${idx}`}
                        >{item.label}</Select.Option>
                      )
                    })
                  }
                </Select>
              </Item>
            </Form>
          </div>
          <div
            className={'third-left'}
            dir={leftDir}
            style={{
              flexDirection: selectValue, justifyContent: justifyContent,
              justifyItems: justifyItems, alignItems: itemValue,
              writingMode: leftWritingMode
            }}
          >
            <div className="item">Flex项目1</div>
            <div className="item">Flex项目2</div>
            <div className="item">Flex项目3</div>
          </div>
          <div
            className={'third-right'}
            dir={rightDir}
            style={{flexDirection: selectValue, justifyContent: justifyContent,
              justifyItems: justifyItems, alignItems: itemValue,
              writingMode: rightWritingMode
            }}
          >
            <div className="item">عنصر فليكس1</div>
            <div className="item">عنصر فليكس2</div>
            <div className="item">عنصر فليكس3</div>
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  .main-content {
    box-sizing: border-box;
    border: 1px solid blueviolet;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 10px 10px;
    background: skyblue;
    padding: 10px;
    border-radius: 6px;
  }
  .main-content > div {
    height: 90px;
    background: #fff;
  }
  .main-content> div:nth-child(1){
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 5px;
    box-sizing: border-box;
    background: #BEE7E9;
    justify-items: stretch;
    align-items: stretch;
    padding: 5px;
  }
  .test-unit {
    box-sizing: border-box;
    background: #ECAD9E;
    border: 1px solid #000;
    border-radius: 6px;
  }
  .third-part {
    display: flex;
    width: 100%;
    margin-top: 10px;
  }
  .third-part {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 50px 20px 20px 20px;
    background: lightgreen;
    align-items: stretch;
    justify-items: stretch;
    border-radius: 6px;
    position: relative;
    & > .left-ctl, .right-ctl {
      width: 100%;
    }
    & > .third-left, .third-right {
      background: #fff;
      border: 1px solid lightgrey;
      border-radius: 6px;
      min-height: 150px;
      display: flex;
      & > div {
        background: khaki
        box-sizing: border-box;
        padding: 5px;
        border: 1px solid blueviolet;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-duration: 0.1s, 0.1s;
        transition-delay: 0s, 0s;
        transition-timing-function: ease-in-out, ease-in-out;
      }
    }
  }
`

export default Demo25
