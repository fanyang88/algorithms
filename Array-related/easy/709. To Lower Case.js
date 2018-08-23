/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"

*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var res = '';
    for(var chr of str) {
        if(chr <= 'Z' && chr >= 'A') {
            chr = String.fromCharCode(chr.charCodeAt(0) + 32); 
        }
        res += chr;
    }
    return res;
};