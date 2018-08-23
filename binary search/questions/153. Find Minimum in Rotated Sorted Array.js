/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
Find the minimum element.
You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var lo = 0, hi = nums.length-1;
    while(lo <hi) {
        var mid = parseInt(lo+ (hi-lo)/2);
        if(nums[mid] > nums[hi]) { // answer is on right
            lo = mid+1;
        } else {  // answer is on left
            hi = mid;
        }
    }
    return nums[lo];
};
