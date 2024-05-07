import React, { useState } from 'react'
import UnitContent from "../components/UnitContent";
import styled from "styled-components";
import { Input, Form } from 'antd'

class Person {
  constructor(name) {
    this.name = name
  }
  drink() {
    return (`${this.name} drink water`)
  }
}

class Student extends Person {
  constructor(name, score) {
    super(name);
    this.score = score
  }
  say () {
    return (`student: ${this.name} exam score: ${this.score}`)
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject
  }
  info () {
    return (`teacher: ${this.name} teach: ${this.subject}`)
  }
}

const Demo2_1 = () => {
  const [ personData, setPerson ] = useState(new Person('testPerson'))
  const [ stuData, setStudent ] = useState(new Student('testStudent', 99))
  const [ teacherData, setTeacher ] = useState(new Teacher('testTeacher', 'Science'))

  return (
    <UnitContent title={'Demo2_1原型链 简单案例'}>
      <Wrapper>
        <div className={'class-unit'}>
          <div>
            <span>Person Name: </span>
            <strong>{personData?.name}</strong>
            <span>, drink: </span>
            <strong>{personData.drink()}</strong>
          </div>
          <Form.Item label={'Person'}>
            <Input
              value={personData?.name}
              style={{width: '150px'}}
              onChange={e=>{
                const newPerson = new Person(e.target.value)
                setPerson(newPerson)
              }}
            />
          </Form.Item>
        </div>
        <div className={'class-unit'}>
          <div>
            <span>Student Name: </span>
            <strong>{stuData?.name}</strong>
            <span>, drink: </span>
            <strong>{stuData.drink()}</strong>
            <span>, say: </span>
            <strong>{stuData.say()}</strong>
          </div>
          <Form.Item label={'Student'}>
            <Input
              value={stuData?.name}
              style={{width: '150px'}}
              onChange={e=>{
                const newStu = new Student(e.target.value, 20)
                setStudent(newStu)
              }}
            />
          </Form.Item>
        </div>
        <div className={'class-unit'}>
          <div>
            <span>Teacher Name: </span>
            <strong>{teacherData?.name}</strong>
            <span>, drink: </span>
            <strong>{teacherData.drink()}</strong>
            <span>, info: </span>
            <strong>{teacherData.info()}</strong>
          </div>
          <Form.Item label={'Teacher'}>
            <Input
              value={teacherData?.name}
              style={{width: '150px'}}
              onChange={e=>{
                const newTeacher = new Teacher(e.target.value, teacherData.subject)
                setTeacher(newTeacher)
              }}
            />
          </Form.Item>
        </div>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .class-unit {
    display: flex;
    flex-direction: column;
    gap: 10px
    border-bottom: 1px solid lightgray;
  }
`

export default Demo2_1
