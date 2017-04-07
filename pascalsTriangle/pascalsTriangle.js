// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// Problem courtesy of LeetCode

var pascal = function() {
  
  var mem = {};

  var createPascal = function(numRows) {
    
    if (numRows === 1) {
      return [1];
    }

    var result = [[1],[1,1]];

    var currentRow = 3;

    while (numRows > 2) {

      if (mem[currentRow]) {
        result.push(mem[currentRow]);
      } else {

        var row = [1];
        var lastResultRow = result[result.length - 1];

        for (var i = 0; i < lastResultRow.length - 1; i++) {
          var addNextNum = lastResultRow[i] + lastResultRow[i + 1];
          row.push(addNextNum);
        }

        row.push(1);
        result.push(row);
        mem[currentRow] = row;
      } 

      numRows--;
      currentRow++;
    } 
    return result;
  }

  return createPascal; 
};