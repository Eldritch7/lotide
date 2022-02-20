const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

//Test Code
//console.log(without([true, true, false], [false])); // => [2, 3]
//console.log(without(["hats", "fight", "snakes"], ["fight"]));
//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
const gone = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(gone, ["hello", "world"]);