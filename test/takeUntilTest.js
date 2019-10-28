const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  
  it("should return array until number less than zero", () => {

    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, (data1, x => x < 0)), [1, 2, 5, 7, 2]);
  });

  it("should return string up until the comma", () => {

    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

    assert.deepEqual(takeUntil(data2, (data2, x => x === ',')), ["I've", "been", "to", "Hollywood"]); 
  });

})