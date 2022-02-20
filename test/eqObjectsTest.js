//Import
const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

//Test Code
const ab = { a: "bird", b: "cat" };
const ba = { b: "cat", a: "bird" };
const baFalse = {b: "rat", a: "bird"};
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, baFalse), false);

const abc = { a: "bird", b: "cat", c: "fox" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab,abc), false);

const cd = { c: "1", dx: ["2", 3] };
const dc = { dx: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", dx: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false);
