/*
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

*/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var m = matrix.length, n=matrix[0].length;
    var rowQ = new Set(), colQ = new Set();
    for(var i=0; i<m; i++) {
        for(var j=0; j<n; j++) {
            if(matrix[i][j] === 0) {
                rowQ.add(i);
                colQ.add(j);
            }
        }
    }
    for(var i=0; i<m; i++) {
        if(rowQ.has(i)) {
            matrix[i] = new Array(n).fill(0);
        }
    }
    
    for(var j=0; j<n; j++) {
        if(colQ.has(j)) {
            for(var i=0; i<m; i++) {
                matrix[i][j] = 0;
            }
        }
    }
    return;
};