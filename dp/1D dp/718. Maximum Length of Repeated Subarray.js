/*
Given two integer arrays A and B, 
return the maximum length of an subarray that appears in both arrays.

Example 1:
Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
Note:
1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 
 similar to longest common strings
       null  1 2 3 2 1
 null   0    0 0 0 0 0
  3     0    0 0 1 0 0
  2     0    0 1 0 2 0
  1     0    1 0 0 0 3
  4     0    0 0 0 0 0
  7     0    0 0 0 0 0 
  max is 3
  init dp[i][j] = 0
  if(A[i-1] === B[j-1])  dp[i][j] = 1+ dp[i-1][j-1] 
  maxV = max(maxV, dp[i][j])
  
 */
var findLength = function(A, B) {
    var maxV = 0, m = A.length, n = B.length, dp = [];
    for(var i=0; i<=m; i++) {
        dp[i] = new Array(n+1).fill(0);
    }
    
    for(var i=1; i<=m; i++) {
        for(var j=1;j<=n; j++) {
            if(A[i-1] === B[j-1]) {
                dp[i][j] = 1+ dp[i-1][j-1];
                maxV = Math.max(maxV, dp[i][j]);
            }
        }
    }
    
    return maxV;
};
