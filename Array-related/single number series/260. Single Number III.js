/*
Given an array of numbers nums, 
in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:
Input:  [1,2,1,3,2,5]
Output: [3,5]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 e.g: [1,2,1,3,2,5]  
 xor = 110 
 xor & -xor = 10
 set num1=0, num2=0
 we AND each number with 10: if result > 0 num1 XOR num
                             if result<= 0 num2 XOR num
num1 and num2 is the answer

num=1, num&xor = 01&10=0 num2 = 01
num=2, num&xor = 10&10>0 num1 = 10
num=1, num&xor = 01&10=0 num2 = 01^01 =00
num=3, num&xor = 11&10>0 num1 = 10^11 =01
num=2, num&xor = 10&10>0 num1 = 01^10 =11
num=5, num&xor =101&10=0 num2 = 00^101=101  same is 0, diffrent is 1
 */
var singleNumber = function(nums) {
    var xor = nums[0], num1=0, num2=0;
    for(var i=1; i<nums.length; i++) {
        xor = xor ^ nums[i];
    }
    
    xor &= -xor;   // THIS is the key
    
    for(var num of nums) {
        if((num & xor) > 0) num1 = num1 ^ num;
        else num2 = num2 ^ num;
    }
    return [num1, num2];
};