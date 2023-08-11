import React from 'react'
import widthFetch from './widthFetch'

const url = 'https://jsonplaceholder.typicode.com/users?_limit=5'

const UserList = ({list}) =>{
  return(
    <ul>
      {
        Array.isArray(list) && list.length>0 &&
        list.map((item, idx)=>{
          return(
            <li key={item['id'] + '-user-' + idx}>{`用户名是: ${item['name']}`}</li>
          )
        })
      }
    </ul>
  )
}

export default widthFetch(UserList, url)