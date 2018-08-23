/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 
0, 1, 0, 3, 12
x, y point to 0
y always point to the first 0 element, in xy range there is always 0
0, 1, 0, 3, 12
x
y
0, 1, 0, 3, 12
   x
y
1, 0, 0, 3, 12
   x
   y
1, 0, 0, 3, 12
         x
   y   
1, 3, 0, 0, 12
         x
      y
1, 3, 0, 0, 12
             x
      y  
1, 3, 12, 0, 0
             x
          y      
*/

var moveZeroes = function(nums) {
    let j=0;  // j always point to the next position which is 0 to be swaped
    for(var i=0; i<nums.length; i++) {
        if(nums[i] !== 0) {
            //swap nums[i] with nums[j]
            var tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            j++;
        }
    }
    return;
};