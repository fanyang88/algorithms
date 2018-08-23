/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
For example, given the following matrix:
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.

1 0 1 0 0
1 0 1 1 1
1 1 1 2 2
1 0 0 1 0

*/

/**
 * @param {character[][]} matrix
 * @return {number}
if(matrix[i][j] ===0)  dp[i][j] = 0;
else dp[i][j] = matrix[i][j] + min(dp[i-1][j], dp[i][j-1],dp[i-1][j-1])
 */
var maximalSquare = function(matrix) {
    if(matrix.length===0)  return 0;
    var dp =[], m= matrix.length, n= matrix[0].length, maxV = 0;
    for(var i=0; i<m; i++) dp[i] = [];
    for(var i=0; i<m; i++) {
        for(var j=0; j<n; j++) {
            dp[i][j] = 0;
            if(matrix[i][j] !=='0') {
                var upper = i-1 >=0 ? (dp[i-1][j] || 0) :0;
                var left = dp[i][j-1] || 0;
                var diagonal = i-1 >=0 ? (dp[i-1][j-1] || 0) : 0;
                dp[i][j] = +matrix[i][j] + Math.min(left, upper, diagonal);
            }
        }
    }
    for(var i=0; i<m; i++) {
        for(var j=0; j<n; j++) {
            if(matrix[i][j] !== 0) {
                maxV = Math.max(maxV, dp[i][j]);
            }
        }
    }
    return maxV*maxV;
};
