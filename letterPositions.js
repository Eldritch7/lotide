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

//Code Letter Positons

const letterPositions = function(string) {
  let input = string.toLowerCase();
  let object = {};
  for (let i = 0; i<= input.length; i++) {
    if (input[i] === " ") {
      continue;
    } else if (object[input[i]]) {
      //console.log(input[i]);
      object[input[i]].push(i);

    } else {
      object[input[i]] = [i];
    }
  } return object;
};

//Test code
assertArraysEqual(letterPositions("hello there").e, [1,8,10]);