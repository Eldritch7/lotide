//  FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅👌 Assertion Passed: ${actual} === ${expected}.`);
  } else if (actual !== expected) {
    return console.log(`⛔🔥 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

//Equal Arrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
   
    return false;
  }
  let equalArrayBool;
  
  /*for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log("array1 is", array1[i], "array 2 is", array2[i]);
      //console.log('def');
      return false;
      //return false;
    } else {
      equalArrayBool = true;
    }

  } */

  for (let i = 0; i<= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log("array1 is", array1[i], "array 2 is", array2[i]);
      //console.log('def');
      equalArrayBool = false;
      //break;
      return equalArrayBool;
    } else {
      equalArrayBool = true;
    } 
  }
  //console.log('ghi', equalArrayBool);
  return equalArrayBool;
  
};

//EQUAL OBJECTS
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let equalObjectBool;
  for (let key1 of Object.keys(object1)) {
    
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
   
      if (!eqArrays(object1[key1], object2[key1])) {
        equalObjectBool = false;
          
        //return false;
      } else {
        equalObjectBool = true;
        //return true;
      }
    }  else if (object1[key1] !== object2[key1]) {
      console.log("objectKey1", object1[key1]);
      console.log("objectKey2", object2[key1]);
      const anything = eqArrays(object1[key1], object2[key1]);
      if (anything) {
        equalObjectBool = true;
      } else {
        equalObjectBool = false;
      }
      console.log("anything",anything);
      equalObjectBool = false;
      break;
      
    }  else {
      equalObjectBool = true;
     
    }
  }
  return equalObjectBool;
 
  

};
  


//Test Code
const ab = { a: "bird", b: "cat" };
const ba = { b: "cat", a: "bird" };
const baFalse = {b: "rat", a: "bird"};
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, baFalse), false);

const abc = { a: "bird", b: "cat", c: "fox" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab,abc), false);

const cd = { c: "1", dx: ["2", 3] };
const dc = { dx: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", dx: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false);



//Extra Test
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
//console.log("first eqObjects response ", eqObjects(ab, ba));
// console.log("second eqObjects response ", eqObjects(ab, abc));
// console.log("arr 1", eqObjects(cd, dc));
// console.log("arr 2", eqObjects(cd, cd2));