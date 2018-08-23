/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * Same thought as 448, flip num[index] to be neg, index = abs(nums[i])-1
 * [4,3,2,7,8,2,3,1]
 * index = 4-1, [4,3,2,-7,8,2,3,1]
 * index = 3-1, [4,3,-2,-7,8,2,3,1]
 * index = 2-1, [4,-3,-2,-7,8,2,3,1]
 * index = 7-1, [4,-3,-2,-7,8,2,-3,1]
 * index = 8-1, [4,-3,-2,-7,8,2,-3,-1]
 * index = 2-1, since nums[1]<0, push abs(nums[i]) =2
 * index = 3-1, since nums[2]<0, push abs(nums[i]) =3
 * index = 1-1, [-4,-3,-2,-7,8,2,-3,-1]
 */
var findDuplicates = function(nums) {
    let res= [], index, i;
    for(i=0;i<nums.length;i++){
        index = Math.abs(nums[i]) -1;
        // Before flip it is already a neg, has been traverse before, it is a dup
        if(nums[index] < 0) {
            res.push(Math.abs(nums[i]));
        }
        nums[index] = nums[index]*(-1);
    }
   
    return res;
    
};