import React from 'react'
import UnitContent from "../../components/UnitContent";
import styled from "styled-components";
import { observable, autorun } from 'mobx'
import { observer } from 'mobx-react'
import { Button, Input } from 'antd'

const todoListStore = observable([
  { title: 'work1', completed: false },
  { title: 'work2', completed: false },
], { deep: false})

const handleText = () => {
  let prefixText = 'Remaining works: '
  let pendingWorksText = ''
  for(let i=0;i<todoListStore.length;i++){
    if(!todoListStore[i].completed) {
      pendingWorksText += todoListStore[i].title
      if(i !== todoListStore.length - 1) {
        pendingWorksText += ', '
      }
    }
  }
  return pendingWorksText? `${prefixText}${pendingWorksText}`: 'All done'
}

autorun(()=>handleText())

const addTask = (taskTitle) => {
  todoListStore.push({
    title: taskTitle,
    completed:  false
  })
}

const Demo14_8 = () => {
  const [ tempTitle, setTempTitle ] = React.useState('')

  const todoList = []
  for (let i=0;i<todoListStore.length; i++) {
    todoList.push(
      <div
        key={`task-unit-${i}`}
        style={{textDecoration: todoListStore?.[i]?.completed? 'line-through': 'auto'}}
        onClick={()=>{
          todoListStore[i] = {
            title:todoListStore?.[i]?.title,
            completed: !todoListStore?.[i]?.completed
          }
        }}
      >{todoListStore?.[i]?.title}</div>
    )
  }

  return (
    <UnitContent title={'Demo14_8 mobx array'}>
      <Wrapper>
        <div className={'line'}>
          <Input
            style={{width: '200px'}}
            allowClear={true}
            value={tempTitle}
            placeholder={'new task title'}
            onChange={(e)=>setTempTitle(e.target.value)}
          />
          <Button
            type={'primary'}
            onClick={()=> {
              addTask(tempTitle)
              setTempTitle('')
            }}
          >提交</Button>
        </div>
        <div className={'task-content'}>
          {todoList}
        </div>
        <div>{handleText()}</div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .line {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .task-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    user-select: none;
    & > div {
      cursor: pointer;
      user-select: none;
    }
  }
`

export default observer(Demo14_8)
