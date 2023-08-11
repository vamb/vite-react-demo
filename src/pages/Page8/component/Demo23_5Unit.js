import React, { memo } from 'react'
import { Switch } from "antd";
import img21 from './assets/demo21.jpg'

const Demo23_5Unit = memo(props => {
  const { value, updateValue, defaultCss, infoText, style } = props
  const oppoCss = defaultCss + '-false'
  return(
    <div className={'demo-content'}>
      <div className={'ctrl-unit'}>
        <div><Switch checked={value} onChange={e=>updateValue(e)}/></div>
        <div>{infoText}</div>
      </div>
      <img
        className={'demo-img'}
        src={img21}
        onClick={()=>updateValue(!value)}
        alt={''}
      />
      <div className={'img-cover'} style={{animationName: value? defaultCss: oppoCss, ...style}} />
    </div>
  )
})

export default Demo23_5Unit
