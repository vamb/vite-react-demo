import React, { memo } from 'react'
import { Switch } from "antd";
import img21 from './assets/demo21.jpg'

const Demo23Unit = memo(props => {
  const { value, updateValue, defaultCss, infoText, style } = props
  const oppoCss = defaultCss + '-false'
  return(
    <div className={'demo-content'} style={{...style}}>
      <div className={'ctrl-unit'}>
        <div><Switch checked={value} onChange={e=>updateValue(e)}/></div>
        <div>{infoText}</div>
      </div>
      <img
        className={'demo-img'}
        style={{animationName: value? defaultCss: oppoCss}}
        src={img21}
        onClick={()=>updateValue(!value)}
        alt={''}
      />
    </div>
  )
})

export default Demo23Unit
