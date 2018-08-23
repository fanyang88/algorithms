/*
Given an integer array, you need to find one continuous subarray that 
if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
You need to find the shortest such subarray and output its length.
Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // from left to right, find the last place when nums[i+1] < num[i]  not in order, this would be the end place for sorting
    // from right to left, find the last place when nums[i] > num[i+1]  not in order, this would be the start place for sorting
    var minV = nums[nums.length-1], end = -2, start= -1, maxV = nums[0];
    // get end first
    for(var i=1; i<nums.length; i++) {
        if(nums[i] < maxV) {
            end = i;
        }
        maxV = Math.max(maxV, nums[i]);
    }
    
    // get start first
    for(var i=nums.length-1; i>=0; i--) {
        if(nums[i] > minV) {
            start = i;
        }
        minV = Math.min(minV, nums[i]);
    }
    
    if(end === -2)  return 0;
    return end - start +1;
};
