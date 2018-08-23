/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? 
You may assume the returned list does not count as extra space.

Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 if the number on index i is missing, means no i point to the mising number 
 we can make every number to be negtive by using num[nums[i]-1] = -num[nums[i]-1] 
 then traverse the whole array, for those is still positive, 
 should be the mising value since there is no index to point to it to   change it to negative
 
 e.g: [4,3,2,7,8,2,3,1]
 i=0, num[4-1] = 7 to be -7 [4,3,2,-7,8,2,3,1]
 i=1, num[3-1] = 2 to be -2 [4,3,-2,-7,8,2,3,1]
 i=2, num[2-1] = 3 to be -3 [4,-3,-2,-7,8,2,3,1]
 i=3, num[7-1] = 3 to be -3 [4,-3,-2,-7,8,2,-3,1]
 i=4, num[8-1] = 1 to be -1 [4,-3,-2,-7,8,2,-3,-1]
 i=5, num[2-1] = -3
 i=6, num[3-1] = -2 
 i=7, num[1-1] = 4 to be -4 [-4,-3,-2,-7,8,2,-3,-1]
 Output:  [5,6]
 */
var findDisappearedNumbers = function(nums) {
    var res = [];
    for(var i=0; i<nums.length; i++) {
        var ind = Math.abs(nums[i])-1;
        if(nums[ind] > 0) {
            nums[ind] = -nums[ind];
        }
    }
    
    for(var i=0; i<nums.length; i++) {
        if(nums[i] > 0) {
            res.push(i+1);
        }
    }
    return res;
};