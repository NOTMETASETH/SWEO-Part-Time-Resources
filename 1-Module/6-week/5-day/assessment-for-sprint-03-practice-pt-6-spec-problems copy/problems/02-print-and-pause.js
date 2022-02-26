/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

Run tests on just this file by typing `npm test test/02-print-and-pause-spec.js`
on the command line.

Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.
***********************************************************************/
// write a function that takes an array out timeout wait times
// base case, if array.length ===0, return 
// shift off each element and assign it to a var
// print that variable
// create a setTimeout, and  wait var amount of time
function printAndPause(nums) {
  if(nums.length === 0) return
  let ele = nums.shift()
  console.log(ele)
  // setTimeout(, ele, --)
  setTimeout(printAndPause, ele, nums)
  // setTimeout(() => {
  //   printAndPause(nums);
  // }, ele) // works
  // setTimeout( printAndPause(nums),  ele) // wrong
}
// function printAndPause(nums) {
//   if(nums.length === 0) return
//   let ele = nums.shift()
//   console.log(ele)
//   let myInt = setInterval(() => {
//     printAndPause(nums)
//     clearInterval(myInt)
//   },ele)
// }
// printAndPause()
// printAndPause([200, 800, 200, 800, 200, 800])
//
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}