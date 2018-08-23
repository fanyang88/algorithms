/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var carry = 0, Pa= a.length-1, Pb= b.length-1, res= [];
    while(Pa >=0 && Pb >=0) {
        var sum = parseInt(a[Pa--]) + parseInt(b[Pb--]) +carry; // 0, 1, 2, 3
        res.unshift(sum % 2);
        carry = ~~(sum /2);
    }
    while(Pa >=0) {
        var sum = parseInt(a[Pa--]) +carry; // 0, 1, 2, 3
        res.unshift(sum % 2);
        carry = ~~(sum /2);
    }
     while(Pb >=0) {
        var sum = parseInt(b[Pb--]) +carry; // 0, 1, 2, 3
        res.unshift(sum % 2);
        carry = ~~(sum /2);
    }
    res.unshift(carry);
    
    while(res[0] === 0) { // handle corner case: [0, 0]
        res.shift();
    }
    if(res.length===0) res=[0];
    return res.join('');
};