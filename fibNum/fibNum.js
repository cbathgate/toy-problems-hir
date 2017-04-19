// Write a function fib() that a takes 
// an integer n and returns the nth fibonacci number.

// Naive solution using recursion
var fibRecursive = function(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  }
};

// Iterative Solution
var fibIterative = function(n) {
  if (n === 0 || n === 1) {
    return n;
  }
 
  var currNum = 1;
  var prevNum = 0;
  var temp;

  while (n > 1) {
    temp = currNum;
    currNum += prevNum;
    prevNum = temp;
    n--;
  }

  return currNum;
};

// Fib Memoize Solution, with Class
var Fibonacci = function() {
  this.memo = {};
}

Fibonacci.prototype.fibNum = function(n) {
  if (n === 0 || n === 1) {
    return n;
  } else if (this.memo[n]) {
    return this.memo[n];
  } else {
    var result = this.fibNum(n - 1) + this.fibNum(n - 2);
    this.memo[n] = result;
    return result;
  }
}

// Fib Memoize, with closure
var fibMemo = function() {

  var memo = {};

  return findFib = function() {
    if (n === 0 || n === 1) {
      return n;
    } else if (memo[n]) {
      return memo[n];
    } else {
      var result = findFib(n - 1) + findFib(n - 2);
      memo[n] = result;
      return result;
    }
  }
}



