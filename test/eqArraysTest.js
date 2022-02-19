//Import
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


//Test Code Equal Array
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS