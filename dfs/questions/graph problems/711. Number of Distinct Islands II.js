/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.
Count the number of distinct islands. An island is considered to be the same as another if they have the same shape, 
or have the same shape after rotation (90, 180, or 270 degrees only) or reflection (left/right direction or up/down direction).
Example 1:
11000
10000
00001
00011
Given the above grid map, return 1. 
Notice that:
11
1
and
 1
11
are considered same island shapes. Because if we make a 180 degrees clockwise rotation on the first island, 
then two islands will have the same shapes.
Example 2:
11100
10001
01001
01110
Given the above grid map, return 2.
Here are the two distinct islands:
111
1
and
1
1
Notice that:
111
1
and
1
111
are considered same island shapes. Because if we flip the first array in the up/down direction, then they have the same shapes.
Note: The length of each dimension in the given grid does not exceed 50.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 using the first example:
 first island is:  [ 0, 0 ], [ 1, 0 ], [ 0, 1 ] 
 and it's reflection + rotation are below 8 forms: 
   s[0] = [ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ] ],
   s[1] = [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ] ],
   s[2] = [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ] ],
   s[3] = [ [ 0, 0 ], [ 1, -1 ], [ 1, 0 ] ],
   s[4] =  [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ] ],
   s[5] =  [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ] ],
   s[6] = [ [ 0, 0 ], [ 1, -1 ], [ 1, 0 ] ],
   s[7] = [ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ] ] 
   we pick the smallest to represent it, it would be: [ 0, 0 ], [ 0, 1 ], [ 1, 0 ]
  second island is: [ 2, 4 ], [ 3, 4 ], [ 3, 3 ], 
  it's transformation are below 8 forms. so we pick the smallest to represent it.
   s[0] = [ [ 0, 0 ], [ 1, -1 ], [ 1, 0 ] ],
   s[1] = [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ] ],
   s[2] = [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ] ],
   s[3] = [ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ] ],
   s[4] = [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ] ],
   s[5] = [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ] ],
   s[6] = [ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ] ],
   s[7] = [ [ 0, 0 ], [ 1, -1 ], [ 1, 0 ] ] 
   we pick the smallest to represent it, it would be: [ 0, 0 ], [ 0, 1 ], [ 1, 0 ]
   these two islands are the same, so the distinct island number is 1;
 */
var numDistinctIslands2 = function(grid) {
    var set = new Set();
    var visited = [], island;
    for(var i=0; i<grid.length; i++) {
        visited[i] = [];
        for(var j=0; j<grid[0].length; j++) {
            visited[i][j] = false;
        }
    }
    
    for(var i=0; i<grid.length; i++) {
        for(var j=0; j<grid[0].length; j++) {
            if(!visited[i][j] && grid[i][j] === 1) {
                island = [];
                var s = [[], [], [], [], [], [], [], []];
                dfs(i, j, grid, visited, island);
                set.add(_norm(island, s));
            }
        }
    }
    return set.size;
};

var dfs = function(i, j, grid, visited, island) {
    if(i < 0 || j <0 || i >= grid.length || j >=grid[0].length || visited[i][j] || grid[i][j] !== 1)  return;
    visited[i][j] = true;
    island.push([i, j]);
    dfs(i+1, j, grid, visited, island);
    dfs(i-1, j, grid, visited, island);
    dfs(i, j+1, grid, visited, island);
    dfs(i, j-1, grid, visited, island);
    return;
};


var _norm = function(island, s) {
    for(var item of island) {
        var x = item[0];
        var y = item[1];
        s[0].push([x, y]);
        s[1].push([-x, y]);
        s[2].push([x, -y]);
        s[3].push([-x, -y]);
        s[4].push([-y, x]);
        s[5].push([y, -x]);
        s[6].push([-y, -x]);
        s[7].push([y, x]);
    }
    
    for(var i=0; i<8; i++) {
        s[i].sort((itemA, itemB) => {
            if(itemA[0] === itemB[0]) {
                return itemA[1] - itemB[1];
            } else {
                return itemA[0] - itemB[0];
            }
        });
        
        for(var k=1; k<s[i].length; k++) {
            s[i][k][0] = s[i][k][0] - s[i][0][0];
            s[i][k][1] = s[i][k][1] - s[i][0][1];
        }
        s[i][0] = [0, 0];
    }
    s.sort();
    return s[0].toString();
};
