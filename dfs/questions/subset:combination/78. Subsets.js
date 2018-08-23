/*
Given a set of distinct integers, nums, return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets.
For example,
If nums = [1,2,3], a solution is:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = [];
    res.push([]);
    dfs(0, nums, [], res);
    return res;
};

var dfs = function(level, nums, arr, res) {
    for(var i=level; i<nums.length; i++) {
        arr.push(nums[i]);
        res.push(arr.slice(0));
        dfs(i+1, nums, arr, res);
        arr.pop();
    }
}
