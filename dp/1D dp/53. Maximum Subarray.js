/*
Find the contiguous subarray within an array (containing at least one number) 
which has the largest sum.
For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var dp = [nums[0]];
    for(var i=1; i<nums.length; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
    }
    return Math.max(...dp);
};

// since only two values involved each time
var maxSubArray = function(nums) {
    var dp0 = nums[0];
    var maxV = dp0;
    for(var i=1; i<nums.length; i++) {
        var dp1 = Math.max(dp0+nums[i], nums[i]);
        maxV = Math.max(dp1, maxV);
        dp0 = dp1;
    }
    return maxV;
};
