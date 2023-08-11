import React, { memo } from 'react'
import UnitContent from "../../components/UnitContent";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * this is about Symbol using Demo
 */

const Demo10 = memo(() =>{

  // let sy1 = Symbol("this is Symbol1 desc")
  // let sy2 = Symbol("this is Symbol2 desc")
  // let fakeSy2 = Symbol("this is Symbol2 desc")

  // console.log('sy1.description =>', sy1.description)
  // console.log('sy2.description =>', sy2.description)
  // console.log("sy1 === sy2, sy2 === fakeSy2", sy1 === sy2, sy2 === fakeSy2) // false, false

  // /**
  //  * 如果内存中已经存在了一个相同的Symbol，则再次使用会指向相同的内容
  //  */
  // let sy3 = Symbol.for("AAA")
  // console.log('Symbol.keyFor(sy3)', Symbol.keyFor(sy3)) // Symbol.keyFor(sy3) AAA
  // let sy4 = Symbol.for("AAA")
  // let sy5 = Symbol("AAA")
  // console.log('sy3 === sy4 sy3 === sy5', sy3 === sy4, sy3 === sy5) // sy3 === sy4 sy3 === sy5 true false
  //
  // let sy6 = Symbol("PPP")
  // console.log('Symbol.keyFor(sy6)', Symbol.keyFor(sy6)) // Symbol.keyFor(sy6) undefined

  return (
    <UnitContent unitTitle={'Demo10'} >Symbol demo, check console</UnitContent>
  )
})

export default Demo10
