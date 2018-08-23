/*
You are playing a simplified Pacman game. You start at the point (0, 0), and your destination is (target[0], target[1]). There are several ghosts on the map, the i-th ghost starts at (ghosts[i][0], ghosts[i][1]).

Each turn, you and all ghosts simultaneously *may* move in one of 4 cardinal directions: north, east, west, or south, going from the previous point to a new point 1 unit of distance away.

You escape if and only if you can reach the target before any ghost reaches you (for any given moves the ghosts may take.)  If you reach any square (including the target) at the same time as a ghost, it doesn't count as an escape.

Return True if and only if it is possible to escape.

Example 1:
Input: 
ghosts = [[1, 0], [0, 3]]
target = [0, 1]
Output: true
Explanation: 
You can directly reach the destination (0, 1) at time 1, while the ghosts located at (1, 0) or (0, 3) have no way to catch up with you.
Example 2:
Input: 
ghosts = [[1, 0]]
target = [2, 0]
Output: false
Explanation: 
You need to reach the destination (2, 0), but the ghost at (1, 0) lies between you and the destination.
Example 3:
Input: 
ghosts = [[2, 0]]
target = [1, 0]
Output: false
Explanation: 
The ghost can reach the target at the same time as you.

*/


/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 
 Your distance to target is abs(t[0]) + abs(t[1]).
For every ghost g, distance to target is abs(t[0] - g[0]) + abs(t[1] - g[1]).
You need to be closer to target than any ghost to escape.
 */
var escapeGhosts = function(ghosts, target) {
    var d1 = Math.abs(target[0]) + Math.abs(target[1]);
    for(var ghost of ghosts) {
        var d2 = Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1]);
        if(d2 <= d1)  return false;
    }
    return true;
};