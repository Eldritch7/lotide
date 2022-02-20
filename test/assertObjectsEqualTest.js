const assertObjectsEqual = require('../assertObjectsEqual');
const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

//Test Code
const ab = { a: "bird", b: "cat" };
const ba = { b: "cat", a: "bird" };
const baFalse = {b: "rat", a: "bird"};
//console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, baFalse), false);
assertObjectsEqual(ab, ba);
assertObjectsEqual(ba, baFalse);