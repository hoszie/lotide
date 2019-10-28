const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {

const bb = { a: "2", c: "1"};
const aa = { a: "2", b: "1"};
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1", };
const abc = { a: "1", b: "2", c: "3"};

  it("should return true when two objects are the same", () => {
    assert.deepEqual(assertObjectsEqual(ab, ba));
  })
})