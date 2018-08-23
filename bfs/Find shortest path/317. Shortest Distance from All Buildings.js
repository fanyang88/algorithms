/*
You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. 
You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:
Each 0 marks an empty land which you can pass by freely.
Each 1 marks a building which you cannot pass through.
Each 2 marks an obstacle which you cannot pass through.
For example, given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2):
1 - 0 - 2 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0
The point (1,2) is an ideal empty land to build a house, as the total travel distance of 3+3+1=7 is minimal. So return 7.
Note:
There will be at least one building. If it is not possible to build such house according to the above rules, return -1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 
 since (0, 0) -> (1, 1) == (1, 1) -> (0, 0)
 we check each point '1', recording '1' to '0' distance in a hashmap
 key: '0' position, value: [{pointA '1', distance: dist}, {pointB '1', distance: dist} ...]
 */
var shortestDistance = function(grid) {
    var m = grid.length, n =grid[0].length, map = {}, count=0, sum = Infinity;
    for(var i=0; i<m; i++) {
         for(var j=0; j<n; j++) {
             if(grid[i][j] === 1) {
                 count++;
                 bfs(i, j, map, grid, m, n);
             }
         }
    }
    for(var key in map) {
        if(map[key].length === count) {
            var curSum = map[key].reduce((total, item)=> total+item, 0);
            sum = Math.min(sum, curSum);
        }
    }
    return sum === Infinity ? -1: sum;
};

var bfs = function(x, y, map, grid, m, n) {
    var dir = [[1, 0], [-1, 0], [0, 1], [0, -1]], visited = new Set(), st= [];
    st.push([x, y, 0]);
    visited.add(x+':'+y);
    while(st.length > 0) {
        var cur = st.shift();
        for(var i=0; i<4; i++) {
            var newX = cur[0] + dir[i][0];
            var newY = cur[1] + dir[i][1];
            if(newX <0 || newY<0 || newX>=m || newY>= n || visited.has(newX+':'+newY) ||grid[newX][newY]!==0)  continue;
            var key = newX+':'+newY;
            visited.add(key);
            st.push([newX, newY, 1+cur[2]]);
            if(!map[key]) map[key]= [];
            map[key].push(1+cur[2]);
        }
    }
};
