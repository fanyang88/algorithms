/*
Given an integer matrix, find the length of the longest increasing path.
From each cell, you can either move to four directions: left, right, up or down. 
You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).
Example 1:
nums = [
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Return 4
The longest increasing path is [1, 2, 6, 9].
Example 2:
nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Return 4
The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/

var longestIncreasingPath = function(matrix) {
    if(matrix.length === 0)  return 0;
    var cached = [], m = matrix.length, n = matrix[0].length, maxVal=0;
    var dirs = [[-1,0], [1, 0], [0, -1], [0, 1]];
    for(var i=0; i<m; i++) {
        cached[i] = [];
    }
    for(var i=0; i<m; i++) {
        for(var j=0; j<n; j++) {
            maxVal = Math.max(maxVal, dfs(matrix, i, j, m, n, cached, dirs));
        }
    }
    return maxVal;
};


var dfs = function(matrix, i, j, m, n, cached, dirs) {
    if(cached[i][j])   return cached[i][j];
    var max = 1;
    for(var dir of dirs) {
        var x = i + dir[0], y = j + dir[1];
        if(x < 0 || x >= m || y < 0 || y >= n || matrix[i][j] >= matrix[x][y]) continue;
        var len = 1 + dfs(matrix, x, y, m, n, cached, dirs);
        max = Math.max(max, len);
    }
    cached[i][j] = max;
    return max;
}
