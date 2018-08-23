/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number} 
 e.g:  a = 1, b= 3
       a = 0001 b =0011  carry = a & b= 0001, a = a ^b = 0010   b= carry >> 1 = 0010
       a = 0010 b =0010  carry = a & b = 0010  a = a ^ b = 0000 b = carry >> 1 = 0100
       a = 0000 b =0100  carry = a & b = 0000  a = a ^ b = 0100 b = carry >> 1 = 0000
       a is the answer
 */
var getSum = function(a, b) {
    var carry;
    while(b !== 0) {
        carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
};