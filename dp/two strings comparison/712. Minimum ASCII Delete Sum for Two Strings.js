/*
Given two strings s1, s2, find the lowest ASCII sum of deleted characters 
to make two strings equal.

Example 1:
Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) 
to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum 
possible to achieve this.
Example 2:
Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] 
to the sum.
At the end, both strings are equal to "let", 
and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", 
we would get answers of 433 or 417, which are higher.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 if s1[i-1] = s2[j-1]   // no deletion
    dp[i][j] = dp[i-1][j-1];
else   // delete either s1[i-1] or s2[j-1]
    dp[i][j] = min(dp[i-1][j]+s1[i-1], dp[i][j-1]+s2[j-1]);
    
    e.g: s2= sea    s1=eat
     ''  s          e                  a
  '' 0   s          se              sea
  e  e   se         s               s+a<sea+e=sa
  a  a   sea        s+a|sea+e       s    
  t  t   seat       sat             st
 */
var minimumDeleteSum = function(s1, s2) {
    var m = s1.length, n = s2.length, dp = new Array(m+1);
    for(var i=0; i<=m; i++) {
        dp[i] = new Array(n+1).fill(0);
    }
    
    // init first row and col
    var sum = 0;
    for(var i=1; i<=n; i++) {
        sum += s2.charCodeAt(i-1);
        dp[0][i] = sum;
    }
    var sum = 0;
    for(var i=1; i<=m; i++) {
        sum += s1.charCodeAt(i-1);
        dp[i][0] = sum;
    }
  
    // handle inside
    for(var i=1; i<=m; i++) {
        for(var j=1; j<=n; j++) {
            if(s1[i-1] === s2[j-1])  dp[i][j] = dp[i-1][j-1];
            else {
                dp[i][j] = Math.min(dp[i][j-1] + s2.charCodeAt(j-1), 
                    dp[i-1][j] + s1.charCodeAt(i-1));
            }
        }
    }
    return dp[m][n];
};