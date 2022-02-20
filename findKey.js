
const findKey = function(object, callback) {
  let results;
 
  for (const key in object) {

    
    if (callback(object[key])) {
      results = key;
      break;
    } else {
      continue;
    }
  } return results;
};

module.exports = findKey;