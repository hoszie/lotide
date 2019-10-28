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


const without = function (source, itemsToRemove) {
  let resArr = [];
  for (let i = 0; i < source.length; i ++) {
    if (!itemsToRemove.includes(source[i])) {
      resArr.push(source[i]);
    }
  }
  return resArr;
}

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);