import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo28_2 = () => {
  return (
    <UnitContent title={'28_2 卡券'}>
      <Wrapper>
        <div className={'coupon-content'}>
          <div className={'coupon-left'}>
            <div className={'left-title'}>优惠券</div>
            <div className={'left-info'}>满10000元使用</div>
            <div className={'left-bottom'}>
              <div>点击领取</div>
            </div>
          </div>
          <div className={'coupon-right'}>
            <div>
              <span>￥</span>
              <span>9999</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: lightgray;
  box-sizing: border-box;
  :root {
    --c1: orange;
    --c2: #ff2e63;
    --c3: #fff;
  }
  .coupon-content {
    width: 550px;
    height: 180px;
    display: flex;
    flex-direction: row;
    position: relative;
    box-sizing: border-box;
    & > div {
      box-sizing: border-box;
      flex-grow: 1;
      width: 100%;
      height: 100%;
      filter: drop-shadow(4px 4px 0 rgba(226, 216, 216, 0.1));
    }
    .coupon-left {
      // background-color: lightgreen;
    }
    .coupon-right {
      // background-color: lightblue;
    }
  }
  .coupon-content::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: absolute;
    left: 0;
    top: 0;
    // background: linear-gradient(45deg, var(--c1), var(--c2));
    background: linear-gradient(45deg, orange, #ff2e63);
    /* 添加mask遮罩 */
    /* mask遮罩：通过在特定点屏蔽或裁剪图像来隐藏元素（部分或者全部） */
    -webkit-mask: radial-gradient(circle at 50%, red 5px, #0000 0) 50% 50% /
        100% 20px,
      radial-gradient(circle at 20px 20px, #0000 20px, red 0) -20px -20px /
        50%;
    /* mask-composite:表示在当前遮罩及其下方的遮罩层的合成操作 */
    /* 通俗说法：当一个元素存在多重mask的时候，我们就可以运用mask-composite进行效果叠加 */
    /* destination-out：只显示下方遮罩，重合的地方不显示 */
    -webkit-mask-composite: destination-out;
  }
  .coupon-left {
    display: flex;
    flex-direction: column;
    & > div {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    .left-title {
      font-size: 14px;
      margin-bottom: -50px;
    }
    .left-title::before, .left-title::after {
      content: '';
      width: 30px;
      height: 4px;
    }
    .left-title::before {
      background: linear-gradient(-250deg, transparent 0%, #fff 100%);
      margin-right: 10px;
    }
    .left-title::after {
      background: linear-gradient(250deg, transparent 0%, #fff 100%);
      margin-left: 10px;
    }
    .left-info {
      font-size: 24px;
      margin-bottom: -50px;
    }
    .left-bottom {
      & > div {
        padding: 5px 20px;
        border-radius: 90px;
        background: #fff;
        color: red;
        user-select: none;
        cursor: pointer;
      }
    }
  }
  .coupon-right {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    &>div>span:nth-child(1) {
      font-size: 24px;
    }
    &>div>span:nth-child(2) {
      font-size: 48px;
    }
  }
`

export default Demo28_2
