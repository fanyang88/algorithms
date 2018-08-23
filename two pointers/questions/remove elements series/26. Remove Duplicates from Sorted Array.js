/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once 
and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array 
in-place with O(1) extra memory.

Example 1:
Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:
Given nums = [0,0,1,1,1,2,2,3,3,4],
Your function should return length = 5, 
with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
It doesn't matter what values are set beyond the returned length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 use two pointers: [0,0,1,1,1,2,2,3,3,4],
 j=1, since nums[0]=nums[1] count still=1
 j=2, since nums[2]!=nums[0] nums[1]=1, count=2   [0,1,1,1,1,2,2,3,3,4],
 j=3, since nums[3]=nums[1] count still=2
 j=4, since nums[4]=nums[1] count still=2
 j=5, since nums[5]!=nums[1] nums[2]=2, count=3   [0,1,2,1,1,2,2,3,3,4],
 j=6, since nums[6]=nums[2] count still=3
 j=7, since nums[7]!=nums[2] nums[3]=3, count=4   [0,1,2,3,1,2,2,3,3,4],
 j=8, since nums[8]=nums[3] count still=4
 j=9, since nums[9]!=nums[3] nums[4]=4, count=5   [0,1,2,3,4,2,2,3,3,4], 
 count = 5
 */
var removeDuplicates = function(nums) {
    for(var i=0, j=0; i<nums.length; i++) {
        if(nums[i] != nums[j]) {
            nums[j+1] = nums[i];
            j++;
        }
    }
    return j+1;
};
