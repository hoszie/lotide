// const assertEqual = function(actual, expected) {
//   const happyEmoji = String.fromCodePoint(128512);
//   const sadEmoji = String.fromCodePoint(128530);
//   if (actual === expected) {
//     console.log(`${happyEmoji} Assertion Passed: [actual] === [expected]`);
//   } else {
//     console.log(`${sadEmoji} Assertion Failed: [actual] !== [expected]`);
//   }
// };
const assertEqual = require('./assertEqual')
const head = function(arr) {
  return arr[0];
};

module.exports = head;