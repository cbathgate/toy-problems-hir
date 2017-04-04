// Write a function productAllNums() that takes an array of integers and 
// returns an array of the products.

// Constraints: O(n) time and space, do not use division
// Edge cases: 0 in the array

var productAllNums = function(arr) {

  var result = [];
  var productSoFar = 1;

  for(var i = 0; i < arr.length; i++) {
    result.push(productSoFar);
    productSoFar *= arr[i]
  }

  productSoFar = 1;

  for(var i = arr.length - 1; i >= 0; i--) {
    result[i] = result[i] * productSoFar;
    productSoFar *= arr[i];
  }

  return result;

}