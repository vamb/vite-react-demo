import React from 'react'
import widthFetch from './widthFetch'

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=5'

const PhotoList = ({list}) =>{
  return(
    <ul>
      {
        Array.isArray(list) && list.length>0 &&
          list.map((item, idx)=>{
            return <li key={item['id'] + idx}>{`图片URL是： ${item['url']}`}</li>
          })
      }
    </ul>
  )
}

export default widthFetch(PhotoList, url)