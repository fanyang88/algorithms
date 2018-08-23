/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
You are given a target value to search. 
If found in the array return true, otherwise return false.

Example 1:
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 
 there is two type: [4,5,6,7,0,1,2], sepecial case: [3, 1] should belong to this case
 another is: [5,1,2,3,4],
 for type 1:  since A[s] < A[mid], if A[s] <= target < A[mid] search on left, otherwise search on right 
 for type 2:  since A[s] > A[mid], if A[mid] < target =< A[e] search on right, otherwise search on right 
 
 */
var search = function(nums, target) {
    var s = 0, e = nums.length-1;
    while(s < e) {
        var mid = ~~((s+e) / 2);
        if(nums[mid] === target)  return true;
        
         // the only difference from the first one, trickly case, just updat left and right
         // such as [1,1,3,1,1,1,1], for such case, we need to get rid of 1s on left and right before proceed.
        if( (nums[s] == nums[mid]) && (nums[e] == nums[mid]) ) {++s; --e;}
        
        else if(nums[s] <= nums[mid]) { // this is the key, case :[3, 1] should come to here 
            if(target < nums[mid] && target >= nums[s]) {  // keep searching on left
                e = mid;
            } else {
                s = mid+1;
            }
        } else {
            if(target > nums[mid] && target <= nums[e]) {  // keep searching on right
                 s = mid+1;
            } else {
               e = mid;
            }
        }
    }
    return nums[e] === target;
};

