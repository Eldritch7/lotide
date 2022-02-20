

//Code Letter Positons

const letterPositions = function(string) {
  let input = string.toLowerCase();
  let object = {};
  for (let i = 0; i<= input.length; i++) {
    if (input[i] === " ") {
      continue;
    } else if (object[input[i]]) {
      
      object[input[i]].push(i);

    } else {
      object[input[i]] = [i];
    }
  } return object;
};

module.exports = letterPositions;

