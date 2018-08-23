/*
Given an integer, write a function to determine if it is a power of two.

Example 1:

Input: 1
Output: true 
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false

*/

/**
 * @param {number} n
 * @return {boolean}
 Power of 2 means only one bit of n is '1', so use the trick n&(n-1)==0 to judge whether that is the case
 */


// another way
var isPowerOfTwo = function(n) {
    if(n <=0)  return false;
    return (n & (n-1)) === 0 ? true : false;
};