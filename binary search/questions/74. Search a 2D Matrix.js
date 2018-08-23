/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,
Consider the following matrix:
[ [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50] ]
Given target = 3, return true.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
  search from top right, if target > value, row++, if target < value, col--
 */
 
 
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0)  return false;
    var row = 0;
    var col = matrix[0].length-1;
    while(row < matrix.length && col >=0) {
        if(matrix[row][col] < target) {
            row++;
        } else if(matrix[row][col] > target) {
            col --;
        } else {
            return true;
        }
    }
    return false;
};
