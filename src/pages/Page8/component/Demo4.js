import React from 'react'
import UnitContent from "../../components/UnitContent";

const funGroup1=()=>{
  const promise1 = new Promise((resolve, reject)=>{
    console.log(1)
    resolve('success')
  })
  promise1.then(()=>{
    console.log(3)
  })
  console.log(4)
  setTimeout(()=>{console.log(5)}, 0)
}

const funGroup2 =()=>{
  console.log('global begin');
  setTimeout(function timer1(){
    queueMicrotask(()=>{
      console.log('queueMicrotask')
    })
    console.log('timer1 invoke')
  },1800)
  console.log('global end')
}

const funGroup3=()=>{
  setTimeout(function(){   console.log('1') },0);
  new Promise(function(resolve){
    console.log('2');
    for(var i = 0; i < 10000; i++){
      i === 99 && resolve();
    }
  }).then(function(){
    console.log('3') });
  console.log('4');
}

const funGroup4=()=>{
  setTimeout(function () {
    console.log(1);
  }, 0);

  new Promise(function (resolve) {
    console.log(2)
    for (let i = 0; i < 10000; i++) {
      i === 9999 && resolve();
    }
    console.log(3)
  }).then(function () {
    console.log(4)
  });
  console.log(5);
}
const functionForEach=()=>{
  let arr = [1,2,3,4,5,6]
  arr.forEach(item=>{
    console.log(item)
  })
}
const objAnalysis = () =>{
  const school = {
    classObj: {
      teacher: {
        tName: 'teacher name',
        tAge: 'teacher age'
      },
      student: {
        sName: 'student name',
        sAge: 'student age'
      }
    }
  }
  const { classObj: { teacher: { tName, tAge }, student: { sName, sAge } } } = school
  console.log(`${tName}, ${tAge}, ${sName}, ${sAge}, `)
}
const Demo4 = () =>{
  // funGroup1()
  // funGroup2()
  // funGroup3()
  // funGroup4()
  // functionForEach()
  objAnalysis()
  return(
    <UnitContent title={'Demo4'}>Demo4 js 执行顺序（宏任务，微任务）</UnitContent>
  )
}

export default Demo4
