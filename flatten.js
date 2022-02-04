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

//  ASSERT ARRAYS EQUAL
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`✅👌 Assertion Passed: ${array1} === ${array2}.`);
  } else if (!eqArrays(array1, array2)) {
    return console.log(`⛔🔥 Assertion Failed: ${array1} !== ${array2}.`);
  }
};

//Flatten

const flatten = function(array) {
  let flattened = [];
  //loop through array
  for (const el of array) {
    if (!(Array.isArray(el))) {
      flattened.push(el);
    } else if (Array.isArray(el)) {
      for (const el1 of el) {
        flattened.push(el1);
      }
    }
  } return flattened;
  //test if an element is an element or array
  //push if it's an element
  //open and push if array
};

//Test Code
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
