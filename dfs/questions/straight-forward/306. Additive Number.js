/*
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Example 1:

Input: "112358"
Output: true 
Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
             1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
Example 2:

Input: "199100199"
Output: true 
Explanation: The additive sequence is: 1, 99, 100, 199. 
             1 + 99 = 100, 99 + 100 = 199
 
*/

/**
 * @param {string} num
 * @return {boolean}
 */


var isAdditiveNumber = function(num) {
    // only less 3 digits there, can't be a additive number
    if(num.length < 3)  return false; 
    
    // get first number, it can be length from 1 to num.length / 2
    for(var len1=1; len1<= ~~(num.length/2) ;len1++) {
        var first = num.substr(0, len1);
        if(num[0] === '0' && len1 > 1)   return false;
     
        // get second number, number can't start with 0, if it is, need break;
        // the rest of the string length should be large or equal to the max of first and second
        for(var len2=1; num.length-len1-len2 >= Math.max(len1, len2); len2++) {
            var second = num.substr(len1, len2);
            if(second[0] === '0' && len2 > 1)   break;
            
            if(isValid(+first, +second, len1+len2, num)) {
                return true;
            }
        }
    }
    return false;
};

var isValid = function(first, second, start, num) {
    if(start === num.length)  return true;
    var sum = first + second;
    // if the rest string startsWith the sum and the rest comply the same rule, return true
    return num.substring(start).startsWith(''+sum) && isValid(second, sum, start+(''+sum).length, num);
};