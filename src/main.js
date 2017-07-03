'use strict'
const getPrimes = function(num) {
  
  let primeList = [];
  
  if (typeof(num) != 'number'){
    return 'Input must be a Number';
  }else if (num <= 0){
    return 'Number must be Positive';
  }else{
    for (let i=2; i <= num; i++){
      if (testPrime(i) !== undefined){
        primeList.push(testPrime(i));
      }
    }return primeList;
  }
};
const testPrime = function(num) {
  if(num == 2){
    return num;
  }else{
    for(let x = 2; x <= Math.sqrt(num); x++){
      if(num % x === 0){
        return;
      }
    }return num;  
  }
}

module.exports = {
getPrimes: getPrimes,
testPrime: testPrime
}