/*
You are given a string, s, and a list of words, words, 
that are all of the same length. 
Find all starting indices of substring(s) in s that is a 
concatenation of each word in words exactly once and without any intervening characters.

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
    var total = words.length, wordLen = words[0].length, map = {};
    for(var word of words) {
        map[word] = map[word]? map[word]+1 : 1;
    }
    
    for(var i=0; i<=s.length - total*wordLen; i++) {
        var copy = Object.create(map);
        var k = 0;
        var start = i;
        // check if each word in substring(i, i+wordLen) in the copy map, 
        // if not, break to next i
        // else continue check for all words in copy map, we modify copy map accordingly.
        while(k < total) {
            var str = s.substring(start, start+wordLen);
            if(!copy[str]) break;
            copy[str] = copy[str] -1;
            k++;
            start += wordLen;
        }
        if(k===total) { // all words are in the map
            res.push(i);
        }
    }
    return res;
};