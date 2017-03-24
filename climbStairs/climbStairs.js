// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Approach 1: Brute Force (decision tree)

// Space complexity: O(n)
// Time complexity: O(2^n)

var climbStairs = function(n) {
  var combos = 0;
  var climbCombos = function(sum) {
    if (sum === n) {
      return 1;
    } else if (sum > n) {
      return 0;
    } else {
      climbCombos(sum + 1);
      climbCombos(sum + 2);
    }
  };
  climbCombos(0);
  return combos;
};


// Approach 2: Fib Alg

// Space complexity: O(1)
// Time complexity: O(n)

var climbStairsFib = function(n) {
  if (n === 1) {
    return 1;
  } 
  var first = 1;
  var second = 2;
  for (var i = 3; i <= n; i++) {
    var third = first + second;
    var first = second;
    var second = third;
  }
  return second;
}
