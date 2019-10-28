const assert = require('chai').assert;
const assertEqual = require('../assertEqual').assertEqual;

describe("#assertEqual", () => {
  
  it("should return true when two inputs are the same", () => {
    assert.deepEqual(assertEqual(1, 1));
  });

  it("should return false when two inputs are not the same", () => {
    assert.deepEqual(assertEqual(1, "1"));
  });
})





// const assertEqual = require('../assertEqual').assertEqual;

// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);
// assertEqual(1, "1");
// assertEqual(1, 1);
// assertEqual("hello", "hello");