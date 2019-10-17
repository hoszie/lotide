const assertEqual = function(actual, expected) {
  const happyEmoji = String.fromCodePoint(128512);
  const sadEmoji = String.fromCodePoint(128530);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${sadEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual(1, 1);
assertEqual("hello", "hello");
