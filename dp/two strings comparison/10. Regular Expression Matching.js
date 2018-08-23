/*
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 the * case is the most complicated, using two example to sort it out: 
 e.g: x & xa* is match, since there can be 0 or more a   
      i     j
      for such case when p[j]=== '*' since it is 0 occrence of a, we need to check p(0, j-2)(x) & T(0, i)(x) = dp[i][j-2]
      xa & xa* is matching
       i     j
      we need to check p[j-1] ?= t[i] if they equal, then we need to check p(0, j)xa* & T(0, i-1)x = dp[i-1][j]
 */
var isMatch = function(s, p) {
    var m = s.length, n= p.length, dp = [];
    for(var i=0; i<=m; i++) {
        dp[i] = new Array(n+1).fill(0);
    }
    dp[0][0] = 1;
    // deal with '' match *a, etc
    for(var i=1; i<=n; i++) {
        if(p[i-1] === '*') {
            dp[0][i] = dp[0][i-2];
        }
    }
    
    for(var i=1; i<=m; i++) {
        for(var j=1; j<=n; j++) {
            dp[i][j] = 0;
            if(s[i-1] === p[j-1] || p[j-1] === '.') {
                dp[i][j] = dp[i-1][j-1];  
            } else if(p[j-1] === '*') {
                // handle above cases
                dp[i][j] = dp[i][j-2];   // check 0 occurances first
                if(p[j-2] === s[i-1] || p[j-2] === '.') {
                    dp[i][j] = dp[i-1][j] | dp[i][j];  
                }
            } 
        }
    }
    return dp[m][n] === 0 ? false : true;
};
