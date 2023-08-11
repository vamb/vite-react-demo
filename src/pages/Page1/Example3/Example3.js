import React, { useState, useEffect } from 'react'
import Example3Content from './Example3Content'
import UnitContent from "../../components/UnitContent";

function Example3(){
    return(
        <UnitContent title={'Example 3'}>
            Example3Content<br/>
            <Example3Content />
        </UnitContent>
    )
}

export default Example3
