/*
On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.


Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.

Example:
Input: 3, 2, 0, 0
Output: 0.0625
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.
*/

/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 similar to LC 576
 initially, p = 1 and knight is at (r, c)
 next move, it can go to (r+1, c+2) , (r-1, c+2) .... each with p = 1/8 
 we create a new state matrix and record next state which is the 8 position has p=1/8  next[newr][newc] = dp[r][c] * (1/8)
 till k steps, we caculate sum of all the next[i][j] 
 
 */
var knightProbability = function(N, K, r, c) {
    var dp = new Array(N), dir= [[-1,2], [1, 2],[-1, -2],[1, -2],[2, -1],[-2, -1],[2, 1], [-2, 1]], sum=0;
    for(var i=0; i<N; i++)  dp[i] = new Array(N).fill(0);
    dp[r][c] = 1;
    for(var k=0; k<K; k++) {
        // init a new next array
        var next = new Array(N);
        for(var i=0; i<N; i++)  next[i] = new Array(N).fill(0);
        
        for(var i=0; i<N; i++) {
            for(var j=0; j<N; j++) {
                if(dp[i][j] === 0)  continue;
                for(var d = 0; d<8; d++) {
                    var x = i+ dir[d][0];
                    var y = j+ dir[d][1];
                    if(x < 0 || x >=N || y<0 || y>=N)  continue;
                    next[x][y] += (dp[i][j] / 8);
                }
            }
        }
        dp = next;
    }
    for(var i=0; i<N; i++) {
        for(var j=0; j<N; j++) {
            sum += dp[i][j];
        }
    }
    return sum;
};
