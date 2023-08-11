import React from 'react'
import * as md5 from 'js-md5'
import UnitContent from "../../components/UnitContent";

const demo4_1 = () =>{
  const text1 = 'username'
  console.log(text1 , md5(text1))
  const hash = md5.create();
  hash.update(text1)
  console.log('hash', hash.base64(), hash.hex())


  const salt = '342i3194010384dsafj'
  const temp = hash.base64(text1)
  console.log('temp', temp)
  const temp2 = salt + temp
  console.log('value', md5(text1 + salt))
  return(
    <UnitContent title={'Page4 Demo1'}>demo1</UnitContent>
  )
}

export default demo4_1
