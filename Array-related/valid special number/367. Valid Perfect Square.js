/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.
Note: Do not use any built-in library function such as sqrt.
Example 1:
Input: 16
Returns: True
Example 2:
Input: 14
Returns: False
*/

/**
 * @param {number} num
 * @return {boolean}
 example: divide 49 by 2 = 24, 24x24 > 49, divide 24 by 2 = 12, 12x12> 49, divide 12 by 2 = 6, 6x6 < 49
 we find the range 12~6, get squres in this range, if there is equal, then we find it.
 */
var isPerfectSquare = function(num) {
    if(num === 1) return true;
    var div = parseInt(num/2), i;
    while(div*div > num) {
        div = parseInt(div/2);
    }
    for(i = div; i< div *2; i++) {
        if(i*i === num) {
            return true;
        }
    }
    return false;
};
