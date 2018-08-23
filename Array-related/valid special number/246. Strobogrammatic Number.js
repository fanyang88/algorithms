/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
Write a function to determine if a number is strobogrammatic. The number is represented as a string.
Example 1:
Input:  "69"
Output: true
Example 2:
Input:  "88"
Output: true
Example 3:
Input:  "962"
Output: false
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    var start = 0, end = num.length-1;
    while(start < end) {
        if((num[start] === '1' && num[end] === '1') || 
           (num[start] === '8' && num[end] === '8') ||
           (num[start] === '6' && num[end] === '9') ||
           (num[start] === '9' && num[end] === '6') ||
           (num[start] === '0' && num[end] === '0')) {
            start ++;
            end --;
        }else {
            return false;
        } 
    }
    if(start === end) {
        if(num[start] === '0' || num[start] === '1' || num[start] === '8')  return true;
        else return false;
    } else {
        return true;
    }
};
