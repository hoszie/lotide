// const assertEqual = function(actual, expected) {
//   const happyEmoji = String.fromCodePoint(128512);
//   const sadEmoji = String.fromCodePoint(128530);
//   if (actual === expected) {
//     console.log(`${happyEmoji} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`${sadEmoji} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// I'm going to loop through one array and in doing so will be able to find out the index and value of the array and then I will have to compare that with the arr2. Get arr[0] and compare it to arr2[0]. Move on to arr[1] and compare it with arr2[1]. 


// const assertEqual = require('./assertEqual').assertEqual;

const eqArrays = function(arr, arrTwo) {

  if (arr.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
}
module.exports = eqArrays;


// const a123 = [1, 2, 3];
// const a123again = [1, 2, 3];
// const a124 = [1, 2, 4];

// console.log(eqArrays(a123, a124));
// assertEqual(eqArrays(a123, a123), true);
// assertEqual(eqArrays(a123, a123again), true);


