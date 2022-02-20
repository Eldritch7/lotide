const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]); 
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []); 
  });
});

//Old Code

// const assertArraysEqual = require("../assertArraysEqual");
// const middle = require("../middle");
//TEST CODE
// assertArraysEqual(middle([1,2,3]),[2]);
// assertArraysEqual(middle([1,2,3,4]),[2,3]);
// assertArraysEqual(middle([1,2]),[]);