/*
You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).
Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.
Example 1:
Given input matrix = 
[ [1,2,3],
  [4,5,6],
  [7,8,9]],
rotate the input matrix in-place such that it becomes:
[ [7,4,1],
  [8,5,2],
  [9,6,3]]
Example 2:
Given input matrix =
[ [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]], 
rotate the input matrix in-place such that it becomes:
[ [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11] ]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 
 assign a,b,c,d to be matrix[0][i], matrix[i][n-1], matrix[n-1][n-1-i], matrix[n-1-i][0]
 using start, end:matrix[start][i], matrix[i][end], matrix[end][n-1-i], matrix[n-1-i][start]
 swap them by clockwise order
 */
 
var rotate = function(matrix) {
    var n= matrix.length-1, a, b, c, d;
    var start = 0, end = matrix.length-1;
    while(start < end) {
        for(var i=start; i<end; i++) {
            a = matrix[start][i];
            b = matrix[i][end];
            c = matrix[end][n-i];
            d = matrix[n-i][start];
            
            matrix[start][i] = d;
            matrix[i][end] = a;
            matrix[end][n-i] = b;
            matrix[n-i][start] = c;
        }
        
        start ++;
        end --;
    }
    return;
};
