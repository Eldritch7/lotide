const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');


//Test Code
let quote = "Falling Stars";
let result1 = countLetters(quote);
//console.log(result1);

assertEqual(result1["s"], 2);
assertEqual(result1["f"], 1);
assertEqual(result1["l"], 2);
assertEqual(result1["a"], 2);