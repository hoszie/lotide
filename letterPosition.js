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

// const assertArraysEqual = function (arr, arr2) {
//   const happyEmoji = String.fromCodePoint(128512);
//   const sadEmoji = String.fromCodePoint(128530);

//   if (eqArrays(arr, arr2)) {
//     console.log(`${happyEmoji} Assertion Passed: ${arr} === ${arr2}`);
//   } else {
//     console.log(`${sadEmoji} Assertion Failed: ${arr} !== ${arr2}`);
//   }
  
// }

const letterPosition = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i ++) {
    let key = sentence[i];
    
    if (results[key]) {
      results[key].push(i);
    } else {
      if (key !== " ") {
        results[key] = [i];
      }
    }
  }
  return results;
}

module.exports = letterPosition;

// console.log(letterPosition(("lighthouse in the house")));

// console.log(assertArraysEqual(letterPosition("hello").e, [1]));