const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("should return [56, 68]", () => {
    assert.deepEqual(middle([10, 23, 35, 40, 56, 68, 90, 6, 2, 6]), [56, 68]);
  });

  it("should return [92]", () => {
    assert.deepEqual(middle([45, 87, 92, 71, 66]), [92]); 
  });

  it("should return []", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });

});





// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual').assertArraysEqual;


// assertArraysEqual(middle([10, 23, 35, 40, 56, 68, 90, 6, 2, 6]), [56, 68], true);
// assertArraysEqual(middle([]), [], true);
// assertArraysEqual(middle([1,2]), [], true);
// assertArraysEqual(middle([1,2]), [], true);
// assertArraysEqual(middle([45, 87, 92, 71, 66]), [92], true);