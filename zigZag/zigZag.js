// 
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

// Credit: LeetCode



var convert = function(s, numRows) {
  var rows = {};
  var count = 0;
  var increase = true;
  
  for (var i = 0; i < s.length; i++) {
    if (!rows[count]) {
      rows[count] = [];
    }
    rows[count].push(s[i]);
    
    if ((count + 1) === numRows) {
      increase = false;
    }
    
    if ((count - 1) < 0) {
      increase = true;
    }
    
    if (increase) {
      count++;
    } else {
      count--;
    }
  }
  
  var returnString = [];
  for (var key in rows) {
    returnString.push(rows[key].join(''));
  }
  return returnString.join('');
};