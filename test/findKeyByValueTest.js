const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');
//Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const birdTypes = {
  small: "Budgie",
  medium: "Cockateil",
  large: "African Grey"
};
assertEqual(findKeyByValue(birdTypes, "Budgie"), "small");
assertEqual(findKeyByValue(birdTypes, "Finch"), undefined);
