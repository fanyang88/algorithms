/*
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
Note: The solution set must not contain duplicate quadruplets.
For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
   var n = nums.length, res= [];
    // find two number a, b can sum up to the -c
    nums.sort((a, b) => a-b);
    
    for(var i=0; i<n-3; i++) {
        for(var j=i+1; j<n-2; j++) {
            
            var a = nums[i], b = nums[j], l=j+1, r = n-1;
            while(l<r) {
                 if(a+b+nums[l] + nums[r] ===target) {
                    res.push([a, b, nums[l], nums[r]]);
                    l++;
                    r--;
                    while(nums[l] === nums[l-1] && l<r) l++;
                    while(nums[r] === nums[r+1] && r>l) r--;
                } else if(a+b+nums[l] + nums[r] < target) {
                    l++;
                } else {
                    r--;
                }
            }
            while(nums[j+1] === nums[j] && j<n-2) j++;
        }
        while(nums[i+1] === nums[i] && i<n-3) i++;
    }
    return res;
};
