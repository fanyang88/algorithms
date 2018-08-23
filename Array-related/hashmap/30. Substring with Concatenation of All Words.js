/*
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

Example 1:

Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
Example 2:

Input:
  s = "wordgoodstudentgoodword",
  words = ["word","student"]
Output: []
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var res = [];
    if(s.length ===0 || words.length ===0)  return res;
    var n = words.length, len = words[0].length, map = {};
    for(var word of words) {
        map[word] = map[word]? map[word]+1 : 1;
    }
    for(var i=0; i<=s.length - n*len; i++) {
        var copy = Object.assign({}, map);
        if(_check(s.substr(i, n*len), copy, n, len))  res.push(i);
    }
    return res;
};

var _check = function(str, map, n, len) {
    for(var i=0; i<=str.length-len; i=i+len) {
        var sub = str.substr(i, len);
        if(!map[sub]) return false;
        map[sub] --;
    }
    return true;
};
