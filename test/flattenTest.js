const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("should return an array flatten of all subarrays", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
})