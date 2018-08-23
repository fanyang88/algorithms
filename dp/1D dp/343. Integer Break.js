/*
Given a positive integer n, break it into the sum of at least two positive 
integers and maximize the product of those integers. 
Return the maximum product you can get.
For example, given n = 2, return 1 (2 = 1 + 1); 
given n = 10, return 36 (10 = 3 + 3 + 4).
Note: You may assume that n is not less than 2 and not larger than 58.
*/

/**
 * @param {number} n
 * @return {number}
 e.g: n=4  int is from 1 to n/2+1=3
 dp[1] =1 since for n=1 max product is 1
 dp[2] =1 since int can be 1 dp[2]=dp[2-1]*1=1 or (2-1)*1=1  
 dp[3] =2 since int can be 1 dp[3]=dp[3-1]*1=1 or (3-1)*1=2 
 dp[4] =4 since int can be 1,2 dp[4]=dp[4-1]*1=2 or (4-1)*1=3
                               dp[4]=dp[4-2]*2=2 or (4-2)*2=4
 
 */
var integerBreak = function(n) {
    var dp = new Array(n+1).fill(0);
    dp[1] = 1;
    for(var target=1; target<=n; target++) {
    	for(var i=1; i<=~~(target/2); i++) {
            dp[target] = Math.max(dp[target], dp[target-i]*i, (target-i)*i);
        }
    }
    return dp[n];
};