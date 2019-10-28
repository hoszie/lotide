const assert = require('chai').assert;
const map   = require('../map');

describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];

  it("should list out the first letter of every element in the array", () => {
    assert.deepEqual(map(words, word => word[0]),['g', 'c', 't', 'm', 't']);
  })
})




// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);