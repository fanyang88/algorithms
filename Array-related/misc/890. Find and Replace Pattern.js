/*
You have a list of words and a pattern, and you want to know which words in words matches the pattern.
A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x 
in the pattern with p(x), we get the desired word.
(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, 
and no two letters map to the same letter.)
Return a list of the words in words that match the given pattern. 
You may return the answer in any order.

Example 1:
Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
since a and b map to the same letter.
*/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 abb, mee
 map1[a] = m  map2[m] = a
 map1[b] = e  map2[e] = b
 */
var findAndReplacePattern = function(words, pattern) {
    var res = [];
    for(var word of words) {
        if(isSamePattern(word, pattern)) res.push(word);
    }
    return res;
};

var isSamePattern = function(word1, word2) {
    var map1 = {}, map2= {};
    if(word1.length !== word2.length)  return false;
    for(var i=0;i<word1.length; i++) {
        if(!map1[word1[i]])  map1[word1[i]] = word2[i];
        if(!map2[word2[i]])  map2[word2[i]] = word1[i];
        if(map1[word1[i]] !== word2[i] || map2[word2[i]] !== word1[i])  return false;
    }
    return true;
};
