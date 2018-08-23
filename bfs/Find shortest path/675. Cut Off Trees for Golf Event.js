/*
You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:
0 represents the obstacle can't be reached.
1 represents the ground can be walked through.
The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. 
And after cutting, the original place has the tree will become a grass (value 1).
You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. 
If you can't cut off all the trees, output -1 in that situation.
You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.
Example 1:
Input: 
[ [1,2,3],
 [0,0,4],
 [7,6,5]]
Output: 6
Example 2:
Input: 
[ [1,2,3],
 [0,0,0],
 [7,6,5]]
Output: -1
Example 3:
Input: 
[ [2,3,4],
 [0,0,5],
 [8,7,6]]
Output: 6
Explanation: You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.
*/

/**
 * @param {number[][]} forest
 * @return {number}
 
 to find all trees from start (0, 0)
 1. sort all trees in height order and store in the array
 2. in the array, we need to find the shortest path(0, 0) => arr[0](tree 1) => arr[1](tree 1) => arr[2](tree 2) => arr[n](tree n) 
 3. use a bfs to find the minimum path between two points: (sx, sy) => (tx, ty)
 O(mn * mn)
 */
var Tree = function(h, x, y) {
    this.h = h;
    this.x = x;
    this.y = y;
};

var cutOffTree = function(forest) {
    var arr = [], sum=0, sx = 0, sy = 0, m=forest.length, n=forest[0].length;
    for(var i=0; i<forest.length; i++) {
        for(var j=0; j<forest[0].length; j++) {
            if(forest[i][j] > 0) 
                arr.push(new Tree(forest[i][j], i, j));
        }
    }
    arr.sort((a, b) => a.h - b.h);

    for(i=0; i<arr.length; i++) {
        var path = BFS(sx, sy, arr[i], forest, m, n);
        if(path === -1)  return -1;
        sum+= path;
        sx = arr[i].x;
        sy = arr[i].y;
    }
    return sum;
};

var BFS = function(sx, sy, destTree, forest, m, n) {
    var visited = new Set(), dir = [[-1, 0], [1, 0], [0, 1], [0, -1]], st = [];
    visited.add(sx+':'+sy);
    st.push({x: sx, y: sy, distance: 0});
    while(st.length > 0) {
        var cur = st.shift();
        if(cur.x === destTree.x && cur.y === destTree.y)  return cur.distance;
        for(var i=0; i<4; i++) {
            var x = cur.x + dir[i][0];
            var y = cur.y + dir[i][1];
            if(x <0 || y<0 || x>= m || y>=n || !forest[x][y] || visited.has(x+':'+y))  continue;
            visited.add(x+':'+y);
            st.push({x: x, y: y, distance: cur.distance+1});
        }
    }
    return -1;
};
