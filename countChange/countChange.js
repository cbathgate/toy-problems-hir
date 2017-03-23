// You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:
// coins = [1, 2, 5], amount = 11
// return 3 (11 = 5 + 5 + 1)

// Example 2:
// coins = [2], amount = 3
// return -1.

// Note:
// You may assume that you have an infinite number of each kind of coin.

// Greedy implementation

// var coinChange = function(coins, amount) {
//   coins.sort(function(a,b) {
//     return a - b;
//   });
//   var count = 0;
//   var addition = 0;
//   var i = coins.length - 1;
//   var startIndex = i;
//   while(addition !== amount) {
//     if (addition + coins[i] > amount) {
//       i--;
//     } else if (i < 0) {
//       if (startIndex - 1 < 0) {
//         return -1;
//       } else {
//         startIndex--;
//         addition = 0;
//         i = startIndex;
//       }
//     } else {
//       addition += coins[i];
//       count++;
//     }
//   }
//   return count;
// };


var coinChange = function(coins, amount) {
  coins.sort(function(a,b) {
    return b - a;
  });
  // keys: number of coins //value: array of coins
  var cache = {};
  var makeChange = function(addCoinsArray) {
    if (addCoinsArray.length > 0) {
      var result = addCoinsArray.reduce(function(val, accum) {
        val + accum;
      }, 0);
      if (result === amount) {
        cache[addCoinsArray.length] = addCoinsArray;
        return;
      } 
      if (result > amount) {
        return;
      }
    }
    var arrayInput = addCoinsArray;
    for (var i = 0; i < coins.length; i++) {
      arrayInput.push(coins[i]);
      makeChange(arrayInput);
    }

  }

  makeChange([]);

  for (var i = 0; i <= amount; i++) {
    if (cache[i]) {
      return i;
    }
  }

  return -1;
};










