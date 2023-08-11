import React from 'react'
import { ColorContent } from './ColorContent'
import ShowArea from './ShowArea'
import BtnGroup from './BtnGroup'
import UnitContent from "../../components/UnitContent";

export default function Example8(){
  return(
    <UnitContent title={'Example 8'}>
      <ColorContent>
        <ShowArea /><br/>
        <BtnGroup />
      </ColorContent>
    </UnitContent>
  )
}
