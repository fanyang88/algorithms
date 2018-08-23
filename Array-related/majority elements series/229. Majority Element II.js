/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var n = nums.length, res= [];
    if(n === 0) return res;
    var n1= 0, n2 = 0, c1=0, c2=0;
    for(var i=0; i<n; i++) {
        if(nums[i] === n1) {
            c1 ++;
        } else if(nums[i] === n2) {
            c2 ++;
        } else if(c1===0) {
            n1 = nums[i];
            c1 = 1;
        } else if(c2===0) {
            n2 = nums[i];
            c2 = 1;
        } else {
            c1--;
            c2 --;
        }
    }
  
    // verify
    c1=0, c2=0;
    for(var i=0; i<n; i++) {
        if(n1 === nums[i]) c1++;
        if(n2 === nums[i]) c2++;
    }
    if(c1 > ~~(n / 3))  res.push(n1);
    if(c2 > ~~(n / 3) && n2 !==n1)  res.push(n2);
    return res;
};
