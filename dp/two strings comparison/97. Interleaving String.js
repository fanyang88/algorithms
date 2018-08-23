/*
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 first init first row and last row
 */
var isInterleave = function(s1, s2, s3) {
    var dp = [], set = new Set(), m= s1.length, n = s2.length;
    if(m+n < s3.length)  return false;
    for(var chr of s1+s2)  set.add(chr);
    for(var chr of s3) {
        if(!set.has(chr))  return false;
    }
    
    for(var i=0; i<=m; i++) {
        dp[i] = new Array(n+1);
    }
    dp[0][0] = true;
    for(var i=1; i<=n; i++) {
        dp[0][i] = false;
        // equal to upper
        if(s3[i+0-1] === s2[i-1]) dp[0][i] = dp[0][i-1]; 
    }
    for(var i=1; i<=m; i++) {
        dp[i][0] = false;
        if(s3[i+0-1] === s1[i-1]) dp[i][0] = dp[i-1][0]; 
    }

    for(var i=1; i<=m; i++) {
        for(var j=1; j<=n; j++) {
            dp[i][j] = false;
            // equal to upper
            if(s3[i+j-1] === s2[j-1]) dp[i][j] = dp[i][j-1] || dp[i][j]; 
            if(s3[i+j-1] === s1[i-1]) dp[i][j] = dp[i-1][j] || dp[i][j]; 
        }
    } 

    return dp[m][n];
};

