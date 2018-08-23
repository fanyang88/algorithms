/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, 
you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:
Given nums = [3,2,2,3], val = 3,
Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,1,2,2,3,0,4,2], val = 2,
Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
Note that the order of those five elements can be arbitrary.
It doesn't matter what values are set beyond the returned length.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 [0,1,2,2,3,0,4,2]   count=0  val=2
 i=0, since nums[0]!=2 nums[count] = nums[0] count ++=1
 i=1, since nums[1]!=2 nums[count] = nums[1] count ++=2
 i=2, since nums[2] =2 count still is 2
 i=3, since nums[3] =2 count still is 2
 i=4, since nums[4]!=2 nums[count] = nums[4]=3 count ++=3   [0,1,3,2,3,0,4,2]
 i=5, since nums[5]!=2 nums[count] = nums[5]=0 count ++=4   [0,1,3,0,3,0,4,2]
 i=6, since nums[6]!=2 nums[count] = nums[6]=4 count ++=5   [0,1,3,0,4,0,4,2]
 */
var removeElement = function(nums, val) {
    var count =0; 
    for(var i=0; i<nums.length; i++) {
        if(nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};
