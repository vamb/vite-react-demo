import React, { useState, useEffect } from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";

const Demo28_7 = () => {
  const [ val, setVal ] = useState(50)

  useEffect(()=>{
    let i = 0;
    let timer = null;
    const loading = () => {
      if (i < 100) {
        i++;
        // 设置CSS变量
        setVal(i)
      } else {
        i = 0;
        setVal(i)
        clearInterval(timer);
        setTimeout(() => {
          // 设置CSS变量
          timer = setInterval(loading, 100);
        }, 2000);
      }
    };
    loading();
    timer = setInterval(loading, 100);
  },[])

  return (
    <UnitContent title={'28_7 进度条'}>
      <Wrapper title={'进度条'}>
        <div>
          <div
            className={'progress'}
            style={{
              background: `linear-gradient(to right, transparent 10px, #222 0) 0 0/20px,
              linear-gradient(to right, orange, orange) 0 0 / ${val}% no-repeat #eee`
            }}
          />
          <div className={'displayNum'}>{`${val}%`}</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

/* 从上到下，蓝色渐变到红色 */
// linear-gradient(blue, red);

/* 渐变轴为45度，从蓝色渐变到红色 */
// linear-gradient(45deg, blue, red);

/* 从右下到左上、从蓝色渐变到红色 */
// linear-gradient(to left top, blue, red);

/* 从下到上，从蓝色开始渐变、到高度40%位置是绿色渐变开始、最后以红色结束 */
// linear-gradient(0deg, blue, green 40%, red);

const Wrapper = styled('div')`
  height: 50px;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    .progress {
      width: 350px;
      height: 30px;
      transform: skewX(-30deg);
      // background-image: linear-gradient(to right, transparent 10px, #222 0px), linear-gradient(to right, orange, orange);
    }
    .displayNum {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
    }
  }
`

export default Demo28_7
