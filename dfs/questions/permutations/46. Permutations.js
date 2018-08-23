/*
Given a collection of distinct numbers, return all possible permutations.
For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var set = new Set(), res= [];
    dfs(nums, [], res, set);
    return res;
};

var dfs = function(nums, arr, res, set) {
    if(arr.length === nums.length) {
        res.push(arr.slice(0));
        return;
    }
    for(var i=0; i<nums.length; i++) {
        if(set.has(i))  continue;
        set.add(i);
        arr.push(nums[i]);
        dfs(nums, arr, res, set);
        arr.pop();
        set.delete(i);
    }
}