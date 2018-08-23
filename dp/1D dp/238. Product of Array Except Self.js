/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 *
e.g: [1, 2, 3, 4]
we set left[0] = 1 first
left[1] = left[0] * num[0] = num[0]
left[2] = left[1] * num[1] = num[0] * num[1]
left[3] = left[2] * num[2] = num[0] * num[1] * num[2]

then we go from right to left, right=1
rest[3] = rest[3] * right = rest[3]                             
right = num[3]
rest[2] = rest[2] * right = rest[2]*num[3]                      
right = num[2] * num[3]
rest[1] = rest[1] * right = rest[1]*num[2] * num[3]             
right = num[1] * num[2] * num[3]
rest[0] = rest[0] * right = rest[0]*num[1] * num[2] * num[3]    
right = num[0] * num[1] * num[2] * num[3]
*/

var productExceptSelf = function(nums) {
    var left= [1];
    for(var i=1; i<nums.length; i++) {
        left[i] = left[i-1] * nums[i-1];
    }
    var right = 1;
    for(var i=nums.length-1; i>=0; i--) {
        left[i] = left[i] * right;
        right *= nums[i];
    }
    return left;
};
