/*
Given an integer array, your task is to find all the different possible increasing subsequences of the given array, 
and the length of an increasing subsequence should be at least 2 .
Example:
Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
  refer code from subset
 */
var findSubsequences = function(nums) {
    var map = {};
    dfs(nums, 0, [], map, 0);
    return Object.values(map);
};

var dfs = function(nums, level, arr, map, length) {
    if(arr.length > 1) {
        map[arr.slice(0)] = arr.slice(0);
    }
    for (var i=level; i<nums.length; i++) {
        if (arr.length == 0 || nums[i] >= arr[arr.length - 1]) {
            arr.push(nums[i]);
            dfs(nums, i+1, arr, map, length + 1);
            arr.pop();
        }
    }
}
