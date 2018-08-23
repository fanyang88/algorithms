/*
Given a collection of candidate numbers (candidates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 
 [2,5,2,1,2] -> [1,2,2,2,5]
         1            2   2   2   5
      / | | \       / | \          
     2  2 2  5     2  2  5
    /|\           /|\  
   2 2 5         2 2 5  
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => {
        return a-b;
    });
    console.log(candidates);
    var res = [];
    dfs(0, 0, [], candidates, target, res);
    console.log(res);
    return res;
};

var dfs = function(index, sum, arr, nums, target, res) {
    if(sum === target) {
        res.push(arr.slice(0));
        return;
    }
    if(sum > target) return;
    for(var i=index; i<nums.length; i++) {
        arr.push(nums[i]);
        dfs(i+1, sum+nums[i], arr, nums, target, res);
        arr.pop();
        while(nums[i] === nums[i+1] && i+1 < nums.length) i++;    
    }
   
};