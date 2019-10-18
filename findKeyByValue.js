const assertEqual = function(actual, expected) {
  const happyEmoji = String.fromCodePoint(128512);
  const sadEmoji = String.fromCodePoint(128530);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${sadEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};


var findKeyByValue = function (obj, val) {
  for (let i in obj) {
    if (obj[i] === val) {
      return i; 
    }
  }
}


var bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");


