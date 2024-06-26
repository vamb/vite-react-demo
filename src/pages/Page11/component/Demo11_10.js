import React from 'react'
import styled from "styled-components";
import UnitContent from "../../components/UnitContent";
import { generateRandomArr } from '@/utils/utils'

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

  const strStr = function(haystack, needle) {
    if(needle.length <= haystack.length) {
      for(let i =0; i<=haystack.length - needle.length; i++) {
        if(haystack.substring(i, i+needle.length) === needle){
          return i
        }
      }
      return -1
    }else {
      return -1
    }
  };

  const arrayPairSum = function(nums) {
    for(let i=0;i<nums.length;i++) {
      for(let j=0;j<nums.length-1;j++){
        if(nums[j] > nums[j+1]){
          const temp = nums[j]
          nums[j] = nums[j+1]
          nums[j+1] = temp
        }
      }
    }
    let numSum = 0
    for(let i=0;i<nums.length/2;i++) {
      if(nums[i*2] < nums[i*2+1]){
        numSum = numSum + nums[i*2]
      }else{
        numSum = numSum + nums[i*2+1]
      }
    }
    return numSum
  };
  const arrayPairSumV2 = function(nums) {
    let numSum = 0
    for(let i=0;i<nums.length;i++) {
      for(let j=0;j<nums.length-1;j++){
        if(nums[j] > nums[j+1]){
          const temp = nums[j]
          nums[j] = nums[j+1]
          nums[j+1] = temp
        }
      }
      if((i+1)%2===0){
        numSum = numSum + nums[nums.length - 1 - i]
      }
    }
    return numSum
  };

  const minSubArrayLen = function(target, nums) {
    let startIdx = 0
    let endIdx = 0
    let temp = 0
    let minLength = 0
    while(endIdx < nums.length) {
      temp += nums[endIdx]
      if(temp >= target) {
        while(startIdx < endIdx){
          if(temp - nums[startIdx] >= target) {
            temp = temp - nums[startIdx]
            startIdx ++
          }else {
            break
          }
        }
        let tempLength = endIdx - startIdx + 1
        if(minLength === 0 || (minLength !== 0 && minLength>tempLength)) {
          minLength = tempLength
        }
        temp = temp - nums[startIdx]
        startIdx++
      }
      endIdx ++
    }
    return minLength
  };

  const generate = function(numRows) {
    const targetArr = []
    for(let i=1;i<=numRows;i++) {
      if(i===1){
        targetArr.push([1])
      }else if(i===2){
        targetArr.push([1,1])
      }else {
        const tempArr = []
        for(let idx = 0; idx<i; idx++){
          if(idx === 0 || idx === i-1) {
            tempArr.push(1)
          }else{
            tempArr.push(targetArr[i-2][idx] + targetArr[i-2][idx-1])
          }
        }
        targetArr.push(tempArr)
      }
    }
    return targetArr
  };

  const getRow = function(rowIndex) { // 这个的时间复杂度比 generate(numRows) 大得多，大太多了
    if(rowIndex === 0) {
      return [1]
    }else if(rowIndex === 1) {
      return [1,1]
    }else{
      let tempArr = []
      let tempOppo = []
      const calSum =(rowIndex, idx)=> {
        if(rowIndex === 0 || rowIndex === 1 || idx === 0 || idx === rowIndex) {
          return 1
        }else if(idx < rowIndex){
          return calSum(rowIndex-1, idx-1) + calSum(rowIndex-1, idx)
        }
      }
      if(rowIndex % 2 === 0) {
        for(let i=0;i<=rowIndex/2;i++) {
          const val = calSum(rowIndex, i)
          tempArr.push(val)
          tempOppo.push(val)
        }
        tempOppo = tempOppo.reverse()
        tempOppo.shift()
        return tempArr.concat(tempOppo)
      }else{
        for(let i=0;i<=(rowIndex-1)/2;i++) {
          const val = calSum(rowIndex, i)
          tempArr.push(val)
          tempOppo.push(val)
        }
        return tempArr.concat(tempOppo.reverse())
      }
    }
  };

  const reverseWords = function(s) {
    s = s.trim()
    let arr = s.split(" ")
    let combineStr = ''
    debugger
    for(let i=0;i<arr.length; i++) {
      if(arr[i] !== ' '){
        let unitArr = arr[i].split('')
        unitArr = unitArr.reverse()
        combineStr = combineStr + unitArr.join('') + ' '
      }
    }
    return combineStr.substring(0, combineStr.length -1)
  };

  const findPreIdx = (nums, mid) => {
    return mid === 0? nums.length-1: --mid
  }

  const findNextIdx = (nums, mid) => {
    return mid === nums.length-1? 0: ++mid
  }
  const hasTargetIdx = (nums, mid) => {
    debugger
    const preIdx = findPreIdx(nums, mid)
    const nextIdx = findNextIdx(nums, mid)
    if(nums[mid] < nums[preIdx] && nums[mid] < nums[nextIdx]) {
      return mid
    }else if(nums[mid] > nums[preIdx] && nums[mid] > nums[nextIdx]) {
      return nextIdx
    }else {
      return null
    }
  }
  /**
   * 一次冒泡:
   * 执行用时：60 ms, 在所有 JavaScript 提交中击败了 71.67% 的用户
   * 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了 96.81% 的用户
   *
   * 执行用时：64 ms, 在所有 JavaScript 提交中击败了 49.26% 的用户
   * 内存消耗：40.9 MB, 在所有 JavaScript 提交中击败了 75.54% 的用户
   * @param nums
   * @returns {*}
   */
  const findMin = function(nums) {
    if(nums.length === 1) {
      return nums[0]
    }else if(nums.length === 2) {
      return nums[0] < nums[1]? nums[0]: nums[1]
    }

    let startIdx = 0
    let endIdx = nums.length - 1

    const find = (nums, startIdx, endIdx) => {
      debugger
      let mid = parseInt((startIdx + endIdx) / 2)
      if(hasTargetIdx(nums, mid) !== null) {
        return nums[hasTargetIdx(nums, mid)]
      }else if(hasTargetIdx(nums, startIdx) !== null){
        return nums[hasTargetIdx(nums, startIdx)]
      }else if(hasTargetIdx(nums, endIdx) !== null){
        return nums[hasTargetIdx(nums, endIdx)]
      }else{
        const preIdx = findPreIdx(nums, mid)
        const nextIdx = findNextIdx(nums, mid)
        if(nums[mid] < nums[endIdx] && nums[mid] > nums[preIdx] && nums[mid]< nums[nextIdx]) {
          endIdx = mid
          return find(nums, startIdx, endIdx)
        }else if(nums[mid] > nums[startIdx] && nums[mid] > nums[preIdx] && nums[mid]< nums[nextIdx]){
          startIdx = mid
          return find(nums, startIdx, endIdx)
        }
      }
    }
    return find(nums, startIdx, endIdx)
  };

  const sortArray = function(nums) {
    let targetArr = [nums[0]]

    for(let i=1;i<nums.length;i++){
      let isPassed = false
      const newArr = []
      for(let j=0;j<targetArr.length;j++) {
        if(targetArr[j] > nums[i] && !isPassed){
          newArr.push(nums[i])
          isPassed = true
        }
        newArr.push(targetArr[j])
      }
      if(!isPassed){
        newArr.push(nums[i])
      }
      targetArr = newArr
    }
    return targetArr
  };

  const findIdx = function(arr, x) {
    let left = 0, right = arr.length -1
    while(left<=right) {
      let mid = left + ((right - left) >> 1)
      if(arr[mid] === x) {
        return mid
      }else if(arr[mid] < x) {
        left = mid + 1
      }else if(arr[mid] > x) {
        right = mid - 1
      }
    }
    return left
  }
  const handleArr = (arr, idx, k, x)=> {
    let leftIdx = idx
    let rightIdx = idx
    let tempArr = [arr[idx]]
    let loop = 1
    debugger
    while(loop < k) {
      if(leftIdx - 1 >=0 && rightIdx + 1 < arr.length) {
        const nextLeftIdx = leftIdx - 1
        const nextRightIdx = rightIdx + 1
        if(Math.abs(arr[nextLeftIdx] - x) <= Math.abs(arr[nextRightIdx] - x)) {
          leftIdx = nextLeftIdx
          tempArr = [arr[nextLeftIdx]].concat(tempArr)
        }else {
          rightIdx = nextRightIdx
          tempArr.push(arr[nextRightIdx])
        }
        loop ++
      }else if(leftIdx - 1 >= 0 && rightIdx +1 >= arr.length) {
        const nextLeftIdx = leftIdx - 1
        leftIdx = nextLeftIdx
        tempArr = [arr[nextLeftIdx]].concat(tempArr)
        loop ++
      }else if(leftIdx - 1 <0 && rightIdx + 1< arr.length) {
        const nextRightIdx = rightIdx + 1
        rightIdx = nextRightIdx
        tempArr.push(arr[nextRightIdx])
        loop ++
      }
    }
    return tempArr
  }
  const findClosestElements = function(arr, k, x) {
    let idx
    if(x<= arr[0]) {
      idx = 0
    }else if(x >= arr[arr.length - 1]){
      idx = arr.length - 1
    }else {
      idx = findIdx(arr, x)
    }
    let targetArr = []
    debugger
    if(arr[idx] < x && idx + 1 < arr.length && x - arr[idx] > arr[idx + 1] - x) {
      targetArr = handleArr(arr, idx+1, k, x)
    }else if(arr[idx] > x && idx - 1 >=0 && x - arr[idx-1] <= arr[idx] - x) {
      targetArr = handleArr(arr, idx-1, k, x)
    }else {
      targetArr = handleArr(arr, idx, k, x)
    }
    return targetArr
  };

  const myPow = function(x, n) {
    if(x === 0) {
      return 0
    }else if(n === 0) {
      return 1
    }else {
      return n>0? x * myPow(parseFloat(x), n-1): 1/x * myPow(parseFloat(x), n + 1)
    }
  };

  const multiply = function(A, B) {
    let num, count
    if(A >= B) {
      num = BigInt(A)
      count = BigInt(B)
    }else {
      num = BigInt(B)
      count = BigInt(A)
    }
    /*
    * num -> 要迭代的数字
    * count -> 需要迭代的次数
    * preCount -> 上一次迭代到第几次
    * loopCount -> 上一次迭代用的数字是多少倍
    * preNum -> 上一次迭代用的数字是多少
    * sum -> 计算到上一次的总和是多少
    */
    const cal = (num, count, preCount, preNum, loopCount, sum) => {
      debugger
      if(preCount === 0) {
        sum = BigInt(sum) + BigInt(num)
        preNum = num
        preCount ++
        loopCount = 1n
      }else if((BigInt(preCount) + BigInt(loopCount) + 1n) <= count) {
        preCount = BigInt(preCount) + BigInt(loopCount) + 1n
        loopCount = BigInt(loopCount) + 1n
        preNum = BigInt(preNum) + BigInt(num)
        sum = BigInt(sum) + BigInt(preNum)
      }else{
        preCount = BigInt(preCount) + 1n
        preNum = num
        loopCount = 1n
        sum = BigInt(sum) + BigInt(num)
      }

      if(preCount < count){
        return cal(num, count, preCount, preNum, loopCount, sum)
      }else {
        return sum
      }
    }
    return cal(num, count, 0, 0, 0, 0)
  };

  const searchInsert = function(nums, target) {
    if(target <= nums[0]) {
      return 0
    }else if(target >= nums[nums.length - 1]) {
      return nums.length - 1
    }else {
      let left = 0, right = nums.length - 1
      while(left<=right) {
        let mid = left + ((right - left) >> 1)
        if(nums[mid] === target) {
          return mid
        }else if(nums[mid] < target) {
          left = mid + 1
        }else if(nums[mid] > target) {
          right = mid - 1
        }
      }
      if(nums[left] < target) {
        return left + 1
      }else if(nums[left] > target) {
        return left
      }
    }
  };


  const partition = (nums, start, end) => {
    let midVal = nums[start]
    let left = start + 1
    let right = end
    while(left < right) {
      while(left < right && nums[left] <= midVal) {
        left ++
      }
      if(left !== right) {
        const temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        right --
      }
    }
    if(left === right && nums[right] > midVal) {
      right --
    }
    if(start !== right) {
      const temp = nums[start]
      nums[start] = nums[right]
      nums[right] = temp
    }
    return right
  }

  const quickSort = (nums, start, end) => {
    if(start < end) {
      const mid = partition(nums, start, end)
      quickSort(nums, start, mid - 1)
      quickSort(nums, mid + 1, end)
    }
  }

  const divideFind = (nums, target) =>{
    let left = 0, right = nums.length - 1
    while(left <= right) {
      const mid = left + ((right - left) >> 1)
      if(nums[mid] > target) {
        right = mid - 1
      }else if(nums[mid] < target) {
        left = mid + 1
      }else {
        return mid
      }
    }
    return -1
  }
  const handleScoreStr = (nums, idx) => {
    if(nums.length - idx === 1) {
      return "Gold Medal"
    } else if(nums.length - idx === 2) {
      return "Silver Medal"
    }else if(nums.length - idx === 3) {
      return "Bronze Medal"
    }else {
      return nums.length - idx + ''
    }
  }
  const findRelativeRanks = function(score) {
    let fakeArr = JSON.parse(JSON.stringify(score))
    quickSort(fakeArr, 0, fakeArr.length - 1)
    const newArr = []
    for(let i=0;i<score.length;i++) {
      const thisIdx = divideFind(fakeArr, score[i])
      newArr.push(handleScoreStr(fakeArr, thisIdx))
    }
    return newArr
  };

  const search = (nums, target) => {
    for(let i =0;i<nums.length;i++) {
      if(nums[i] === target) {
        return i
      }
    }
    return -1
  }
  const relativePartition = (nums, start, end) => {
    const midVal = nums[start]
    let left = start + 1
    let right = end
    while(left < right) {
      while(left < right && nums[left] <= midVal) {
        left ++
      }
      if(left !== right) {
        const temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        right--
      }
    }
    if(left === right && nums[right] > midVal) {
      right --
    }
    if(start !== right) {
      const temp = nums[start]
      nums[start] = nums[right]
      nums[right] = temp
    }
    return right
  }
  const relativeQuickSort = (nums, start, end) => {
    if(start < end) {
      const mid = relativePartition(nums, start, end)
      relativeQuickSort(nums, start , mid-1)
      relativeQuickSort(nums, mid+1, end)
    }
  }
  const relativeSortArray = function(arr1, arr2) {
    const arr2Count = new Array(arr2.length)
    const arr1Rest = []
    for(let i=0;i<arr1.length;i++) {
      debugger
      const idx = search(arr2, arr1[i])
      if(-1===idx) {
        arr1Rest.push(arr1[i])
      }else{
        !arr2Count[idx]? arr2Count[idx] = 1: arr2Count[idx]++
      }
    }
    debugger
    relativeQuickSort(arr1Rest,0 , arr1Rest.length-1)

    let tempArr = []
    for(let i = 0;i<arr2.length;i++) {
      for(let j = 0;j<arr2Count[i];j++) {
        tempArr.push(arr2[i])
      }
    }
    tempArr = tempArr.concat(arr1Rest)
    return tempArr
  };

  const shellSort = nums => {
    for(let gap=(nums.length >>1); gap>0; gap = (gap>>1)){
      for(let i = gap;i<nums.length;i++) {
        const temp = nums[i]
        let j = i - gap
        while(j>=0 && nums[j] > temp){
          nums[j+gap] = nums[j]
          j = j - gap
        }
        nums[j+gap] = temp
      }
    }
  }

  const longestConsecutive = function(nums) {
    shellSort(nums)
    let temp = 0
    let max = 0
    for(let i =0;i<nums.length-1;i++) {
      if(nums[i+1] - nums[i]===1){
        temp++
      }else if(temp!==0){
        max = temp+1 > max? temp+1: max
        temp = 0
      }
    }
    if(temp>0){
      max = temp+1 > max? temp+1: max
    }
    return max
  };

  const ubarraySum = function(nums, k) {
    let start = 0
    let count = 0
    while(start < nums.length) {
      let sum = 0
      let idx = start
      debugger
      while(idx < nums.length) {
        sum = sum + nums[idx]
        if(sum === k){
          count ++
          start ++
          break
        }else if(sum > k) {
          start ++
          break
        }else{
          idx ++
        }
      }
      if(start === nums.length-1){
        break
      }
    }
    if(nums[nums.length-1] === k){
      count ++
    }
    return count
  };

  const singleNumber = function(nums) {
    quickSort(nums,0,nums.length-1)
    for(let i=0;i<nums.length-1;i=i+2) {
      if(nums[i] !== nums[i+1]) {
        return nums[i]
      }
    }
    return nums[nums.length-1]
  };

  const yhArr = (preArr, n, idx) => {
    if(idx === 0 || idx === n-1 || n === 1) {
      return 1
    }else {
      return preArr[idx-1] + preArr[idx]
    }
  }
  const generateV2 = function(numRows) {
    const targetArr = []
    for(let i =0;i<numRows;i++) {
      const temp = []
      for(let j=0;j<i+1;j++) {
        if(i>0) {
          temp.push(yhArr(targetArr[i-1], i+1, j))
        }else{
          temp.push(yhArr([],i+1,j))
        }
      }
      targetArr.push(temp)
    }
    return targetArr
  };

  const maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
  };

  const longestPalindrome = function(s) {
    let i = 0,j=1,target = ''
    while(i<s.length && s.length - target.length > i) {
      while(j<=s.length) {
        const temp = s.substring(i,j)
        const temp2 = temp.split('').reverse().join('')
        if(temp === temp2 && temp.length > target.length) {
          target = temp
        }
        j++
      }
      i++
      j=i+1
    }
    return target
  };

  React.useEffect(()=>{
    // const rest = pivotIndex([1,7,3,6,5,6])
    // const rest = merge([[1,3],[2,6],[8,10],[15,18]])
    // const rest = rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
    // const rest = setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
    // const rest = findDiagonalOrder([[2,3]]) //[[1,2,3],[4,5,6],[7,8,9]]
    // const rest = longestCommonPrefix(["ab", "a"]) // ["flower","flow","flight"] ["dog","racecar","car"] ["ab", "a"]
    // const rest = longestPalindrome("cbbd") // "cbbd" "babad"
    // const rest = strStr("hello", "ll")
    // const rest = arrayPairSum([7,3,1,0,0,6])
    // const rest = minSubArrayLen(7, [2,3,1,2,4,3])
    // const rest = generate(5)
    // const rest = getRow(30)
    // const rest = reverseWords("Let's take LeetCode contest")
    // const rest = findMin([2, 3, 1]) // [3,4,5,1,2] [1]
    // const rest = sortArray([5,2,3,1])
    // const rest = findClosestElements([1,3],1 ,2) // [-2,-1,1,2,3,4,5] ,7, 3 || [1,2,3,4,5], 4, 3 || [0,1,1,1,2,3,6,7,8,9] ,9 ,4 || [3,5,8,10] ,2 ,15 || [1,3],1 ,2
    // const rest = myPow(0.00001, 10)
    // const rest = multiply(73807517 ,14) // 3, 4 || 73807517 ,14
    // const rest = searchInsert([1,3,5,6], 2)

    // const tempArr = generateRandomArr(10, 100)
    // console.log('tempArr', tempArr)
    // const rest = findRelativeRanks(tempArr)
    // const rest = relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])
    // const rest = longestConsecutive([0,3,7,2,5,8,4,6,0,1])
    // const rest = ubarraySum([1,2,3], 3) // [1,2,3], 3 ||[1,1,1], 2
    // const rest = singleNumber([1,0,1])
    // const rest = generateV2(5)
    // const rest = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
    const rest = longestPalindrome("babad")

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
