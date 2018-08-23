/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 if the array is qualified, then index+1 = num, 
                            num-1= index => 
                            nums[num-1] = nums[index] => nums[nums[index]-1] = nums[index]
 The trick is to transform the array to be each number identical to the its index+1
 e.g: [3, 4, -1, 1] 
 i=0, since nums[0](3) !== nums[nums[0]-1](-1) swap nums[0] with  nums[nums[0]-1] [-1, 4, 3, 1]
      since nums[0] = -1 stop
 i=1, since nums[1](4) !== mums[nums[1]-1](1) swap nums[1] with  nums[nums[1]-1] [-1, 1, 3, 4]
      since nums[1](1) !== mums[nums[1]-1](-1) swap nums[1] with  nums[nums[1]-1] [1, -1, 3, 4] 
 i=2, since nums[2] = mums[nums[1]-1] stop
 we get [1, -1, 3, 4] examine the array, the first one number != index+1 would be the answer
 */
var firstMissingPositive = function(nums) {
    var n= nums.length;
    for(var i=0; i<n; i++) {
        while(nums[nums[i]-1] !== undefined && nums[nums[i]-1] !== nums[i]) {
            var temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
        }
    }
    for(var i=0; i<n; i++) {
        if(i+1!== nums[i])  return i+1;
    }
    return n+1;
};