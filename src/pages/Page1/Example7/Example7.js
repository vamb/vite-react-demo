import React from 'react'
import ShowArea from './ShowArea'
import Buttons from './Buttons'
import { Color } from './Color'
import UnitContent from "../../components/UnitContent";

function Example7(){
  return(
    <UnitContent title={'Example 7'}>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </UnitContent>
  )
}

export default Example7
