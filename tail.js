//Tail Function
const tail = function(array) {
  if (array === []){
    return [];
  }else{
    return array.slice(1,);
  }
  
};

module.exports = tail;
