const assertArraysEqual = function (arr, arr2) {
  const happyEmoji = String.fromCodePoint(128512);
  const sadEmoji = String.fromCodePoint(128530);

  if (eqArrays(arr, arr2)) {
    console.log(`${happyEmoji} Assertion Passed: ${arr} === ${arr2}`);
  } else {
    console.log(`${sadEmoji} Assertion Failed: ${arr} !== ${arr2}`);
  }
  
}
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



const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
} 



const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word += word.toUpperCase());
assertArraysEqual(results3, ['groundGROUND', 'controlCONTROL', 'toTO', 'majorMAJOR', 'tomTOM']);