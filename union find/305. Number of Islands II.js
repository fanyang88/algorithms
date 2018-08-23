/*
A 2d grid map of m rows and n columns is initially filled with water. 
We may perform an addLand operation which turns the water at position (row, col) into a land. 
Given a list of positions to operate, count the number of islands after each addLand operation. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.
Example:
Given m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]].
Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1 represents land).
0 0 0
0 0 0
0 0 0
Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.
1 0 0
0 0 0   Number of islands = 1
0 0 0
Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.
1 1 0
0 0 0   Number of islands = 1
0 0 0
Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.
1 1 0
0 0 1   Number of islands = 2
0 0 0
Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.
1 1 0
0 0 1   Number of islands = 3
0 1 0
We return the result as an array: [1, 1, 2, 3]
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 use n*x + y to convert to 1D
 for example: positions = [[1,0], [0,1], [1,2], [2,1], [1,1], ]
 when add [1,0]: root[3] = 3
 when add [0,1]: root[1] = 1  
 when add [1,2]: root[5] = 5  
 when add [2,1]: root[7] = 7 
 when add [1,1]: root[4] = 4, check left, since 4!=root[3]  curPos = 3, root[4] = 3
                              check right, since 3!=root[5]  curPos = 5, root[3] = 5
                              check top, since 5!=root[1]  curPos = 1, root[5] = 1
                              check bottom, since 1!=root[7]  curPos = 7, root[1] = 7
                              roots= [-1, 7, -1, 5, 3, 1, 7, -1]
 when add [0,0]: root[0] = 0, check right, since root[1] = 7 !=0, root[0] = 7, curPos = 7
                              check bottom,since root[3] = 5,root[5] = 1,root[1] = 7,superroot[3]=7 curPos=7=superroot[3],skip 
 */
var numIslands2 = function(m, n, positions) {
    var dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    var count = 0, res= [];
    var root = new Array(m*n).fill(-1);
    
    // perform union find
    for(var pos of positions) {
        var curPos = n*pos[0] + pos[1];
        root[curPos] = curPos;
        count++;
        
        for(var dir of dirs) {
            var x = pos[0] + dir[0];
            var y = pos[1] + dir[1];
            var neighbor = n*x + y;
            
            if(x < 0 || x>= m || y<0 || y>=n || root[neighbor] === -1)   continue;
            var neighborRoot = find(neighbor, root);
            
            if(curPos != neighborRoot) {        // if neighbor is in another island
                root[curPos] = neighborRoot;    // union two islands 
                curPos = neighborRoot;          // current tree root = joined tree root
                count--;               
            }
        }
        res.push(count);
    }
    return res;
};

var find = function(id, root) {
    if(root[id] === id)  return id;
    return find(root[id], root);
}
