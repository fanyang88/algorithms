/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.


*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0)  return '';
    var prefix = strs[0];
    for(var i=1; i<strs.length; i++) {
        prefix = getCommon(prefix, strs[i]);
    }
    return prefix;
};

var getCommon = function(s1, s2) {
    if(s1 === '' || s2 ==='')  return '';
    var i=0;
    while(s1[i] === s2[i] && i < Math.min(s1.length, s2.length)) i++;
    return s1.substring(0, i);
};
