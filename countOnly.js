const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅👌 Assertion Passed: ${actual} === ${expected}.`);
  } else if (actual !== expected) {
    return console.log(`⛔🔥 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

//Count Only
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const object = {
 
  };

  for (const item of allItems) {
  
   
  
    if (itemsToCount[item]) {
      if (object[item]) {
        object[item] += 1;
      } else {
        object[item] = 1;
      }
    
   
     
      console.log("objectitem", object[item]);
        
    }
    
  } return object;
  
};

//Test Code

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);