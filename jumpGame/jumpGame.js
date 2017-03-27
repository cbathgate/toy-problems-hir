// Jump Game //

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// For example:
// A = [2,3,1,1,4], return true.

// A = [3,2,1,0,4], return false.

var canJump = function(array) {
  var jumpTrack = 0;
  for (var i = 0; i < array.length; i++) {
    if (i > jumpTrack) {
      return false;
    }
    jumpTrack = Math.max(jumpTrack, i + array[i]);
  }
  return true;
};

