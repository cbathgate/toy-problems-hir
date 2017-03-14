// Have the function SimpleMode(arr) take the array of numbers stored in arr and return 
// the number that appears most frequently (the mode). 
// For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. 
// If there is more than one mode return the one that appeared in the array first 
// (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first).

// Source: coderbye

function SimpleMode(arr) { 
  var currNum = 0;
  var mode = {};
  for (var i = 0; i < arr.length; i++) {
    if (!mode[arr[i]]) {
      mode[arr[i]] = 1;
    } else {
      mode[arr[i]] += 1;
    }
  }
  console.log(mode);
  var mostNum = 0;
  var modeNum = 0;
  for (var key in mode) {
    if (mode[key] > mostNum) {
      modeNum = key;
      mostNum = mode[key];
    }
  }
  
  return modeNum;  
}