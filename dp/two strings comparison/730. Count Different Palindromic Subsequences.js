/*
Given a string S, find the number of different non-empty palindromic 
subsequences in S, and return that number modulo 10^9 + 7.
A subsequence of a string S is obtained by deleting 0 or more characters from S.
A sequence is palindromic if it is equal to the sequence reversed.
Two sequences A_1, A_2, ... and B_1, B_2, ... are different 
if there is some i for which A_i != B_i.

Example 1:
Input: 
S = 'bccb'
Output: 6
Explanation: 
The 6 different non-empty palindromic subsequences are
 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
Note that 'bcb' is counted only once, even though it occurs twice.
Example 2:
Input: 
S = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
Output: 104860361
Explanation: 
There are 3104860382 different non-empty palindromic subsequences, 
which is 104860361 modulo 10^9 + 7.
*/

/**
 * @param {string} S
 * @return {number}
 There are 3 cases need to consider
 abba   if there is no a in bb, => dp[i+1][j-1]*2 + 2  [a, aa] is for +2
 ababa  if there is only one a in bab = dp[i+1][j-1]*2 + 1 
        since there is a duplicate [a]
 aabaa  if there is more than 1 a in aba = dp[i+1][j-1]*2 - dp[left+1][right-1]  
        left point to the first a from left and right point to the first a from right
        since aba includes[a, b, aa, aba]+[aaa,aba,aaaa, aabaa] =>[aba] duplicate = dp[left+1][right-1]
 We use left and right to denote above case: 
 if left > right, it is case 1
 if left = right, it is case 2
 if left < right, it is case 3
 */
var countPalindromicSubsequences = function(S) {
    var dp = [], n = S.length;
    for(var i=0; i<n; i++) {
        dp[i] = new Array(n).fill(0);
        dp[i][i] = 1;
    }
    for(var len=2; len<=n;len++) {
        for(var i=0; i<=n-len; i++) {
            var j= i+len-1;
            if(S[i] !== S[j]) {
                dp[i][j] =  dp[i+1][j] + dp[i][j-1] - dp[i+1][j-1];
            } else {
                var L = i+1, R= j-1;
                while(L <= R && S[j] !== S[L]) L++;
                while(L <= R && S[j] !== S[R]) R--;
                if(L===R)  {  // case 2, there is only one S[i] inside
                    dp[i][j] =  2* dp[i+1][j-1] +1;
                } else if(L > R) { // case 1  there is no S[i] inside
                    dp[i][j] =  2* dp[i+1][j-1] +2;
                } else {            // case 3 there is more than one S[i] inside
                    dp[i][j] =  2* dp[i+1][j-1] - dp[L+1][R-1];
                }
            }
            // don't forgot
            dp[i][j] = dp[i][j] < 0 ? dp[i][j] + 1000000007 : dp[i][j] % 1000000007;
        }
    }
    return dp[0][n-1];
};

