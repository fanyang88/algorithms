/*
There is a ball in a maze with empty spaces and walls. 
The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. 
When the ball stops, it could choose the next direction.
Given the ball's start position, the destination and the maze, determine whether the ball could stop at the destination.
The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. 
You may assume that the borders of the maze are all walls. 
The start and destination coordinates are represented by row and column indexes.
Example 1   Input 1: a maze represented by a 2D array
0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0
Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (4, 4)
Output: true
Explanation: One possible way is : left -> down -> left -> down -> right -> down -> right.

Example 2   Input 1: a maze represented by a 2D array
0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0
Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (3, 2)
Output: false
Explanation: There is no way for the ball to stop at the destination.

Note:
There is only one ball and one destination in the maze.
Both the ball and the destination exist on an empty space, and they will not be at the same position initially.
The given maze does not contain border (like the red rectangle in the example pictures), 
but you could assume the border of the maze are all walls.
The maze contains at least 2 empty spaces, and both the width and height of the maze won't exceed 100.
*/

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 use BFS
 */
var hasPath = function(maze, start, destination) {
    var visited = new Set(), st= [], dir = [[0, 1], [0, -1], [1, 0], [-1, 0]], m=maze.length, n=maze[0].length;
    
    visited.add(start[0]+':'+start[1]);
    st.push(start);
    while(st.length > 0) {
        var cur = st.shift();
        if(cur[0]=== destination[0] && cur[1]=== destination[1])  return true;
        // get the stopping position for each dir, and mark it to be visited
        for(var i=0; i<4; i++) {  
            var x = cur[0];
            var y = cur[1];
            // continue the ball in this direction, put the stop point into st.
            while(x >=0 && y>=0 && x< m && y< n && maze[x][y] === 0) {
                x += dir[i][0];
                y += dir[i][1];
            }
            // This is the stop position
            x = x - dir[i][0];
            y = y - dir[i][1];
            if(visited.has(x+':'+y))  continue;
            visited.add(x+':'+y);
            st.push([x, y]);
        }
    }
    return false;
};  
