/*
On an N x N grid, each square grid[i][j] represents the elevation at that point (i,j).
Now rain starts to fall. At time t, the depth of the water everywhere is t. 
You can swim from a square to another 4-directionally adjacent square if and only 
if the elevation of both squares individually are at most t. 
You can swim infinite distance in zero time. Of course, 
you must stay within the boundaries of the grid during your swim.

You start at the top left square (0, 0). 
What is the least time until you can reach the bottom right square (N-1, N-1)?

Example 1:

Input: [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors 
have a higher elevation than t = 0.

You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.
Example 2:

Input: [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation:
 0  1  2  3  4
24 23 22 21  5
12 13 14 15 16
11 17 18 19 20
10  9  8  7  6

The final route is marked in bold.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.
*/

/**
 * @param {number[][]} grid
 * @return {number}
e.g: we have gird as below:  
 0  1  2  3  4     1  1  2  3  4      2  2  2  3  4    5  5  5  5  5      6  6  6  6  6     16  16  16 16 
24 23 22 21  5    24 23 22 21  5      24 23 22 21 5    24 23 22 21 5      24 23 22 21 6    24 23 22 21 16
12 13 14 15 16    12 13 14 15 16      12 13 14 15 16   12 13 14 15 16     12 13 14 15 16   16 16 16 16 16
11 17 18 19 20    11 17 18 19 20      11 17 18 19 20   11 17 18 19 20     11 17 18 19 20   16 17 18 19 20
10  9  8  7  6    10  9  8  7  6      10  9  8  7  6   10  9  8  7  6     10  9  8  7  6   16 16 16 16 16
   time=0           time =1               time =2           time =5           time = 6       time =16
   
At each time, we start from (0,0) to visit all its negbors that has value no larger than that time value.
We use dfs to find a path from (0, 0) down to (n-1,n-1), if we can reach this point, we return true, and this time would be the answer.

We can use binary search to search the time, 
Binary Search + DFS, O(n^2logn)
Binary Search range [0, n*n-1] to find the minimum feasible water level. For each water level, verification using DFS.
 */
var swimInWater = function(grid) {
    var n = grid.length, lo = grid[0][0], hi = n*n-1;
    while(lo < hi) {
        var mid = ~~((lo + hi) / 2);
        if(hasPath(grid, n, mid))  {
            hi = mid;
        } else {
            lo = mid+1;
        }
    }
    return hi;
};

var hasPath = function(grid, n, time) {
    var set  = new Set(), dir= [[0, 1], [0, -1], [1, 0], [-1, 0]];
    if(dfs(0, 0, n, grid, set, time, dir))  return true;
    return false;
};

var dfs = function(x, y, n, grid, set, time, dir) {
    if(x >=n || y>=n || x<0 || y<0 || grid[x][y] > time || set.has(x+':'+y))  return false; 
    if(x === n-1 && y===n-1)  return true;
    set.add(x+':'+y);
    for(var d of dir) {
        var i = x+ d[0];
        var j = y + d[1];
        if(dfs(i, j, n, grid, set, time, dir))  return true;
    }
    return false;
}
