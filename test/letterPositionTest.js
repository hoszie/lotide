const assert = require('chai').assert;
const letterPosition = require('../letterPosition');

describe("#letterPosition", () => {
  it("should list out the letters and their indexes in an object", () => {
    assert.deepEqual(letterPosition("hi"), {"h": [0], "i": [1]});
  });
})




// console.log(letterPosition(("lighthouse in the house")));

// console.log(assertArraysEqual(letterPosition("hello").e, [1]));