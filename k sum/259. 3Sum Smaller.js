/*
Given an array of n integers nums and a target, 
find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
Example:
Input: nums = [-2,0,1,3], and target = 2
Output: 2 
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    var count = 0, len = nums.length;
    nums = nums.sort((a, b) => {
        return a - b;
    });
   
    for(var i=0; i<len-2; i++) {
        var a = i;
        var b = i+1;
        var c = len-1;
        
        while(b < c) {
            if(nums[a]+nums[b]+nums[c] < target) {
                count += c -b; // since c is satisfied, anthing smaller than c and larger than b should also satisfy this.
                b ++;
            } else {
                c --;
            }
        }
    }
    return count;
};
