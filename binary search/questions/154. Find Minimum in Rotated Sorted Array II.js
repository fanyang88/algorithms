/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.
The array may contain duplicates.
Example 1:
Input: [1,3,5]
Output: 1
Example 2:
Input: [2,2,2,0,1]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 the special case is when nums[mid] = nums[end] we can't make sure go left or right, we make end --
 e.g: [10, 10, 0, 10, 10, 10, 10, 10, 10]  mid =4-> 10 end-- mid = 3 -> 10, end --, mid =2, smaller than end, we can search on left
 if nums[mid] < nums[end], for example: [7,6,1,2,3,4,5] 2<5 search on left
 if nums[mid] > nums[end], for example: [3,4,5,7,6,1,2] 7<2 search on right
 */
var findMin = function(nums) {
    var s = 0, e = nums.length-1;
    while(s < e) {
        var mid = ~~((s+e) / 2);
        // in such case, we can't make sure go left or right, so we skip upper bound on step
        if(nums[mid] === nums[e]) {  
            e --;
        } else if(nums[mid] < nums[e]) {   // search on left
            e = mid;
        } else {    // search on right
            s = mid+1;
        }
    }
    return nums[e];
};