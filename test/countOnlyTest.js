const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
      ];
  
  it("should return true if name is found in array", () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": true}), {"Agouhanna": 1, "Fang": 2, "Jason": 1, "Joe": 1, "Karl": 1, "Kavith": 1, "Salima": 2});
  })
})