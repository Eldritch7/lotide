

//MIDDLE ARRAY
//One or two elements return empty array
//Odd arrays return one element, even returns two
//
const middle = function(array) {
  let midOfArray = [];
  if (array.length <= 2) {
    return midOfArray;
  } else if (array.length % 2 !== 0) {
    let x = (array.length) / 2;
    let index = Math.floor(x);
    midOfArray.push(array[index]);
    return midOfArray;
  } else if (array.length % 2 === 0) {
    let x = (array.length) / 2;
    let index1 = x - 1;
    let index2 = x;
    midOfArray.push(array[index1]);
    midOfArray.push(array[index2]);
    return midOfArray;

  }

};

module.exports = middle;
