/*
Suppose an array sorted in ascending order is rotated at some pivot 
unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. 
If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 there is two type: [4,5,6,7,0,1,2], 
 another is: [7,1,2,3,4,5,6],
 for type 1:  since A[s] < A[mid], 
 if A[s] <= target < A[mid] search on left, otherwise search on right 
 for type 2:  since A[s] > A[mid], 
 if A[mid] < target =< A[e] search on right, otherwise search on right 
 sepecial case: [3, 1] should belong to this case
 */
var search = function(nums, target) {
    var s = 0, e = nums.length-1;
    while(s < e) {
        var mid = ~~((s+e) / 2);
        if(nums[mid] === target)  return mid;
        if(nums[s] <= nums[mid]) { 
            // this is the key, case :[3, 1] should come to here 
            if(target < nums[mid] && target >= nums[s]) {  
                // keep searching on left
                e = mid;
            } else {
                s = mid+1;
            }
        } else {
            if(target > nums[mid] && target <= nums[e]) {  
                // keep searching on right
                 s = mid+1; 
            } else {
               e = mid;
            }
        }
    }
    return nums[e] === target ? e : -1;
};

