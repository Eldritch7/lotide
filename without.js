

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (const el of source) {
    newArray.push(el);
  }

  for (let i = 0; i <= newArray.length; i++) {
    for (let j = 0; j <= itemsToRemove.length; j++) {
      if (newArray[i] === itemsToRemove[j]) {
        newArray.splice(i,1);
      
      }
      

    }
  } return newArray;

};

module.exports = without;