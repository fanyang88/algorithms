/*
Given a positive integer, return its corresponding column title as appear 
in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"
*/


/**
 * @param {number} n
 * @return {string}
 
  change to 26 based
 */
var convertToTitle = function(n) {
    var str ='ABCDEFGHIJKLMNOPQRSTUVWXYZ', res= '';
    while(n >0) {
        var ind = (n-1) % 26; // tricky part is n-1 not n for corner cases
        res = str[ind] + res;
        n = ~~((n-1) / 26);
    }
    return res;
};
