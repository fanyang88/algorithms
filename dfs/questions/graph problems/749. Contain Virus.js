/*
A virus is spreading rapidly, 
and your task is to quarantine the infected area by installing walls.
The world is modeled as a 2-D array of cells, 
where 0 represents uninfected cells, and 1 represents cells contaminated with the virus. 
A wall (and only one wall) can be installed between any two 4-directionally adjacent cells, 
on the shared boundary.

Every night, the virus spreads to all neighboring cells in all four directions unless 
blocked by a wall. Resources are limited. 
Each day, you can install walls around only one region -- the affected area 
(continuous block of infected cells) that threatens the most uninfected cells the following night. 
There will never be a tie.

Can you save the day? If so, what is the number of walls required? 
If not, and the world becomes fully infected, return the number of walls used.

Example 1:
Input: grid = 
[[0,1,0,0,0,0,0,1],
 [0,1,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,0]]
Output: 10
Explanation:
There are 2 contaminated regions.
On the first day, add 5 walls to quarantine the viral region on the left. 
The board after the virus spreads is:

[[0,1,0,0,0,0,1,1],
 [0,1,0,0,0,0,1,1],
 [0,0,0,0,0,0,1,1],
 [0,0,0,0,0,0,0,1]]

On the second day, add 5 walls to quarantine the viral region on the right. 
The virus is fully contained.
Example 2:
Input: grid = 
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output: 4
Explanation: Even though there is only one cell saved, there are 4 walls built.
Notice that walls are only built on the shared boundary of two different cells.
Example 3:
Input: grid = 
[[1,1,1,0,0,0,0,0,0],
 [1,0,1,0,1,1,1,1,1],
 [1,1,1,0,0,0,0,0,0]]
Output: 13
Explanation: The region on the left only builds two new walls.
*/


/**
 * @param {number[][]} grid
 * @return {number}
 [
 [0,1,0,0,0,0,0,1],
 [0,1,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,0]]
 for each infected area, for example for area 1, if not control, would infected 5 cells,  
 for area 2, if not control, would infected 4 cells, so we control area 1 first, 
 each time we get current infected area, next infected area, and how many walls needed from dfs
 then the candidate to put wall is the one with largest next infected area.
 we pick out the candicates and render its current infected area to be 2, 
 and render other island the next infected area to be 1
 the sum of the wall needed for candidate in each round is the answer.
 till there is no next infected area, we can stop.
 */
var containVirus = function(grid) {
    var sum=0, m=grid.length, n= grid[0].length;
    while(true) {
        // each time
        var visited=new Set();
        var nextQ= [];  // to store all the next infected areas 
        var virusArea; // this is the area we need to put wall
        for(var i=0; i<m; i++) {
            for(var j=0; j<n; j++) {
                if(grid[i][j] !== 1 || visited.has(i*n+j)) continue;
                // dfs to get current infected area, # of walls needed, and next infected area for each island
                var nextInfected = new Set(), curInfected = new Set(), walls=[0];
                dfs(i, j, grid, nextInfected, curInfected, visited, walls, m, n);
                if(nextInfected.size===0) continue;
                
                //we need to pick the max nextInfestedArea to be the candicate.
                if(nextQ.length ===0 || nextQ[virusArea.ind].size < nextInfected.size) {
                    virusArea = {ind:nextQ.length, infected: curInfected, toPutWall: walls[0]};
                }
                nextQ.push(nextInfected);
            }
        }
        
        if(nextQ.length===0)  break;  // no wall need to put.
        
        for(var i=0; i<nextQ.length; i++) { 
            if(i=== virusArea.ind) {
                _render(virusArea.infected, 2, n, grid);
            } else {
                _render(nextQ[i], 1, n, grid);
            }
        } 
        sum+= virusArea.toPutWall;
    }
    return sum;
};

var _render = function(arr, color, n, grid) {
    for(var key of arr) {
        var x = ~~(key / n);
        var y = key % n;
        grid[x][y] = color;
    }
};

var dfs = function(i, j, grid, nextInfected, curInfected, visited, walls, m, n) {
    if(i<0 || j<0 || i>=m || j>=n || grid[i][j]===2)  return;
    var key = i*n+j;
    if(grid[i][j] ===0) {
        walls[0]++;
        nextInfected.add(key);
        return;
    }
    
    if(visited.has(key)) return;
    visited.add(key);
    curInfected.add(key);
    dfs(i+1, j, grid, nextInfected, curInfected, visited, walls, m, n);
    dfs(i-1, j, grid, nextInfected, curInfected, visited, walls, m, n);
    dfs(i, j+1, grid, nextInfected, curInfected, visited, walls, m, n);
    dfs(i, j-1, grid, nextInfected, curInfected, visited, walls, m, n);
};
