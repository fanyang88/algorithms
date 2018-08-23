/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

Example 1:

Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
Example 2:

Input:
matrix = [
  [1,2],
  [2,2]
]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.
*/


/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    var m =matrix.length, n = matrix[0].length;
     for(var i = 0; i < m - 1; i++) {
        for(var j = 0; j < n - 1; j++) {
            if (matrix[i][j] != matrix[i+1][j+1]) return false;
        }
      }
    return true;
};