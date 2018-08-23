/*
Given an array of integers sorted in ascending order, 
find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].
For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = 0, end = nums.length-1;
    
    // find the target number in the array first, then go left and right to get the boundry
    while(start < end) {
        var mid = parseInt(start + (end - start)/2);
        if(nums[mid] < target) {
            start = mid+1;
        } else {
            end = mid;
        }
    }
    
    if(nums[end] !== target)  return [-1, -1];
    start = end;
  
    while(end< nums.length && nums[end] === target)  end++;
    return [start, end-1];
};
