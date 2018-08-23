/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
Note: The solution set must not contain duplicate subsets.
For example,
If nums = [1,2,2], a solution is:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a-b);
    var res = [];
    res.push([]);
    dfs(0, nums, [], res);
    return res;
};

var dfs = function(level, nums, arr, res) {
    for(var i=level; i<nums.length; i++) {
        arr.push(nums[i]);
        res.push(arr.slice(0));
        dfs(i + 1, nums, arr, res);
        arr.pop();
        while(nums[i] === nums[i+1] && i+1 < nums.length) i++;
    }
}
