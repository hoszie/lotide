const assertEqual = function(actual, expected) {
  const happyEmoji = String.fromCodePoint(128512);
  const sadEmoji = String.fromCodePoint(128530);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`${sadEmoji} Assertion Failed: [actual] !== [expected]`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Libs");




