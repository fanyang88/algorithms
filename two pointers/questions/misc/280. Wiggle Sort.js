/*
Given an unsorted array nums, 
reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

Example:

Input: nums = [3,5,2,1,6,4]
Output: One possible answer is [3,5,1,6,2,4]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 if there is a > b > c, since b>c so a>c we can swap b c, a > c < b to make the wiggle sort
 we define when flag = 1, relationship is a < b
 when flag = -1, relationship is a > b
 so the idea is:
 swap nums[i] and nums[i+1] if nums[i] > nums[i+1] when flag = 1  
 swap nums[i] and nums[i+1] if nums[i] < nums[i+1] when flag = -1  
 */
var wiggleSort = function(nums) {
    var flag = 1;
    for(var i=0; i<nums.length -1; i++) {
        if(flag === 1) {  // should be a<b
            if(nums[i] > nums[i+1]) swap(nums, i, i+1);
        } else {         // should be a>b
            if(nums[i] < nums[i+1]) swap(nums, i, i+1);
        }
        flag = -flag;
    }
    return;
};

var swap = function(nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};