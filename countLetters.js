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

module.exports = countLetters;