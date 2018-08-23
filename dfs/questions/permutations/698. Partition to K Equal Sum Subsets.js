/*
Given an array of integers nums and a positive integer k, 
find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

Example 1:
Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    var total = nums.reduce((t, item) => t+item, 0);
    if(total % k !==0)  return false;
    var sum = ~~(total / k);
    nums.sort((a, b) => b-a);
    var sums = new Array(k).fill(0);
    return dfs(sums, 0, nums, sum, k);
};

var dfs = function(sums, index, nums, target, k) {
    if (index == nums.length) {
        for (var item of sums) if (item != target) return false;
        return true;
    }
        
    var num = nums[index];
    for (var i = 0; i < k; i++) {
        if (sums[i] + num <= target) {
            sums[i] += num;
            if (dfs(sums, index+1, nums, target, k)) return true;
            sums[i] -= num;
        }
    }
    return false;
};


