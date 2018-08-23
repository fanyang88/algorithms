/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
*/

/**
 * @param {number} num
 * @return {boolean}
 e.g: 24 is not since 23 % 3!=0
      64 is, since 63 % 3 = 21
 */
var isPowerOfFour = function(num) {
    return (num > 0 && (num & (num-1)) === 0 && (num-1) % 3 ===0);
};
