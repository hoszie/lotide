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

const flatten = function(arr) {
  let res = arr.flat();
  return res;
}

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, [2, 3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, 2, [3], [4, 5, 6]]),[1, 2, 3, 4, 5, 6]);
