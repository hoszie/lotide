const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {

  it("should do as it's told", () => {
    assert.deepEqual((without([1, 2, 3], [1])), [2, 3]);
  });
})