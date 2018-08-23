/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

Example:

Input: "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
*/

/**
 * @param {string} s
 * @return {number}
 check pic for induction process
 if str[i to j] is palindorome, dp[i][j] = 0
 else dp[i][j] = 1+ min(dp[i][k] + dp[k+1][j])  cut at i, or i+1, or .... j-1 get the min cut 
 */
var minCut = function(s) {
    var dp = [];
    for(var i=0; i<s.length; i++) {
        dp[i] = [];
        dp[i][i] = 0;
    }
    for(var k=1; k<s.length; k++) {
        var i=0, j = i+k;
        while(j<s.length) {
            if(isPalindrome(s.substring(i, j+1))) {
                dp[i][j] = 0;
            } else {
                var minV = j;
                for(var m = i; m<j; m++) {
                    minV = Math.min(minV, dp[i][m] + dp[m+1][j]);
                }
                dp[i][j] =1 + minV;
            }
            i++;
            j++;
        }
    }
    return dp[0][s.length-1];
};

var isPalindrome = function(str) {
    var s = 0, t = str.length-1;
    while(s < t) {
        if(str[s] !== str[t]) return false;
        s++;
        t--;
    }
    return true;
};
