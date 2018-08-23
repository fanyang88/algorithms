/*
Given a pattern and a string str, find if str follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.
Examples:
pattern = "abab", str = "redblueredblue" should return true.
pattern = "aaaa", str = "asdasdasdasd" should return true.
pattern = "aabb", str = "xyzabcxzyabc" should return false.
Notes: You may assume both pattern and str contains only lowercase letters.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPatternMatch = function (pattern, str) {
    // we need a map and a set, map would store the char in pattern as key, value would be substring in str 
  var map = {}, set = new Set(), m=pattern.length, n=str.length;   
  return isMatch(str, 0, pattern, 0, map, set, m, n);
};

var isMatch = function (str, sp, pattern, pp, map, set, m, n) {
    // both str and pattern have checked completely and match
    if (sp === n && pp === m)   return true;  
    if (sp === n || pp === m)   return false;
  
    var chr = pattern[pp]; // Get the current pattern character
    if (map[chr] !== undefined) {  // if the pattern character exists in map
        var substr = map[chr];
        if (!str.startsWith(substr, sp))   return false;  
        // then check if we can use it to match str[sInd... sInd+s.length]
        // If it can match, continue to match the rest.
        return isMatch(str, sp + substr.length, pattern, pp + 1, map, set, m, n);  
    }                                           
    for (var i = sp; i < n; i++) {
        var subStr = str.substring(sp, i + 1);
        if (set.has(subStr))   continue;
        map[chr]= subStr;  // Create or update it.
        set.add(subStr);
        if (isMatch(str, i + 1, pattern, pp + 1, map, set, m, n)) {  // Continue to match the rest
            return true;
        }
        delete map[chr];
        set.delete(subStr);
    }   
    return false;
};