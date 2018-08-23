/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

*/

/**
 * @param {number[]} nums
 * @return {number}
 The idea is to change 0 in the original array to -1. 
 Thus, if we find SUM[i, j] == 0 then we know there are even number of -1 and 1 
 between index i and j. Also put the sum to index mapping to a HashMap to make search faster.
 
 [0, 1, 0, 1, 0] 
 [-1, 1, -1, 1, -1]  hash[0] = -1
 i=0 sum=-1 hash[-1] = 0
 i=1 sum=0 since hash[0] = -1 len = i-hash[0] = 2
 i=2 sum=-1 since hash[-1] exist len = i-hash[-1] = 2-0=2
 i=3 sum=0 since hash[0] exist len = i=hash[0] = 4
 i=4 sum=-1 since hash[-1] exist len = i=hash[-1] = 4
 */
var findMaxLength = function(nums) {
    for(var i=0; i<nums.length; i++) {
        if(nums[i] === 0)  nums[i] = -1;
    }
    var hash={}, maxLen = 0, sum=0;
    hash[0] = -1;
    for(var i=0; i<nums.length; i++) {
        sum += nums[i];
        if(hash[sum] !== undefined) {
            maxLen = Math.max(maxLen, i-hash[sum]);
        } else {
            hash[sum] = i;
        }
    }
    return maxLen;
};
