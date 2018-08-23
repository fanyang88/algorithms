/*
There is a ball in a maze with empty spaces and walls. 
The ball can go through empty spaces by rolling up (u), down (d), left (l) or right (r), but it won't stop rolling until hitting a wall.
When the ball stops, it could choose the next direction. There is also a hole in this maze. 
The ball will drop into the hole if it rolls on to the hole.
Given the ball position, the hole position and the maze, find out how the ball could drop into the hole by moving the shortest distance.
The distance is defined by the number of empty spaces traveled by the ball from the start position (excluded) to the hole (included). 
Output the moving directions by using 'u', 'd', 'l' and 'r'. Since there could be several different shortest ways, 
you should output the lexicographically smallest way. If the ball cannot reach the hole, output "impossible".
The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. 
You may assume that the borders of the maze are all walls. The ball and the hole coordinates are represented by row and column indexes.
Example 1   Input 1: a maze represented by a 2D array
0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0
Input 2: ball coordinate (rowBall, colBall) = (4, 3)
Input 3: hole coordinate (rowHole, colHole) = (0, 1)
Output: "lul"
Explanation: There are two shortest ways for the ball to drop into the hole.
The first way is left -> up -> left, represented by "lul".
The second way is up -> left, represented by 'ul'.
Both ways have shortest distance 6, but the first way is lexicographically smaller because 'l' < 'u'. So the output is "lul".

Example 2   Input 1: a maze represented by a 2D array
0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0
Input 2: ball coordinate (rowBall, colBall) = (4, 3)
Input 3: hole coordinate (rowHole, colHole) = (3, 0)
Output: "impossible"
Explanation: The ball cannot reach the hole.
*/

/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
var findShortestWay = function(maze, ball, hole) {
    var st = [ball],  visited = {}, path={}, m=maze.length, 
    n = maze[0].length, dir = [[0, 1], [0, -1], [-1, 0], [1, 0]], 
    pathDir = ['r', 'l', 'u', 'd'], minDist = Infinity, res;
    
    visited[ball[0] + '_'+ ball[1]]=0;
    while(st.length > 0) {
        var cur = st.shift();
        for(var k=0; k<4; k++) {
            var x = cur[0];
            var y = cur[1];
            var step =visited[cur[0]+'_'+cur[1]];
            while(x + dir[k][0] < m && x + dir[k][0] >=0 && y + dir[k][1] < n && y + dir[k][1] >=0 &&
                  maze[x+dir[k][0]][y+dir[k][1]] === 0) {
                if(x === hole[0] && y=== hole[1])  break;
                x += dir[k][0];
                y += dir[k][1];
                step ++;
            }
            var key = x+'_' + y;
            if(step === visited[cur[0]+'_'+cur[1]])  continue; // stay at the hole
            if(visited[key] === undefined || visited[key]  >= step) {
                path[key] = ( path[cur[0]+'_' + cur[1]] || '') + pathDir[k];
                visited[key] = step;
                
                if(x === hole[0] && y=== hole[1]) {
                    if(minDist >= step) {
                        res = minDist > step ? path[key] : getMin(res, path[key]);
                        minDist = step;
                    }
                } else {
                    st.push([x, y]);
                }
            }
        }
    }
    return res? res : "impossible";
};

var getMin = function(str1, str2) {
    if(str1 > str2)  return str2;
    if (str1 < str2)  return str1;
    return str1;
};
