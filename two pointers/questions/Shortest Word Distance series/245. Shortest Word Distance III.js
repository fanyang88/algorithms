/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

word1 and word2 may be the same and they represent two individual words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “makes”, word2 = “coding”
Output: 1
Input: word1 = "makes", word2 = "makes"
Output: 3

*/


/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 i=0 doesn't = word1 or word2 skip
 i=1 equal to word1 index = 1
 i=2 skip
 i=3 equal to word2 since index!=-1  min=3-1=2  index=3
 i=4 equal to word1 since index!=-1  min=4-3=1  index=4
 
 a,a,c,b, get distance of a,b
 i=0 equal to word1  index=0
 i=1 equal to word1  but since word[index]=word[0]=word[i]  we don't caculate, index = 1
 i=2 skip
 i=3 equal to word2 since word[index]=word[1]!=word[i]  getMin=3-1=2, index = 3
 */
var shortestWordDistance = function(words, word1, word2) {
    var index = -1, minV = words.length;
    for(var i=0; i<words.length; i++) {
        if(words[i] === word1 || words[i] === word2) {
            if(index !==-1 && (word1 === word2 || words[index] !== words[i])) {  // The key
                minV = Math.min(minV, i-index);
            }
            index = i;
        }
    }
    return minV;
};