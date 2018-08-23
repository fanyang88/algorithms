/*
Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 
 For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 reverse the string first, [7,6,5,4,3,2,1]  then reverse [5,6,7] [1,2,3,4]
 */
var rotate = function(nums, k) {
    k = k%nums.length;    // the key
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
    return;
};

var reverse = function(nums, start, end) {
    var temp;
    while(start < end) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start ++;
        end --;
    }
    return;
}
