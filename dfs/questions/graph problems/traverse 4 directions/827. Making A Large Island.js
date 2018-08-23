/*
In a 2D grid of 0s and 1s, we change at most one 0 to a 1.
After, what is the size of the largest island? 
(An island is a 4-directionally connected group of 1s).

Example 1:
Input: [[1, 0], [0, 1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, 
then we get an island with area = 3.
Example 2:

Input: [[1, 1], [1, 0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, 
only one island with area = 1.
Example 3:

Input: [[1, 1], [1, 1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    var map= {}, dir= [[0, 1], [0, -1], [1, 0], [-1, 0]], color = 2, area=[0];
    // step1: get how many islands and each area and strore in a map
    for(var i=0; i<grid.length; i++) {
        for(var j=0; j<grid[0].length; j++) {
            if(grid[i][j] === 1) {
                // color grid[i][j] and its neighbor in the same island to be same color 
                dfs(grid, i, j, color, area);
                map[color] = area[0];
                color++;
                area[0] = 0;
            }
        }
    }
    var maxArea = Math.max(...Object.values(map));
    for(var i=0; i<grid.length; i++) {
        for(var j=0; j<grid.length; j++) {
            if(grid[i][j] === 0) {
                var curArea = 1, set = new Set();
                // check it's four direction, if there is color, plus the area in map
                for(var k=0; k<4; k++) {
                    var x = i + dir[k][0]; 
                    var y = j + dir[k][1];
                    if(x<grid.length && x>=0 && y>=0 && y<grid[0].length && grid[x][y] !== 0 && !set.has(grid[x][y])) {
                        curArea += map[grid[x][y]];
                        set.add(grid[x][y]);
                    }
                }
                maxArea = Math.max(maxArea, curArea);
            }
        }
    }
    return maxArea;
};

var dfs = function(grid, i, j, color, area) {
    if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j] !== 1)  return;
    grid[i][j] = color;
    area[0] ++;
    dfs(grid, i+1, j, color, area);
    dfs(grid, i-1, j, color, area);
    dfs(grid, i, j+1, color, area);
    dfs(grid, i, j-1, color, area);
    return;
};