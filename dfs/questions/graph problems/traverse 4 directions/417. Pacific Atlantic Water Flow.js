/*
Given an m x n matrix of non-negative integers representing the height of each unit cell 
in a continent, the "Pacific ocean" touches the left and top edges of the matrix 
and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) 
from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:
The order of returned grid coordinates does not matter.
Both m and n are less than 150.
Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] 
(positions with parentheses in above matrix).
*/


/**
 * @param {number[][]} matrix
 * @return {number[][]}
 Two Queue and add all the Pacific border to one queue; Atlantic border to another queue.
Keep a visited matrix for each queue. In the end, add the cell visited by two queue to the result.
DFS: initially we have height to be min_value, 
   Since water can only flow from high/equal cell to low cell, 
   add the neighboor cell with height larger or equal to current cell to the queue and mark as visited.
 */
var pacificAtlantic = function(matrix) {
    if(matrix.length===0)  return [];
    var pacific = [], atlantic=[], m= matrix.length, n=matrix[0].length;
    var res=[], minV = Number.MIN_SAFE_INTEGER;
    for(var i=0; i<m; i++) {
        pacific[i] = [];
        atlantic[i] = [];
    }
   
    for(var i=0; i<m; i++) {
        dfs(matrix, pacific, minV, i, 0, m, n);  // belong to pacific
        dfs(matrix, atlantic, minV, i, n-1, m, n);  // belong to atlantic
    }
    for(var j=0; j<n; j++) {
        dfs(matrix, pacific, minV, 0, j, m, n);
        dfs(matrix, atlantic, minV, m-1, j, m, n);
    }
    
    for(var i=0; i<m; i++) {
         for(var j=0; j<n; j++) {
             if(pacific[i][j] && atlantic[i][j])  
                 res.push([i, j]);
         }
     }
    return res;
};

var dfs = function(matrix, visited, height, i, j, m, n) {
    if(i<0 || j<0 || i>=m || j>=n || visited[i][j] || matrix[i][j] < height) return;
    visited[i][j] = true;
    dfs(matrix, visited, matrix[i][j], i-1, j, m, n);
    dfs(matrix, visited, matrix[i][j], i+1, j, m, n);
    dfs(matrix, visited, matrix[i][j], i, j-1, m, n);
    dfs(matrix, visited, matrix[i][j], i, j+1, m, n);
};

