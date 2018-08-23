/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 use a hashmap to store the sum existed and its corresponding freq
 [1,1,1]  k=2
 hash[0] = 1 sum=0 exist once
 i=0: sum=1, hash[1] = 1 
 i=1: sum=2, hash[2] = 1   but since hash[2-k] = 1 count+=1
 i=2: sum=3, hash[3] = 1   but since hash[3-k] = 1 count+=1
 count=2
 
 */
var subarraySum = function(nums, k) {
    var sum = [], total =0 , map={}, count=0;
    for(var item of nums) {
        total += item;
        sum.push(total);
    }
    map[0] = 1;
    for(var i=0; i<sum.length; i++) {
        if(map[sum[i] - k] > 0) {
            count += map[sum[i] - k];
        }
        map[sum[i]] = map[sum[i]] ? map[sum[i]]+1 : 1;
    }
    return count;
};
