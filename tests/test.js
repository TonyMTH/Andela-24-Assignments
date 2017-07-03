const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("GetPrimes", function(){

describe("handle valid input", function(){

it("should return [2, 3, 5, 7] as getPrimes of 7", function(){
assert.deepEqual(myApp.getPrimes(7), [2, 3, 5, 7]);
});

it("should return [2, 3, 5, 7] as getPrimes of 8", function(){
assert.deepEqual(myApp.getPrimes(8), [2, 3, 5, 7]);
});

it("should return [2, 3, 5, 7] as getPrimes of 9", function(){
assert.deepEqual(myApp.getPrimes(9), [2, 3, 5, 7]);
});

it("should return [2, 3, 5, 7] as getPrimes of 10", function(){
assert.deepEqual(myApp.getPrimes(10), [2, 3, 5, 7]);
});

it("should return [2, 3, 5, 7, 11] as getPrimes of 11", function(){
assert.deepEqual(myApp.getPrimes(11), [2, 3, 5, 7, 11]);
});

it("should return [2] as getPrimes of 2", function(){
assert.deepEqual(myApp.getPrimes(2), [2]);
});

it("should return [] as getPrimes of 1", function(){
assert.deepEqual(myApp.getPrimes(1), []);
});

})

describe("handle invalid input", function(){

it("should return 'Input must be a Number' as getPrimes of 'yes'", function(){
assert.deepEqual(myApp.getPrimes('yes'), 'Input must be a Number');
});

it("should return 'Number must be Positive' as getPrimes of -5", function(){
assert.deepEqual(myApp.getPrimes(-5), 'Number must be Positive');
});

it("should return 'Number must be Positive' as getPrimes of 0", function(){
assert.deepEqual(myApp.getPrimes(0), 'Number must be Positive');
});

})

})
