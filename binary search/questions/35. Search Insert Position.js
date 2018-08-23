/*
Given a sorted array and a target value, 
return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var s = 0, e = nums.length - 1;
    while(s < e) {
        var mid = ~~((s+e)/2);
        if(nums[mid] >= target) {// search on left 
            e = mid;
        } else {
            s = mid+1;
        }
    }
    if(nums[e] < target)  return e+1; // the last one in array is still smaller than target
    return e;
};