

//Import
const assertEqual = require('./assertEqual');

//Head Function
const head = function(array) {
  if (!Array.isArray(array) || array === []) {
    return undefined;
  } else if (Array.isArray(array)) {

    return array [0];
 
  }
};



//Test Code:

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);