/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and 
it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 * dp[0] = nums[0] rob house 0
 * dp[1] = nums[1] rob house 1
 * dp[2] = max(dp[0] + nums[2], dp[1])  rob house 0,2 or house 1
 * dp[3] = max(dp[1]+nums[3], dp[2])    rob house 0,2 or house 1,3
 * dp[4] = max(dp[2]+nums[4], dp[3])    rob house 0,2,4 or house 1,3
 * dp[5] = max(dp[3]+nums[5], dp[4])    rob house 0,2,4 or house 1,3,5
 * 
 * dp[i] = max(dp[i-2]+nums[i], dp[i-1])  
   */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    var dp = {}, i;
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], nums[0]);
    for(i=2; i<nums.length; i++) {
        dp[i] = Math.max((dp[i-2] + nums[i]), dp[i-1]);
    }
    return dp[nums.length-1];
    
};

// updated
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    var i, third, temp;
    var first = nums[0];
    var second = Math.max(nums[1], nums[0]);
    for(i=2; i<nums.length; i++) {
        third = Math.max((first + nums[i]), second);
        temp = second;
        second = third;
        first = temp;
    }
    return second;
    
};
