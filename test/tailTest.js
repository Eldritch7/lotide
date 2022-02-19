//Import
const assertEqual = require('../assertEqual');
const tail = require('../tail.js');


//Test Case: It can't compare arrays
console.log("assertEqual won't work with arrays, see below", tail([1,2,3,4,5]));
assertEqual(tail([1,2,3,4,5]), [2,3,4,5]);


//Test Case: Empty array and array with one element
const empty = [];

console.log("single number array",tail([1]));
console.log('empty array', tail(empty));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check the returned array elements - it works if you use it only for specific elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
