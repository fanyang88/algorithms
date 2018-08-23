/*
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4

*/


/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 
 use DFS, start from each gate, fill if neighbor is not -1, update the value based on shortest value
 */
var wallsAndGates = function(rooms) {
    if(rooms.length===0)  return;
    var m = rooms.length, n = rooms[0].length, visited = new Set();
    for(var i=0; i<m; i++) {
        for(var j=0; j<n; j++) {
            if(rooms[i][j] === 0) {
                dfs(i, j, rooms, visited, m, n, 0);
            }
        }
    }
};

var dfs = function(x, y, rooms, visited, m, n, dist) {
    if(x<0 || x>=m || y<0 || y>=n || visited.has(x+':'+y) || rooms[x][y] === -1)  return;
    if(rooms[x][y] < dist)  return;  // already have the min value
    visited.add(x+':'+y);
    rooms[x][y] = dist;
    
    dfs(x-1, y, rooms, visited, m, n, dist+1);
    dfs(x+1, y, rooms, visited, m, n, dist+1);
    dfs(x, y-1, rooms, visited, m, n, dist+1);
    dfs(x, y+1, rooms, visited, m, n, dist+1);
    visited.delete(x+':'+y);
};
