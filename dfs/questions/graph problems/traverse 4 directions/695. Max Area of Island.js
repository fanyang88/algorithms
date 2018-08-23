/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
Example 1:
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:
[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var maxArea = 0, row = grid.length, col = grid[0].length;
  
    for(var i=0; i<row; i++) {
         for(var j=0; j<col; j++) {
             if(grid[i][j] === 1) {
                 var area = dfs(grid, i, j, row, col, 0);
                 maxArea = Math.max(maxArea, area);
             }
         }
    }
    return maxArea;
};

var dfs = function(grid, x, y, row, col, area) {
    if(x >= row || x<0 || y>= col || y<0 || grid[x][y] === 0) return area;
    grid[x][y] = 0;
    area ++;
    area = dfs(grid, x+1, y, row, col, area);
    area = dfs(grid, x-1, y, row, col, area);
    area = dfs(grid, x, y+1, row, col, area);
    area = dfs(grid, x, y-1, row, col, area);

    return area;
}