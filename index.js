// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const swapper = require('./swapper');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  flatten: flatten,
  countOnly: countOnly,
  countLetters: countLetters,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  swapper: swapper,
  takeUntil: takeUntil,
  without: without
};
