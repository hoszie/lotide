// const assertEqual = function(actual, expected) {
//   const happyEmoji = String.fromCodePoint(128512);
//   const sadEmoji = String.fromCodePoint(128530);
//   if (actual === expected) {
//     console.log(`${happyEmoji} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`${sadEmoji} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

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
// use eqArrays function to compare the two arrays in this function. 

const assertArraysEqual = function (arr, arr2, expected) {
  const happyEmoji = String.fromCodePoint(128512);
  const sadEmoji = String.fromCodePoint(128530);

  if (eqArrays(arr, arr2) === expected) {
    console.log(`${happyEmoji} Assertion Passed: ${arr} === ${arr2}`);
  } else {
    console.log(`${sadEmoji} Assertion Failed: ${arr} !== ${arr2}`);
  }
  
}

module.exports = {
  assertArraysEqual
}

// console.log(assertArraysEqual([1,2,3], [1,2,3]));
// console.log(assertArraysEqual([1,2,3], [1,2,4]));