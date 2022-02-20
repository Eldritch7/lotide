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

x => x === ',';
x => x < 0;


const takeUntil = function(array, callback) {
  let results = [];
  for (const el of array) {
    if (callback(el)) {
      break;
      
    } else {
      results.push(el);
    }


  } return results;
  
  
};

module.exports = takeUntil;