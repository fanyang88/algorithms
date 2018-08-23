/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"
Output: False
Example 3:
Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/**
 * @param {string} s
 * @return {boolean}
  // e.g: ababab
         aaaaaaaa
 split s into 2, just work on first half, if no subtring with 1~first-half length can add up the the orignal string, then return false.
 */

var repeatedSubstringPattern = function(s) {
    var sub = s.substr(0, parseInt(s.length /2));
    var len = sub.length;
    for(i=0; i<len; i++) {
       var temp = sub;
       while(temp.length < s.length) {
           temp += sub;
           if(temp === s)  return true;
       }
       sub = sub.substr(0, sub.length-1);
    }
    return false;
};
