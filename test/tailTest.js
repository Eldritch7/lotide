const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns [2,3,4] for [1,2,3,4]", () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]); 
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); 
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []); 
  });
});



// //Import
// const assertEqual = require('../assertEqual');
// const tail = require('../tail.js');


// //Test Case: It can't compare arrays
// console.log("assertEqual won't work with arrays, see below", tail([1,2,3,4,5]));
// assertEqual(tail([1,2,3,4,5]), [2,3,4,5]);


// //Test Case: Empty array and array with one element
// const empty = [];

// console.log("single number array",tail([1]));
// console.log('empty array', tail(empty));

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case: Check the returned array elements - it works if you use it only for specific elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
