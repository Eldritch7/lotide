//  FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅👌 Assertion Passed: ${actual} === ${expected}.`);
  } else if (actual !== expected) {
    return console.log(`⛔🔥 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

//Code findKeyByValue
// Implement the function findKeyByValue which takes in an object and a value.
// It should scan the object and return the first key which contains the given
// value. If no key with that given value is found, then it should return
// undefined.

const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

//Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const birdTypes = {
  small: "Budgie",
  medium: "Cockateil",
  large: "African Grey"
};
assertEqual(findKeyByValue(birdTypes, "Budgie"), "small");
assertEqual(findKeyByValue(birdTypes, "Finch"), undefined);
