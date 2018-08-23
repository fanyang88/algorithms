/*
Given a string s , find the length of the longest substring t 
that contains at most 2 distinct characters.

Example 1:

Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
Example 2:

Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    if(s.length===0)  return 0;
    var map = {}, j=0, count=0, maxLen=1;
    for(var i=0; i<s.length; i++) {
        if(!map[s[i]]) {
            count++;
        }
        map[s[i]] = map[s[i]] ? map[s[i]]+1 : 1;
        while(count > 2) {
            maxLen = Math.max(maxLen, i-j);
            map[s[j]] --;
            
            if(map[s[j]] ===0)  count--;
            j++;
        }
    }
    // the last one
    maxLen = Math.max(maxLen, i-j);
    return maxLen;
};
