/*
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. 
You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. 
Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.
Find the maximum coins you can collect by bursting the balloons wisely.
Note: 
(1) You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
(2) 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
Example:
Given [3, 1, 5, 8]  Return 167
    nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
   coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/

/**
 * @param {number[]} nums
 * @return {number}
 dp[i][j] means the maximum sum to burst bool from i to j
 
 i-1 i, .....  k-1, k, k+1, .... j, j+1
     |-----------|     |---------|
      dp[i][k-1]       dp[k+1][j]
 to get the max from i to j, we first burst i to k-1 and k+1 to j
 then we burst k, so the point is the find the k that make the dp[i][j] to be max
 dp[i][j] = max(dp[i][k-1] + nums[i-1]*nums[k]*nums[j+1] + dp[k+1][j]);   i=<k<=j
 len = 1 to N
 */
var maxCoins = function(nums) {
    var N = nums.length;
    // padding first one and last one to be 1
    nums.unshift(1);
    nums.push(1);
    var dp = [];
    for(var i=0; i<N+2; i++) {
        dp[i] = [];
        for(var j=0; j<N+2; j++) {
            dp[i][j] = 0;
        }
    }
    
    for(var len = 1; len <=N; len++) {  // i is from 1 to N-len+1;
        for(var i = 1; i<=N-len+1; i++) {
            var j = len+i-1; // since j-i +1= len
            for(var k=i; k<=j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k-1] + nums[i-1]*nums[k]*nums[j+1] + dp[k+1][j]);
            }
        }
    }
    return dp[1][N];
};
