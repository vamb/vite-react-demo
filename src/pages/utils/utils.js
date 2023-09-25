import { message } from "antd";
import React from 'react'

// 浅拷贝
export const shallowClone = (source) => {
  let target = {};
  for(let i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }
  return target;
}

// 深拷贝
export const deepClone = source => {
  if (source === null) return source;
  if (source instanceof Date) return new Date(source);
  if (source instanceof RegExp) return new RegExp(source);
  if (typeof source !== "object") return source;
  let cloneObj = new source.constructor();
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(source[key]);
    }
  }
  return cloneObj;
}

export const handleCopyAction = (str, subCount) => {
  const textValue = document.createElement('textarea');
  textValue.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
  textValue.value = str; //上面selectText函数返回值赋给textarea的value
  document.body.appendChild(textValue); //将textarea添加为body子元素
  textValue.select();

  document.execCommand('copy');
  document.body.removeChild(textValue);//移除DOM元素

  const newSubCount = subCount || 10
  const displayPrefix = str?.length > newSubCount? str.substring(0, newSubCount) + '...': str

  message.success(`【${displayPrefix}】 已复制到剪切板`)
}

export const DEFAULT_TAB_HEIGHT = 62
export const findPageContentHeight = () => {
  const pageContentDom = document.getElementsByClassName('page-content')?.[0]
  return pageContentDom? pageContentDom.clientHeight: 0
}

export const generateRandomArr = (length, limit) => {
  const tempArr = []
  if(length) {
    if(limit) {
      for(let i=0;i<length;i++){
        tempArr.push(Math.floor(Math.random() * limit))
      }
    }else{
      for(let i=0;i<length;i++){
        tempArr.push(Math.floor(Math.random()))
      }
    }
  }
  return tempArr
}
