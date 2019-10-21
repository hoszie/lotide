// const assertArraysEqual = function (arr, arr2) {
//   const happyEmoji = String.fromCodePoint(128512);
//   const sadEmoji = String.fromCodePoint(128530);

//   if (eqArrays(arr, arr2)) {
//     console.log(`${happyEmoji} Assertion Passed: ${arr} === ${arr2}`);
//   } else {
//     console.log(`${sadEmoji} Assertion Failed: ${arr} !== ${arr2}`);
//   }
  
// }
// const eqArrays = function(arr, arrTwo) {

//   if (arr.length !== arrTwo.length) {
//     return false;
//   }
  
//   for (let i = 0; i < arr.length; i ++) {
//     if (arr[i] !== arrTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }
const eqArrays = require('./eqArrays');


const middle = function (arr) {
  let halfArr = Math.ceil(arr.length/2);
  let midVal = [];
  let res;

  if(arr.length < 3) {
    return [];
  }

  for (let i = 0; i < halfArr; i ++) {
    if (arr.length % 2 === 0) {
      midVal.push(arr[i]);
      midVal.push(arr[i + 1]);
      res = midVal.slice(-2);
    } else if (arr.length % 2 !== 0) {
      midVal.push(arr[i]);
      res = midVal.slice(-1);
    }
  }
  return res;
}
module.exports = middle;

// assertArraysEqual(middle([10, 23, 35, 40, 56, 68, 90, 6, 2, 6]), [56, 68]);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1,2]), []);
// assertArraysEqual(middle([1,2]), []);
// assertArraysEqual(middle([45, 87, 92, 71, 66]), [90]);

