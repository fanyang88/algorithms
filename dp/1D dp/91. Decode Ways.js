/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:
'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.
For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
The number of ways decoding "12" is 2.
*/

/**
 * @param {string} s
 * @return {number}
 corner case: 10 is 1,   301 is 0
 e.g:  301  
     i=3  dp[3] =1
     i=2  dp[2] =1 since s[2]=1
     i=1  dp[1] =0
     i=0  dp[0] = dp[1] since 30 > 26
e.g:  124  can be 12, 4 or 1,24 or 1,2,4
     i=3  dp[3] =1
     i=2  dp[2] =1 since s[2]=4
     i=1  dp[1] =dp[2] + dp[3] = 2 since 24<26
     i=0  dp[0] =dp[1] + dp[2] = 3 since 12<26 
     if(s[i] === '0') dp[i] = 0
     if(s.subtring(i, i+2)<26)  dp[i] = dp[i+1] + dp[i+2]  else dp[i]=dp[i+1]
 */
var numDecodings = function(s) {
    // traverse backwards
    var n = s.length, dp = new Array(n+1).fill(0);
    dp[n] = 1;
    dp[n-1] =  s[n-1] === '0' ? 0 : 1;
    for(var i=n-2; i>=0; i--) {
        if(s[i] === '0')  continue;
        dp[i] = +(s.substring(i, i+2)) <=26 ? dp[i+1] + dp[i+2] : dp[i+1];
    }
    return dp[0];
};
