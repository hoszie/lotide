const assertEqual = require('../assertEqual').assertEqual;
const eqArrays = require('../eqArrays');

const a123 = [1, 2, 3];
const a123again = [1, 2, 3];
const str = "hello";

assertEqual(eqArrays(a123, a123), true);
assertEqual(eqArrays(a123, a123again), true);
assertEqual(eqArrays(a123, a123again), true);
assertEqual(eqArrays(2, 5), true);
