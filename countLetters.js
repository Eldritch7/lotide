const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅👌 Assertion Passed: ${actual} === ${expected}.`);
  } else if (actual !== expected) {
    return console.log(`⛔🔥 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

//Count Letters
const countLetters = function(string) {
  let input = string.toLowerCase();
 
  let object = {

  };
  for (const letter of input) {
   
    if (letter === " ") {
      continue;
    } else if (object[letter]) {
      object[letter] += 1;
    } else {
      object[letter] = 1;
    }
  } return object;
};

//Test Code
let quote = "Falling Stars";
let result1 = countLetters(quote);
//console.log(result1);

assertEqual(result1["s"], 2);
assertEqual(result1["f"], 1);
assertEqual(result1["l"], 2);
assertEqual(result1["a"], 2);