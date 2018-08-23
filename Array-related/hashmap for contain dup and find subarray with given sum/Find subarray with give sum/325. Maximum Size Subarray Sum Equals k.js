/*
Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:

Input: nums = [1, -1, 5, -2, 3], k = 3
Output: 4 
Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
Example 2:

Input: nums = [-2, -1, 2, 1], k = 1
Output: 2 
Explanation: The subarray [-1, 2] sums to 1 and is the longest.
Follow Up:
Can you do it in O(n) time?
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 nums = [1, -1, 5, -2, 3], k = 3
 hahs[0] = -1
 i=0, sum=1 !hash[1-3]  hash[1] =0
 i=1, sum=0 !hash[0-3]  hash[0] =1 < -1 hash[0] = -1
 i=2, sum=5 !hash[5-3]  hash[5] =1
 i=3, sum=3 hash[3-3] exist i-hash[0] = 3-(-1)=4   is the answer
 i=4, sum=6 !hash[6-3]  hash[6] = 4
 
 nums = [-2, -1, 2, 1], k = 1
 hash[0] = -1
 i=0 sum=-2 !hash[-2-1]  hash[-2] = 0
 i=1 sum=-3 !hash[-3-1]  hash[-3] = 1
 i=2 sum=-1  since hash[-1-1] = -2  answer = i-hash[-2] = 2-0=2
 i=3 sum=0 !hash[0-1]  hash[0] = -1
 */
var maxSubArrayLen = function(nums, k) {
    var sum = [], total =0, map = {}, maxLen = 0;
    map[0] = -1;
    for(var i=0; i<nums.length; i++) {
        total += nums[i];
        sum[i] = total;
    }
    for(var i=0; i<sum.length; i++) {
        if(map[sum[i] - k] !== undefined) {
            maxLen = Math.max(maxLen, i - map[sum[i] - k]);
        }
        if(map[sum[i]] === undefined) map[sum[i]] = i;
    }
    return maxLen;
};
