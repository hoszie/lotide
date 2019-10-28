const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  let obj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }
  // assertEqual(findKey({
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri":   { stars: 3 },
  //   "noma":      { stars: 2 },
  //   "elBulli":   { stars: 3 },
  //   "Ora":       { stars: 2 },
  //   "Akelarre":  { stars: 3 }
  // }, x => x.stars === 2),'noma')

  it("should return the first name that has two as a value", () => {
    assert.deepEqual(findKey(obj, x => x.stars === 2), "noma");
  });
  
})