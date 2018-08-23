/*
We partition a row of numbers A into at most K adjacent (non-empty) groups, 
then our score is the sum of the average of each group. 
What is the largest score we can achieve?
Note that our partition must use every number in A, 
and that scores are not necessarily integers.
Example:
Input: 
A = [9,1,2,3,9]
K = 3
Output: 20
Explanation: 
The best choice is to partition A into [9], [1, 2, 3], [9]. 
The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned A into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 k=3
      9  1   2    3      9
-------------------------
  0| 9 | 5 | 4 | 3.75 | 4.8
  -----------------------
  1|   |10 |
  ----------------------
  2|
  ----------------------
  
  if k=1 at 0th row: 
  dp[0][0] =  have 9 and 1 group, avg = 9/1=9
  dp[0][1] =  have 9,1 and 1 group, avg = (9+1)/2=5
  dp[0][2] =  have 9,1,2 and 1 group, avg = (9+1+2)/3=4
  dp[0][3] =  have 9,1,2,3 and 1 group, avg = (9+1+2+3)/4=3.75
  dp[0][4] =  have 9,1,2,3,9 and 1 group, avg = (9+1+2+3+9)/5=4.8
  
  if k=2 at 1th row: 
  dp[1][1] =  have 9,1 and 2 group, avg = 9/1 + 1/1 = 10, split at 9,1: dp[0][0] + avg(arr[1]~arr[1]) 
  dp[1][2] =  have 9,1,2 and 2 group, split at 9,(1,2)= dp[0][0]+ (1+2)/2  or split at (9,1),2= dp[0][1]+ (2)/1
  dp[1][3] =  have 9,1,2,3 and 2 group, split at 9,(1,2,3)= dp[0][0]+ (1+2+3)/3  or split at (9,1),(2,3)= dp[0][1]+ (2+3)/2
                                       or split at (9,1,2),3= dp[0][2]+ (3)/1
  fomula:  dp[0][i] = sum / (i+1)
        dp[i][j] = max(dp[i-1][k] + avg(arr[k+1] ~ arr[j]))  i-1=<k<=j-1
  
 */
var largestSumOfAverages = function(A, K) { 
    var dp = new Array(K), n= A.length, sum=0;
    for(var i=0; i<K; i++) {
        dp[i] = new Array(n).fill(0);
    }
    // init
    for(var j=0; j<n; j++)  {
        sum += A[j];
        dp[0][j] = sum / (j+1);
    }
    
    for(var i=1; i<K; i++) {
        for(var j=i; j<n; j++) {
            var maxV = -Infinity;
            for(var k=i-1; k<j; k++) {
                maxV = Math.max(maxV, dp[i-1][k] + getAvg(k+1, j, A));
            }
            dp[i][j] = maxV;
        }
    }
    return dp[K-1][n-1];
};

var getAvg = function(start, end, A) {
    var len = end-start+1, sum=0;
    for(var i=start; i<=end; i++) {
        sum += A[i];
    }
    return sum / len;
};



