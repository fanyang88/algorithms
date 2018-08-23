/*
Given a binary array, find the maximum number of consecutive 
1s in this array if you can flip at most one 0.

Example 1:
Input: [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
    After flipping, the maximum number of consecutive 1s is 4.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

*/

/**
 * @param {number[]} nums
 * @return {number}
 say we define we can flip k times.
 use two pointers, i always point to the first 1 after the previous 0, j increase

 */
var findMaxConsecutiveOnes = function(nums) {
    var count=0, maxLen = 0, k=1;
    for(var i=0, j=0; i<nums.length; i++) {
        if(nums[i] ===0) count++;
        while(count > k) {
            maxLen = Math.max(maxLen, i-j);
            if(nums[j] ===0) count--;
            j++;
        }
    }
    maxLen = Math.max(maxLen, i-j);
    return maxLen;
};

 