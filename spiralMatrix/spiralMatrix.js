/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  var spiraled = [];
  var startRow = 0;
  var endRow = matrix.length - 1;
  var startCol = 0;
  var endCol = matrix.length - 1;

  while (startRow <= endRow && startCol <= endCol) {

    for (var i = startCol; i <= endCol; i++) {
      spiraled.push(matrix[startRow][i]);
    }
    startRow++;

    for (var j = startRow; j <= endRow; j++) {
      spiraled.push(matrix[j][endCol]);
    }
    endCol--;

    if (startRow <= endRow) {
      for (var k = endCol; k >= startCol; k--) {
        spiraled.push(matrix[endRow][k]);
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (var m = endRow; m >= startRow; m--) {
        spiraled.push(matrix[m][startCol]);
      }
      startCol++;
    }


  }


  return spiraled;
};