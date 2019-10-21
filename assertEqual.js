const inspect = require('util').inspect

const assertEqual = function(actual, expected) {
  const happyEmoji = String.fromCodePoint(128512);
  const sadEmoji = String.fromCodePoint(128530);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${sadEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = {
  assertEqual
}