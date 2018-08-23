/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
If the last word does not exist, return 0.
Note: A word is defined as a character sequence consists of non-space characters only.
Example:
Input: "Hello World"
Output: 5
*/

var lengthOfLastWord = function(s) {
    var e = s.length-1, len=0;
    while(e >=0 && s[e] === ' ') e--;
    while(e >=0 && s[e] !== ' ') {
        len++;
        e--;
    }
    return len;
};