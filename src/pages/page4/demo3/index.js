import React from 'react'
import PhotoList from "./PhotoList";
import UserList from "./UserList";
import UnitContent from "../../components/UnitContent";

const demo4_3 = () =>{
  return (
    <UnitContent title={'Page4 Demo3'}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <PhotoList />
        <UserList />
      </div>
    </UnitContent>
  )
}

export default demo4_3
