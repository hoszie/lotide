const assert = require('chai').assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  var bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };



  it("should return drama", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

})