//Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
//For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

/**
 * @param {number} n
 * @return {number}
 use dp:
 for example: 4 = 2*2 =>1
 dp: n=0, [0]
 dp: n=1, [0, 1]  dp[1] = dp[1-1*1]+1 = 1
 dp: n=2, [0, 1, 2]  dp[2] = dp[2-1*1]+1 = 2
 dp: n=3, [0, 1, 2, 3]  dp[3] = dp[3-1*1]+1 = 3
 dp: n=4, [0, 1, 2, 3, 1]  dp[3] = dp[4-1*1]+1 = 4 or dp[4-2*2]+1 = 1 since we need the least, so dp[4] =1
 ...
 
 */
var numSquares = function(n) {
    var dp = [0];
    for(var i=1; i<=n; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER;
        for(var j=1; j*j<=i; j++) {
            dp[i] = Math.min(dp[i], dp[i-j*j]+1);
        }
    }
    return dp[n];
};
