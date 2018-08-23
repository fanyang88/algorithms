/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.
Example 1:
11110
11010
11000
00000
Answer: 1
Example 2:
11000
11000
00100
00011
Answer: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 * use DFS to tranverse neighbors
 */
var numIslands = function(grid) {
    var visited =[], count=0;
    // Construct visited map to gird.
    for(i=0; i<grid.length; i++) {
        visited.push([]);
        for(j=0; j<grid[0].length; j++) {
            visited[i][j] = false;
        }
    }
    
     for(i=0; i<grid.length; i++) {
        for(j=0; j<grid[0].length; j++) {
            if(!visited[i][j] && grid[i][j] === '1') {
                count++;
                dfs(i, j, grid, visited);
            }
        }
     }
     return count;
};

  var dfs = function(i, j, grid, visited) {
         visited[i][j] = true;
    if(i-1>=0 && grid[i-1][j] === '1' && !visited[i-1][j]) {
        dfs(i-1, j, grid, visited);
    }
    if(j-1>=0 && grid[i][j-1] === '1' && !visited[i][j-1]) {
        dfs(i, j-1, grid, visited);
    }
    if(i+1<grid.length && grid[i+1][j] === '1' && !visited[i+1][j]) {
        dfs(i+1, j, grid, visited);
    }
    if(j+1<grid[0].length && grid[i][j+1] === '1' && !visited[i][j+1]) {
        dfs(i, j+1, grid, visited);
    }
}
