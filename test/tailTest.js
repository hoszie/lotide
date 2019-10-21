const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {
  it("returns 2 for length", () => {
    const results = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(results.length, 2);
  });

  it("returns Lighthouse for tail[0]", () => {
    const results = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(results[0], "Lighthouse");
  });
});






// const assertEqual = require('../assertEqual.js');
// const tail = require('../tail.js');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs");

