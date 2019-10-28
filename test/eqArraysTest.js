const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  });

  it("should return false", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 4]), false)
  });
})






// describe("#middle", () => {
//   it("should return [56, 68]", () => {
//     assert.deepEqual(middle([10, 23, 35, 40, 56, 68, 90, 6, 2, 6]), [56, 68]);
//   });




// const assertEqual = require('../assertEqual').assertEqual;
// const eqArrays = require('../eqArrays');

// const a123 = [1, 2, 3];
// const a123again = [1, 2, 3];
// const str = "hello";

// assertEqual(eqArrays(a123, a123), true);
// assertEqual(eqArrays(a123, a123again), true);
// assertEqual(eqArrays(a123, a123again), true);
// assertEqual(eqArrays(2, 5), true);
