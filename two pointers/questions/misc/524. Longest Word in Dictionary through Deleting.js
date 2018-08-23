/*
Given a string and a string dictionary, 
find the longest string in the dictionary 
that can be formed by deleting some characters of the given string. 
If there are more than one possible results, 
return the longest word with the smallest lexicographical order. 
If there is no possible result, return the empty string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output: 
"apple"
Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]

Output: 
"a"
Note:
All the strings in the input will only contain lower-case letters.
The size of the dictionary won't exceed 1,000.
The length of all the strings in the input won't exceed 1,000.

*/

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    var maxWord = '';
    for(var word of d) {
        if(!isSubsequence(word, s)) continue;
        if(maxWord.length <= word.length) {
            if(maxWord.length === word.length) {
                maxWord = maxWord < word ? maxWord : word;
            } else {
                maxWord = word;
            }
        }
    }
    return maxWord;
};

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