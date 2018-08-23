/*
Given an array of n positive integers and a positive integer s, 
find the minimal length of a contiguous subarray of which the sum ≥ s. 
If there isn't one, return 0 instead.
For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length === 0) return 0;
    // Use pointers.
    var j=0, sum=0, minLen = Number.MAX_SAFE_INTEGER;
    for(var i=0; i<nums.length; i++) {
        sum += nums[i];
        while(sum >=s) {
            minLen = Math.min(minLen, i-j+1);
            sum -= nums[j];
            j++;
        }
    }
    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};
