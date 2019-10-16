const assertEqual = function(actual, expected) {
  const happyEmoji = String.fromCodePoint(128512);
  const sadEmoji = String.fromCodePoint(128530);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`${sadEmoji} Assertion Failed: [actual] !== [expected]`);
  }
};

const countLetters = function (str) {
  let result = {};
  let noSpace = str.split(' ').join("");
  console.log("This is after the split join:", noSpace)
  
  for (const letter of noSpace) {
    
    if(result[letter] === " ") {
      result ++;
    } else if(result[letter]) {
      result[letter] = result[letter] + 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}
console.log(countLetters("lighthouse in the house"));

