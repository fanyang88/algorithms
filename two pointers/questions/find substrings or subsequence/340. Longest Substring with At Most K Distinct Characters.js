/*
Given a string, find the length of the longest substring T that contains at most k distinct characters.
For example, Given s = “eceba” and k = 2,
T is "ece" which its length is 3.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if(s.length===0 || k===0)  return 0;
    var map = {}, j=0, count=0, maxLen=1;
    for(var i=0; i<s.length; i++) {
        if(!map[s[i]]) {
            count++;
        }
        map[s[i]] = map[s[i]] ? map[s[i]]+1 : 1;
        while(count > k) {
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
