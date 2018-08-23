/*
Given a set of candidate numbers (C) (without duplicates) and a target number (T), 
find all unique combinations in C where the candidate numbers sums to T.
The same repeated number may be chosen from C unlimited number of times.
Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7, 
A solution set is: 
[
  [7],
  [2, 2, 3]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var res= [];
    dfs(0, 0, candidates, res, [], target);
    return res;
};

var dfs = function(level, sum, nums, res, cur, target) {
    if(sum === target)  {
        res.push(cur.slice(0)); 
        return;
    }
    if(sum > target)  return;
    for(var i=level; i<nums.length; i++) {
        cur.push(nums[i]);
        dfs(i, sum+nums[i], nums, res, cur, target);
        cur.pop();
    }
};

