/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.
For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var res = [], visited = new Set();
    nums.sort((a, b) => a-b);  // remember to sort
    dfs(nums, res, [], visited);
    return res;
};

var dfs = function(nums, res, arr, visited) {
    if(arr.length === nums.length) {
        res.push(arr.slice(0));
        return;
    }
    
    for(var i=0; i<nums.length; i++) {
        if(visited.has(i)) continue;
        visited.add(i);
        arr.push(nums[i]);
        dfs(nums, res, arr, visited);
        arr.pop();
        visited.delete(i);
        while(nums[i] === nums[i+1] && i+1 < nums.length) i++;
    }
};
