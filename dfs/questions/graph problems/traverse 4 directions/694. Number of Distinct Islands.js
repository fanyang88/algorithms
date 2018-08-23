/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) 
connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
Count the number of distinct islands. An island is considered to be the same as another 
if and only if one island can be translated (and not rotated or reflected) to equal the other.
Example 1:
11000
11000
00011
00011
Given the above grid map, return 1.
Example 2:
11011
10000
00001
11011
Given the above grid map, return 3.
Notice that:
11
1
and
 1
11
are considered different island shapes, because we do not consider reflection / rotation.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    var set = new Set(), count = 0, row = grid.length, col = grid[0].length;
    for(var i=0; i<grid.length; i++) {
        for(var j=0; j<grid[0].length; j++) {
            if(grid[i][j] === 1) {
                var str = dfs(i, j, grid, '', row, col);
                set.add(str);
                count++;
            }
        }
    }
    return set.size;
};

var dfs = function(i, j, grid, str, row, col) {
    if(i >= row || j >= col || i <0 || j <0 || grid[i][j] === 0)  
        return str;
    grid[i][j] = 0;
    str = dfs(i+1, j, grid, str+'down', row, col);
    str = dfs(i, j+1, grid, str+'right', row, col);
    str = dfs(i-1, j, grid, str+'up', row, col);
    str = dfs(i, j-1, grid, str+'left', row, col);
    return str;
};
