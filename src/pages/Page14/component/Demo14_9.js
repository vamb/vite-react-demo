import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { observable, autorun, computed } from 'mobx'
import { observer } from 'mobx-react'
import { Input } from 'antd'

const store = observable({
  firstName: 'firstName',
  lastName: 'lastName',
  fullName: 'firstName lastName'
})

const autoCombine = () => {
  return `${store.firstName} ${store.lastName}`
}

const temp = computed(()=>autoCombine())

autorun(()=>autoCombine())

const Demo14_9 = observer(()=> {

  return (
    <UnitContent title={'Demo14_9 class mobx'}>
      <Wrapper>
        <div>
          <Input
            style={{width: '200px'}}
            allowClear={true}
            value={store.firstName}
            placeholder={'firstName'}
            onChange={(e)=>store.firstName = e.target.value}
          />
          <Input
            style={{width: '200px'}}
            allowClear={true}
            value={store.lastName}
            placeholder={'lastName'}
            onChange={(e)=>store.lastName = e.target.value}
          />
        </div>
        <div>
          <Input
            style={{width: '200px'}}
            allowClear={true}
            value={temp}
            placeholder={'fullName'}
            onChange={(e)=>store.fullName = e.target.value}
          />
          <div>{autoCombine()}</div>
        </div>
      </Wrapper>
    </UnitContent>
  )
})

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`

export default Demo14_9
