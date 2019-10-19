const assertEqual = function(actual, expected) {
  const happyEmoji = String.fromCodePoint(128512);
  const sadEmoji = String.fromCodePoint(128530);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${sadEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};
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
// Test the length of object1 against object2. If they are the same length, then is passes. If not, return false. 



const eqObjects = function(obj1, obj2) {
  var obj1keys = Object.keys(obj1);
  var obj2keys = Object.keys(obj2);
  
  if (obj1keys.length !== obj2keys.length) {
    return false;
  }
  
  for (let key of obj1keys) {
    let value1 = obj1[key];
    let value2 = obj2[key];


    if (Array.isArray(value1) && Array.isArray(value2)) {
      const arrays_are_identical = eqArrays(value1, value2);
      if(!arrays_are_identical) {
        return false;
      } else {
        // do nothing, just keep going around the loop
      }
    } else {  // not arrays, not objects (objects not done yet)
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
}

const bb = { a: "22", c: "1"};
const aa = { a: "2", b: "1"};
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1", };
const abc = { a: "1", b: "2", c: "3"};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, aa), false);
assertEqual(eqObjects(ab, bb), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(dc, cd2), false);


