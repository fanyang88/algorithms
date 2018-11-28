/*
We have a two dimensional matrix A where each value is 0 or 1.
A move consists of choosing any row or column, and toggling each value in that row or column: 
changing all 0s to 1s, and all 1s to 0s.
After making any number of moves, every row of this matrix is interpreted as a binary number, 
and the score of the matrix is the sum of these numbers.
Return the highest possible score.

Example 1:

Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
*/

/**
 * @param {number[][]} A
 * @return {number}
 
 0 0 1 1    1 1 0 0    1 1 1 1 
 1 0 1 0 -> 1 0 1 0 -> 1 0 0 1
 1 1 0 0    1 1 0 0    1 1 1 1
to get the highest score, we need to make sure the first row is all 1.
Flip all rows that start with zero;
Flip all columns where the number of zeros is larger than the number of ones;
 
 */
var matrixScore = function(A) {
    var m = A.length, n = A[0].length, res = 0;
    for(var i=0; i<m; i++) {
        if(A[i][0] === 0) flip(true, A, i, m, n);
    }
    var half = parseInt((m+1)/2);
    for(var i=0; i<n; i++) {
        var total = 0;
        for(var j=0; j<m; j++) {
            total += (A[j][i] === 0 ? 1 :0);
        }
        if(total >= half) flip(false, A, i, m, n);
    }
    
    for(var i=0; i<m; ++i) {
        var cur = 1;
        for (var j=n-1; j>=0; j--) {
            res += A[i][j] * cur;
            cur = cur*2;
        }
    }  
    return res;
};

var flip = function(isRow, A, i, m, n) {
  if(isRow) {
      for(var j=0; j<n; j++) {
          A[i][j] = A[i][j] ? 0 :1;
      }
  } else {
      for(var j=0; j<m; j++) {
          A[j][i] = A[j][i] ? 0 :1;
      }
  }
};
