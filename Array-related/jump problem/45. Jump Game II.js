/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

/**
 * @param {number[]} nums
 * @return {number}
 [2,3,1,1,4]
 i=0, cur=0 max = 2 since cur=i, step++=1 cur = 2
 i=1  cur=2 max = 4 cur!=i
 i=2  cur=2 max = 4 cur==i step++=1 cur = 4  cur means in current range the max value
 i=3  cur=4 max = 4 cur!=i 
 */
var jump = function(nums) {
    var max  = 0; // the furtest stone we can go 
    var cur = 0;
    var step = 0;
    for(var i=0; i<nums.length-1; i++) {
        max = Math.max(max, i+nums[i]);
        if(i === cur) {  // come to the range that include the max, assign max to cur
            step ++;
            cur = max;
        }
    }
    return step;
};
