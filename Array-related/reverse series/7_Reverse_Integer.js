/*
Reverse digits of an integer.
Example1: x = 123, return 321
Example2: x = -123, return -321
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    while(x !== 0) {
        var digit = x % 10;
        result = result * 10 + digit;
        x = ~~(x / 10);
    }
    // corner case is when result > max 32 int or  < min 32 bit int
    if(result > Math.pow(2, 31)-1 || result < -Math.pow(2, 31))   return 0;
    return result;
};
