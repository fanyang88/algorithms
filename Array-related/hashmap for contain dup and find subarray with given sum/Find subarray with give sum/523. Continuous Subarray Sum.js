/*
Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of k, that is, sums up to n*k where n is also an integer.

Example 1:
Input: [23, 2, 4, 6, 7],  k=6
Output: True
Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
Example 2:
Input: [23, 2, 6, 4, 7],  k=6
Output: True
Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
Note:
The length of the array won't exceed 10,000.
You may assume the sum of all the numbers is in the range of a signed 32-bit integer.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 Input: [23, 2, 4, 6, 7],  k=6
 Output: True
 
 hash[0] = -1
 i=0, hash[23%k=5] = 1  hash[5] =0
 i=1, hash[25%k] = 1  hash[1] =1
 i=2, since hash[29%k=5] =hash[5] already exist, and i-hash[5] = 2 > 1 return true;
 
 case [1, 1] k=2
 hash[0] = -1
 i=0, hash[1%2] =1
 i=1, hash[2%2] already exist, i-hash[0] = 1-(-1) > 1 found
 */
var checkSubarraySum = function(nums, k) {
    if (nums.length < 2) return false;
    // special case [0,0]  -1 return true
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === 0) return true;
    }
    if (k < 0) k = -k;
    if (k === 0) return false;
    
    // mod k for every item in nums and get the presum
    var presum = [], total = 0, map = {};
    map[0] = -1;
    for(var item of nums) {
        total += item;
        presum.push(total);
    }
    
    for(var i=0; i<presum.length; i++) {
        if(map[presum[i] % k] !== undefined) {
            if( i - map[presum[i] % k] >1)  return true;
        } 
        else map[presum[i] % k]  = i;
    }
    return false;
};
