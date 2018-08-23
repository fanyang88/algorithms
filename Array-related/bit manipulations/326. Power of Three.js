/*
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 
 function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// expected output: 3

 */

// using template
var isPowerOfThree = function(n) {
    if(n<=0)  return false;
    // since 3^x = n;
    var x = Math.round(Math.log(n) / Math.log(3));
    return (Math.pow(3, x) === n);
};
