import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";

const Demo11_10 = () => {

  const pivotIndex = function(nums) {
    let leftSum = 0
    let rightSum = 0
    let targetIdx = -1
    for(let i=0;i<nums.length;i++) {
      for(let j=0;j<nums.length;j++){
        if(j<i) {
          leftSum += nums[j]
        }else if(j>i) {
          rightSum += nums[j]
        }
      }
      if(leftSum === rightSum) {
        targetIdx = i
        break
      }else{
        leftSum = 0;
        rightSum = 0
      }
    }
    return targetIdx
  };

  const merge = function(intervals) {

    for(let i=0;i<intervals.length;i++) {
      for(let j=1;j<intervals.length-i;j++) { //冒泡排序的优化 -i 这个是亮点
        if(intervals[j-1][0] > intervals[j][0]){
          const temp = intervals[j]
          intervals[j] = intervals[j-1]
          intervals[j-1] = temp
        }
      }
    }

    let newArr = []
    let start = intervals[0][0]
    let end = intervals[0][1]
    for(let i=1;i<intervals.length;i++) {
      if(end < intervals[i][0]){
        newArr.push([start, end])
        start = intervals[i][0]
        end = intervals[i][1]
      }else if(end >= intervals[i][0] && end <= intervals[i][1]) {
        end = intervals[i][1]
      }
    }
    newArr.push([start, end])
    return newArr
  };

  const unitIdxChange =(matrix, x, y, n)=> {
    let temp = matrix[x][y]
    matrix[x][y] = matrix[n-y][x]
    matrix[n-y][x] = matrix[n-x][n-y]
    matrix[n-x][n-y] = matrix[y][n-x]
    matrix[y][n-x] = temp
  }

  const rotate = function(matrix) {
    let n = matrix[0].length-1
    for(let x = 0;x<n;x++) {
      for(let y=x;x+y<n;y++){
        unitIdxChange(matrix, x, y, n)
      }
    }
    return matrix
  };

  const setZeroes = function(matrix) {
    const xArr = []
    const yArr = []
    for(let i=0;i<matrix.length;i++) {
      for(let j=0;j<matrix[i].length;j++) {
        if(matrix[i][j] === 0) {
          console.log('i,j', i,j)
          if(!xArr.includes(i)) {
            xArr.push(i)
          }
          if(!yArr.includes(j)) {
            yArr.push(j)
          }
        }
      }
    }
    for(let i=0;i<matrix.length;i++) {
      for(let j=0;j<matrix[i].length;j++) {
        if(xArr.includes(i) || yArr.includes(j)) {
          matrix[i][j] = 0
        }
      }
    }
    return matrix
  };

  const findDiagonalOrder = function(mat) {
    let i = 0;
    let j = 0;
    let tempArr = [mat[0][0]]
    while(i < mat.length-1 || j < mat[0].length-1){
      while(true){
        i--
        j++
        if(i < 0 && j<mat[0].length){
          i = 0
          tempArr.push(mat[i][j])
          break
        }else if(i<0 && j===mat[0].length){
          i=i+2
          j = mat[0].length-1
          if(i<mat.length){
            tempArr.push(mat[i][j])
          }
          break
        }
        if(j===mat[0].length){
          i = i+2
          j = mat[0].length-1
          if(i<mat.length){
            tempArr.push(mat[i][j])
          }
          break
        }
        tempArr.push(mat[i][j])
      }
      while(true){
        i++
        j--
        if(j<0 && i<mat.length){
          j=0
          tempArr.push(mat[i][j])
          break
        }else if(j < 0 && i === mat.length -1){
          j=j+2
          i = mat.length-1
          if(j<mat[0].length){
            tempArr.push(mat[i][j])
          }
          break
        }
        if(i===mat.length) {
          j=j+2
          i=mat.length-1
          if(j<mat[0].length){
            tempArr.push(mat[i][j])
          }
          break
        }
        tempArr.push(mat[i][j])
      }
    }
    return tempArr
  };

  const findDiagonalOrderV2 = function(mat) {
    let i = mat.length
    let j = mat[0].length
    const loopNum = i+j-1
  }

  const longestCommonPrefix = function(strs) {
    if(strs.length===1){
      return strs[0]
    }
    for(let i=0;i<strs.length - 1;i++) {
      if(strs[i].length<strs[i+1].length){
        let temp = strs[i]
        strs[i] = strs[i+1]
        strs[i+1] = temp
      }
    }
    let smallStr = strs[strs.length-1]
    let prefixStr = ''

    debugger
    console.log('strs', strs)
    for(let i=1;i<=smallStr.length;i++){
      debugger
      for(let j=0;j<strs.length-1;j++){
        if(strs[j].substring(0, i) !== smallStr.substring(0,i)){
          return prefixStr
        }
      }
      prefixStr = smallStr.substring(0,i)
    }
    return prefixStr
  };


  React.useEffect(()=>{
    // const rest = pivotIndex([1,7,3,6,5,6])
    // const rest = merge([[1,3],[2,6],[8,10],[15,18]])
    // const rest = rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
    // const rest = setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
    // const rest = findDiagonalOrder([[2,3]]) //[[1,2,3],[4,5,6],[7,8,9]]
    const rest = longestCommonPrefix(["ab", "a"]) // ["flower","flow","flight"] ["dog","racecar","car"] ["ab", "a"]

    // const rest = longestPalindrome("cbbd") // "cbbd" "babad"

    console.log('rest', rest)
  },[])

  return (
    <UnitContent title={'11_10'}>
      <Wrapper>

      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo11_10
