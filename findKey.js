//  FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅👌 Assertion Passed: ${actual} === ${expected}.`);
  } else if (actual !== expected) {
    return console.log(`⛔🔥 Assertion Failed: ${actual} !== ${expected}.`);
  }
};
const findKey = function(object, callback) {
  let results;
  //console.log(object.noma.stars);
  for (const key in object) {
    
    console.log(key);
    //console.log(key.stars);
    // console.log(callback(key));
    if (callback(object[key])) {
      results = key;
      break;
    } else {
      continue;
    }
  } return results;
};


//Example Code

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");