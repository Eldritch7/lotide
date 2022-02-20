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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (const el of source) {
    newArray.push(el);
  }

  for (let i = 0; i <= newArray.length; i++) {
    for (let j = 0; j <= itemsToRemove.length; j++) {
      if (newArray[i] === itemsToRemove[j]) {
        newArray.splice(i,1);
      
      }
      

    }
  } return newArray;

};

module.exports = without;