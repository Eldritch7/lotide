const { Module } = require("module");
const assertEqual = require("./assertEqual");



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

module.exports = countOnly;