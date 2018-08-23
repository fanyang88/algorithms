/*
Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 
 e.g:
This question is pretty straightforward.

Because all trailing 0 is from factors 5 * 2.

But sometimes one number may have several 5 factors, for example, 25 have two 5 factors, 125 have three 5 factors. In the n! operation, factors 2 is always ample. So we just count how many 5 factors in all number from 1 to n.

e.g: 1-5 there is only 1
  1-25, 5, 10, 15, 20, 25 = 6 in total  25/5 = 5 + 5/5 = 6
  1-15 15/5 = 3 + 3/5 = 3
  
 */
var trailingZeroes = function(n) {
    var count = 0;
    while(n > 0) {
        n = ~~(n/5);
        count += n;
    }
    return count;
};
