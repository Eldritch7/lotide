'use strict';

//  ASSERT EQUAL
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅👌 Assertion Passed: ${actual} === ${expected}.`);
  } else if (actual !== expected) {
    return console.log(`⛔🔥 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

//EQUAL ARRAY

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }

  }
  
  return true;
  
};


//Test Code Equal Array
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS