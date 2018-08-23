/*
Given a string, find the length of the longest substring without repeating characters.
Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length===0) return 0;
    var j=0, map = {}, maxLen = Number.MIN_SAFE_INTEGER;
    for(var i=0; i<s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]]+1 :1;
        maxLen = Math.max(maxLen, i-j);
        while(map[s[i]] > 1) {
            map[s[j]] --;
            j++;
        }
    }
    maxLen = Math.max(maxLen, i-j);
    return maxLen;
};
