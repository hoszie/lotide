# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hoszie/lotide`

**Require it:**

`const _ = require('@hoszie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: Checks and confirms if two arrays are equal.

* `assertEqual()`: Asserts that two arrays are equal.

* `countLetters()`: Return an array that counts how many times a letter is used in a string.

* `countOnly()`: Counts how many times a name appears in an array. Returns true if name is present.

* `eqArrays()`: Returns true or false if arrays are equal. 

* `eqObjects()`: Returns true or false if objects have equal key-value pairs.

* `findKey()`: Finds the key of an object.  