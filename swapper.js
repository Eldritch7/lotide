const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');
  let placeholder = object2[key2];
  object2[key2] = object1[key1];
  object1[key1] = placeholder;
  console.log('object1: ', object1);
  console.log('object2: ', object2);

};
module.exports = swapper;
  
