/*
Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length ===0)  return s;
    var maxLen = 1, res=s[0];
    // start from each position and go the further left and right
    for(var i=1; i<s.length; i++) {
        var s1 = getPalindrome(i-1, i, s);
        if(s1[0] > maxLen) {
            maxLen = s1[0];
            res = s1[1];
        }
        s1 = getPalindrome(i-1, i+1, s);
        if(s1[0] > maxLen) {
            maxLen = s1[0];
            res = s1[1];
        }
    }
    return res;
};

var getPalindrome = function(s, e, str) {
    while(str[s] && str[e] && str[s] === str[e]) {
        s--;
        e++;
    }
    s++;
    e--;
    return [e-s+1, str.substring(s, e+1)];
};
