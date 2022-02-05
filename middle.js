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

//MIDDLE ARRAY
//One or two elements return empty array
//Odd arrays return one element, even returns two
//
const middle = function(array) {
  let midOfArray = [];
  if (array.length <= 2) {
    return midOfArray;
  } else if (array.length % 2 !== 0) {
    let x = (array.length) / 2;
    let index = Math.floor(x);
    midOfArray.push(array[index]);
    return midOfArray;
  } else if (array.length % 2 === 0) {
    let x = (array.length) / 2;
    let index1 = x - 1;
    let index2 = x;
    midOfArray.push(array[index1]);
    midOfArray.push(array[index2]);
    return midOfArray;

  }

};


//TEST CODE
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2]),[]);
