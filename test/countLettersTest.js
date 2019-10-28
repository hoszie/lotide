const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  
  it("should return {h: 1, i: 2, N: 1, c: 1, k: 1}", () => {
    assert.deepEqual(countLetters("hi nick"), {h: 1, i: 2, n: 1, c: 1, k: 1})
  });
  
})
