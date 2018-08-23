/*
Write a function that takes a string as input and returns the string reversed.
Example:
Given s = "hello", return "olleh".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let newS = '', i;
    for(i=s.length-1; i>=0; i--) {
        newS += s[i];
    }
    return newS;
};
