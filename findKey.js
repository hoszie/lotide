// const assertEqual = function(actual, expected) {
//   const happyEmoji = String.fromCodePoint(128512);
//   const sadEmoji = String.fromCodePoint(128530);
//   if (actual === expected) {
//     console.log(`${happyEmoji} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`${sadEmoji} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKey = function(obj, callback) {
  for (let i in obj) {
    if (callback(obj[i])) {
      return i;
    }
  }
}

module.exports = findKey;

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2),'noma')