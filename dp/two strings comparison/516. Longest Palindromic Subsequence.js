/*
Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.
Example 1:
Input:
"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
Example 2:
Input:
"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
*/

/**
 * @param {string} s
 * @return {number}
 
 use reverse string compare with orginal string
 for example:   b b b a b
             b  4 3 3 2 1 0
             a  3 3 2 2 1 0
             b  3 3 2 1 1 0
             b  2 2 2 1 1 0
             b  1 1 1 1 1 0
                0 0 0 0 0 0
if s[i] === T[j]  dp[i][j] = dp[i+1][j+1]+1;
else dp[i][j] = Max(dp[i+1][j], dp[i][j+1]);
             
 */
var longestPalindromeSubseq = function(s) {
    var dp = [], i, j;
    var t = s.split('').reverse().join('');
    for(i=0; i<=s.length; i++) {
        dp[i%2] = [];
        for(j=0; j<=s.length; j++) {
            dp[i%2][j] = 0;
        }
    }
    for(i=s.length-1; i>=0; i--) {
        for(j=t.length-1; j>=0; j--) {
            if(s[i] === t[j]) {
                dp[i%2][j] = dp[(i+1)%2][j+1]+1;
            } else {
                dp[i%2][j] = Math.max(dp[(i+1)%2][j], dp[i%2][j+1]);
            }
        }
    }
    return dp[0][0];
    
};
