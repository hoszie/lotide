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


const takeUntil = function(array, callback) {
  let res= [];
  for (let i of array) {
    if(callback(i) === false){
      res.push(i);
    } else {
      return res;
    }
  }
}

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2] );

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"] );
