/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1

*/

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var p1 = -1, p2 = -1, minV=words.length;
    for(var i=0; i<words.length; i++) {
        if(words[i] === word1) p1 = i;
        if(words[i] === word2) p2 = i;
        if(p1!==-1 && p2!==-1)  minV = Math.min(Math.abs(p1-p2), minV);
    }
    return minV;
};