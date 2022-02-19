

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

module.exports = head;