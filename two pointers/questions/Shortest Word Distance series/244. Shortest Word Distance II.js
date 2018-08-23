/*
Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list. Your method will be called repeatedly many times with different parameters. 

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
*/

/**
 * @param {string[]} words
 we can store the word and there indexes in a map
 e.g: coding: [3], makes: [1,4]
 based on two lists, we need to find the shortest distance between them
 e.g: word1 has [3,6]  word2 has [2,5,7]
 when ind1 > ind2: getmin, ind2 ++ 
 when ind1 <= ind2: getmin, ind1++
 */
var WordDistance = function(words) {
    this.map = {};
    for(var i=0; i<words.length; i++) {
        if(!this.map[words[i]])  this.map[words[i]] = [];
        this.map[words[i]].push(i);
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    if(word1 === word2)  return 0;
    var list1 = this.map[word1];
    var list2 = this.map[word2];
    var i=0, j=0, minDist = Infinity;
    while(i<list1.length && j<list2.length) {
        minDist = Math.min(minDist, Math.abs(list1[i]-list2[j]));
        if(list1[i]<list2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return minDist;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = Object.create(WordDistance).createNew(words)
 * var param_1 = obj.shortest(word1,word2)
 */