//Flatten

const flatten = function(array) {
  let flattened = [];
  //loop through array
  for (const el of array) {
    if (!(Array.isArray(el))) {
      flattened.push(el);
    } else if (Array.isArray(el)) {
      for (const el1 of el) {
        flattened.push(el1);
      }
    }
  } return flattened;
  //test if an element is an element or array
  //push if it's an element
  //open and push if array
};



module.exports = flatten;
