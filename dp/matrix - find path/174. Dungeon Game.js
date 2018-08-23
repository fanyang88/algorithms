/*
The demons had princess (P) in the bottom-right corner of a dungeon. 
The dungeon consists of M x N rooms laid out in a 2D grid. 
Our valiant knight (K) was initially positioned in the top-left room and 
must fight his way to rescue the princess.
The knight has an initial health point represented by a positive integer. 
If at any point his health point drops to 0 or below, he dies immediately.
Some of the rooms are guarded by demons, 
so the knight loses health upon entering these rooms; 
other rooms are either empty (0's) 
or contain magic orbs increase the knight's health.
the knight move only rightward or downward in each step.
Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.
For example, given the dungeon below, 
the initial health of the knight must be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN -> DOWN.
-2 (K)	-3	3
-5	-10	1
10	30	-5 (P)
*/

/**
 * @param {number[][]} dungeon
 * @return {number}
 
 think from bottom right, at that time, we should have at least 1 health, so the min health when K get to P shouldbe 1-[m-1][n-1]
 to get the least needed health for current cell: dp[i][j] =  previous min health value - dungeon[i][j]
 previous min health value = min(dp[i][j+1], dp[i+1][j])
 dp[i][j] = min(dp[i][j+1], dp[i+1][j]) - dungeon[i][j]
 if dp[i][j] < 0, set it to be one, since it can't be smaller than 1


 use above example: 
 -2 -3   3
 -5 -10  1
 10  30 -5
 we change -5 to 6 first, and init last row and last col
 since initial it is -5 which means we need 6 before reach to -5 to keep knight alive
 if we only go up, before going to 1, we should have at least 5, then +1=6 so dp[i][j] = dp[i+1][j] - dungeon[i][j] in last col
 if we only go left, before going to 30, we should have at least 5, but 6-30<0 so we set it to be 1, since knight at least have 1
    dp[i][j] = dp[i][j+1] - dungeon[i][j]
    if(dp[i][j] <=0)  dp[i][j]= 1
 
 -2     -3   2
 -5     -10  5
  1      1   6
 we check each element inside, for dp[m-2][m-2] the min = 5 - (-10) or 1 - (-10)
 dp[i][j] = min(dp[i+1][j], dp[i][j+1]) - dp[i][j]
  7     5    2
  6     11   5
  1     1    6

 */
var calculateMinimumHP = function(dungeon) {
    var m = dungeon.length, n= dungeon[0].length, dp = [];
    for(var i=0; i<m; i++)  dp[i] = [];//new Array(n).fill(Infinity);
    
    // init last element and last row & col
    dp[m-1][n-1] =  1- dungeon[m-1][n-1];
    if(dp[m-1][n-1] <= 0) dp[m-1][n-1] = 1; 
    
    for(var i=m-2; i>=0; i--) {
        dp[i][n-1] = dp[i+1][n-1] - dungeon[i][n-1];
        if(dp[i][n-1] <= 0) dp[i][n-1] = 1;     
    }
    for(var j=n-2; j>=0; j--) {
        dp[m-1][j] = dp[m-1][j+1] - dungeon[m-1][j];
        if(dp[m-1][j] <= 0) dp[m-1][j] = 1; 
    }
    // caculate inside
    for(var i=m-2; i>=0; i--) {
        for(var j=n-2; j>=0; j--) {
            dp[i][j] = Math.min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j];
            if(dp[i][j] <= 0) dp[i][j] = 1;
        }
    }
    return dp[0][0];
};