export const countChange = (isPlus, curVal, fc) => {
  let newCount = curVal
  if(isPlus) {
    newCount ++
  }else {
    newCount --
    if(newCount < 0) {
      newCount = 0
    }
  }
  if(fc) {
    fc(newCount)
  }
}
