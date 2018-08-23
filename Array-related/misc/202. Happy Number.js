/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

/**
 * @param {number} n
 * @return {boolean}
 A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
If n is not happy, then its sequence does not go to 1. Instead, it ends in the cycle:
4, 16, 37, 58, 89, 145, 42, 20, 4, ...
 */
var isHappy = function(n) {
    var set = new Set();
    while(!set.has(n)) {
        set.add(n);
        n = getSum(n);
        if(n===1)  return true;
    }
    return false;
};

var getSum = function(num) {
    if(num ===0)  return 0;
    var sum=0;
    while(num >0) {
        var digit = num % 10;
        sum += digit * digit;
        num = ~~(num / 10);
    }
    return sum;
}
