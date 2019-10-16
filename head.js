const assertEqual = function(actual, expected) {
  const happyEmoji = String.fromCodePoint(128512);
  const sadEmoji = String.fromCodePoint(128530);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`${sadEmoji} Assertion Failed: [actual] !== [expected]`);
  }
};

const head = function(arr) {
  return arr[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
