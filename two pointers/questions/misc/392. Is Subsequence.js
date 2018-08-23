/*
Given a string s and a string t, check if s is subsequence of t.
You may assume that there is only lower case English letters in both s and t. 
t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).
A subsequence of a string is a new string which is formed from the original string by deleting some 
(can be none) of the characters without disturbing the relative positions of the remaining characters. 
(ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:s = "abc", t = "ahbgdc"
Return true.

Example 2:s = "axc", t = "ahbgdc"
Return false.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * go through t, cross out char in s if equals, continue, if there is left in s, not a subsequence
 */
var isSubsequence = function(s, t) {
    if(!s) return true;
    if(!t) return false;
    var pS = 0;
    for(i=0;i<t.length;i++) {
        if(t.charAt(i) === s.charAt(pS)) {
            pS++;
        }
    }
    return pS === s.length ? true : false;
};
