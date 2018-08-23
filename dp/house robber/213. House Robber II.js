/*
Note: This is an extension of House Robber.
After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 * since it's a circle, e.g: 1->2->3->4->5, either robber 1 &3 or 2&4
                          |           |
                          ------------
need to start from 1~len-1(skip the last one) or from 2~len(skip the first one)
因为第一个element 和最后一个element不能同时出现. 则分两次call House Robber I. 
case 1: 不包括最后一个element. 
case 2: 不包括第一个element.
两者的最大值即为全局最大值
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    var rob1 = robInRange(nums, 0, nums.length - 2);
    var rob2 = robInRange(nums, 1, nums.length - 1);
    return Math.max(rob1, rob2);
    
};
/*
 dp[0] = nums[0] rob house 0
 dp[1] = max(num[0], num[1])  rob house 0 or 1
 dp[2] = max(dp[0]+num[2], dp[1])  rob house 0,2 or 1
 dp[3] = max(dp[1]+num[3], dp[2])  rob house 0,2 or 1,3 
 ....
 dp[n] = max(dp[n-2]+num[n], dp[n-1])
*/
var robInRange = function(nums, start, end) {
    var dp = {};
    const n = end -start + 1;
    dp[0] = nums[start];
    dp[1] = Math.max(dp[0], nums[start+1]);
    
    for(i=2;i<end-start+1; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i+start], dp[i-1]);
    }
    return dp[n-1];
};
