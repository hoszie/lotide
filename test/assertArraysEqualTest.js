const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual').assertArraysEqual;

describe("#assertArraysEqual", () => {
  
  it("should return true when arrays are equal", () => {
    assert.deepEqual(assertArraysEqual([1,2,3], [1,2,3]));
  });

  it("should return false when arrays are not equal", () => {
    assert.deepEqual(assertArraysEqual([1,2,3], [1,2,4], false))
  });

})





// const assertArraysEqual = require('../assertArraysEqual').assertArraysEqual;

// assertArraysEqual([1,2,3], [1,2,3], true);
// assertArraysEqual([1,2,3], [1,2,4], false);

