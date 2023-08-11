import React, { memo } from 'react'
import UnitContent from "../../components/UnitContent";

const Demo11 = memo(() =>{


  // let grade = {
  //   李四: { js: 100, css: 89 },
  //   李四: { js: 35, css: 55 },
  // }
  // console.log(grade) // 李四: {js: 35, css: 55}


  // let user1 = "李四"
  // let user2 = "李四"
  // let grade = {
  //   user1: { js: 100, css: 89 },
  //   user2: { js: 35, css: 55 }
  // }
  // console.log(grade) // {user1: {js: 100, css: 89}, user2: {js: 35, css: 55}}
  // let grade2 = {
  //   [user1]: { js: 100, css: 89 },
  //   [user2]: { js: 35, css: 55 }
  // }
  // console.log(grade2) // {李四: {js: 35, css: 55}}



  // let user1 = {
  //   name: "李四",
  //   key: Symbol()
  // }
  // let user2 = {
  //   name: "李四",
  //   key: Symbol()
  // }
  // let grade = {
  //   [user1.key]: { js: 100, css: 89 },
  //   [user2.key]: { js: 35, css: 55 }
  // }
  // console.log(grade[user1.key]) // {js: 100, css: 89}




  // class Cache {
  //   static data = {}
  //   static set = (name, value)=>{
  //     return (this.data[name] = value)
  //   }
  //   static get = (name) =>{
  //     return this.data[name]
  //   }
  // }
  //
  // let user = {
  //   name: 'apple',
  //   desc: '用户资料',
  //   key: Symbol("资料")
  // }
  // let cart = {
  //   name: "apple",
  //   desc: "购物车",
  //   key: Symbol("资料")
  // }
  // Cache.set(user.key, user)
  // Cache.set(cart.key, cart)
  // console.log(Cache.get(user.key)) // {name: 'apple', desc: '用户资料', key: Symbol(资料)}
  // console.log(Cache.get(cart.key)) // {name: 'apple', desc: '购物车', key: Symbol(资料)}



  // let sy = Symbol("这是一个Symbol类型")
  // let testObj = {
  //   name: '测试name',
  //   [sy]: 'ppp'
  // }
  // for(const key in testObj){
  //   console.log(key)
  // }// name
  // for(const key of Object.getOwnPropertySymbols(testObj)){
  //   console.log(key)
  // }// Symbol(这是一个Symbol类型)
  // for(const key of Reflect.ownKeys(testObj)){
  //   console.log(key)
  // }// name Symbol(这是一个Symbol类型)


  // let site = Symbol("这是一个Symbol类型")
  // class User {
  //   constructor(name) {
  //     this.name = name
  //     this[site] = "ABCD"
  //   }
  //   getName(){
  //     return `${this[site]} ${this.name}`
  //   }
  // }
  // let newUser = new User("haha")
  // console.log(newUser.getName()) // ABCD haha

  return (
    <UnitContent unitTitle={'Demo11'}>demo 11</UnitContent>
  )
})

export default Demo11
