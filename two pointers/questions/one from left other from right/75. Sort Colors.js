/*
Given an array with n objects colored red, white or blue, 
sort them in-place so that objects of the same color are adjacent, 
with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, 
and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, 
then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // define left always point to the boundary of 0 -last 0,
    // define right always point to the boundary of 2 - first 2
    var left = 0, right = nums.length-1;
    // should stop when i = right, not nums.length
    for(var i=0; i<=right; i++) {  
        if(nums[i] === 0) {
            // we need to swap i with left, since left should always point to last 0
            swap(nums, i, left);
            left++;  // move to next potential pos 
        }
        else if(nums[i] === 2) {
            // we need to swap i with right, since right should always point to first 2
            swap(nums, i, right);
            right--;
            //since after swap, the ith could be an 0, 
            // if it is an 0, we need to swap it with left, so we need to examine it again.
            i--; 
        }
    }
};

var swap = function(arr, i, ind) {
    var temp = arr[i];
    arr[i] = arr[ind];
    arr[ind] = temp;
};