/*
Given a pattern and a string str, find if str follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var mapPattern = {}, mapStr = {};
    var arr = str.split(' ');
    for(var i=0; i<arr.length; i++) {
        if(!mapPattern[pattern[i]] && !mapStr[arr[i]]) {
            mapPattern[pattern[i]] = arr[i];
            mapStr[arr[i]] = pattern[i];
        } else if(mapPattern[pattern[i]] && mapStr[arr[i]]) {
            if(mapPattern[pattern[i]] !== arr[i] || mapStr[arr[i]] !== pattern[i]) {
                return false;
            }
        } else {
            return false;
        }
    }
    if(i!== pattern.length)  return false;  // Easy to forget.
    return true;
};
