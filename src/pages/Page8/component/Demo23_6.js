import React, { useState } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { Select, Form, InputNumber } from 'antd'
import demoImg from './assets/23_6.jfif'

const Demo23_6 = () => {
  const [ img1ObjectFit, setImg1ObjectFit ] = useState('initial')
  const [ imgWidth, setImgWidth ] = useState(1)
  const [ imgHeight, setImgHeight ] = useState(1)

  return (
    <UnitContent title={'23_6 object-fit aspect-ratio'}>
      <Wrapper>
        <div className={'left'}>
          <div>原始图片</div>
          <img src={demoImg} alt={''} />
        </div>
        <div className={'right'}>
          <div>
            <div className={'img-content'} style={{aspectRatio: `${imgWidth/imgHeight}`}}>
              <img
                src={demoImg} alt={''}
                style={{ objectFit: img1ObjectFit }}
              />
            </div>
            <div className={'display-label'}>
              <div>{`object-fit: ${img1ObjectFit}`}</div>
              <div>{`aspect-ratio: ${imgWidth}/${imgHeight}`}</div>
            </div>
          </div>
          <div>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Form.Item label={'object-fit'}>
                <Select
                  style={{width: '200px'}}
                  allowClear={true}
                  onChange={e=>setImg1ObjectFit(e)}
                  value={img1ObjectFit}
                >
                  <Select.Option value={'initial'}>initial</Select.Option>
                  <Select.Option value={'cover'}>cover</Select.Option>
                  <Select.Option value={'none'}>none</Select.Option>
                  <Select.Option value={'fill'}>fill</Select.Option>
                  <Select.Option value={'contain'}>contain</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label={'width size'}>
                <InputNumber
                  value={imgWidth}
                  style={{width: '200px'}} min={1} max={3} step={1}
                  onChange={e=>setImgWidth(e)}
                />
              </Form.Item>
              <Form.Item label={'height size'}>
                <InputNumber
                  value={imgHeight}
                  style={{width: '200px'}} min={1} max={3} step={1}
                  onChange={e=>setImgHeight(e)}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  background-color: lightgray
  & > div {
    width: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    border: 1px solid #222;
    border-radius: 6px;
    background-color: #fff;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    & > div:nth-child(1) {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    img {
      display: block;
      width: 75%;
    }
  }
  .right {
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    & > div:nth-child(1) {
      width: 60%;
      // background-color: lightblue;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      border-right: 1px solid lightgray;
      box-sizing: border-box;
      .img-content {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: blueviolet;
      }
      img {
        background-color: #222;
        border-radius: 4px;
        border: 1px solid lightgray;
        width: 100%;
      }
      .display-label {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        background-color: #fff;
      }
    }
    & > div:nth-child(2) {
      width: 40%;
      // background-color: lightgreen;
      display: flex;
      flex-direction: row;
      justify-content: center;
      box-sizing: border-box;
      padding: 20px 0;
    }
  }
`

export default Demo23_6
