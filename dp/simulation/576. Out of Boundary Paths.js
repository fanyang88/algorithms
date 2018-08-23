/*
There is an m by n grid with a ball. Given the start coordinate (i,j) of the ball, you can move the ball to adjacent cell or cross the grid boundary in four directions (up, down, left, right). However, you can at most move N times. Find out the number of paths to move the ball out of grid boundary. The answer may be very large, return it after mod 109 + 7.

Example 1:
Input:m = 2, n = 2, N = 2, i = 0, j = 0
Output: 6
Explanation:

Example 2:
Input:m = 1, n = 3, N = 3, i = 0, j = 1
Output: 12
Explanation:

Note:
Once you move the ball out of boundary, you cannot move it back.
The length and height of the grid is in range [1,50].
N is in range [0,50].
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 we need a matrix m*n to store how many time this position have been visited
 simulate the process of N steps
 */
var findPaths = function(m, n, N, i, j) {
    var startx= i, starty = j, count=0, dir=[[0,-1], [0,1], [1,0], [-1,0]], dp = new Array(m), mod = Math.pow(10, 9) + 7;
    for(var i=0; i<m; i++)  dp[i] = new Array(n).fill(0);
    
    dp[startx][starty] = 1; 
    
    for(var k=0; k<N; k++) {
        // reset a matrix to store next state
        var next = new Array(m)
        for(var i=0; i<m; i++) 
            next[i] = new Array(n).fill(0);
        
        for(var i=0; i<m; i++) {
            for(var j=0; j<n; j++) {
                if(dp[i][j] === 0)  continue;
                // check 4 directions
                for(var d=0; d<4; d++) {
                    var x = i+dir[d][0];
                    var y = j+dir[d][1];
                    if(x <0 || x >=m || y<0 || y>=n)  {
                        count= (count + dp[i][j]) % mod;
                        continue;
                    }
                    next[x][y] = (next[x][y] + dp[i][j]) % mod;
                }
            }
        }
        dp = next;
    }
    return count;
};