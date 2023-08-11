import React from 'react'
import BtnGroups from "./BtnGroups"
import ShowArea from "./ShowArea"
import { SelfCountContent } from './SelfCountContent'
import UnitContent from "../../components/UnitContent";

export default function SelfCount(){
  return (
    <UnitContent title={'SelfCount'}>
      <SelfCountContent>
        <ShowArea />
        <BtnGroups />
      </SelfCountContent>
    </UnitContent>
  )
}
