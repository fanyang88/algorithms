/*
Given two sentences words1, words2 (each represented as an array of strings), and a list of similar word pairs pairs, 
determine if two sentences are similar.
For example, words1 = ["great", "acting", "skills"] and words2 = ["fine", "drama", "talent"] are similar, 
if the similar word pairs are pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]].
Note that the similarity relation is transitive. For example, if "great" and "good" are similar, and "fine" and "good" are similar, 
then "great" and "fine" are similar.
Similarity is also symmetric. For example, "great" and "fine" being similar is the same as "fine" and "great" being similar.
Also, a word is always similar with itself. For example, the sentences words1 = ["great"], words2 = ["great"], pairs = [] are similar, 
even though there are no specified similar word pairs.
Finally, sentences can only be similar if they have the same number of words.
So a sentence like words1 = ["great"] can never be similar to words2 = ["doubleplus","good"].
Note:
The length of words1 and words2 will not exceed 1000.
The length of pairs will not exceed 2000.
The length of each pairs[i] will be 2.
The length of each words[i] and pairs[i][j] will be in the range [1, 20].
*/

// Method 1 use dfs
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
    // construct the hashmap first, for each word, we put all its simlarity words in the value set,
    // DFS to find match from word1 to word2, if fail to match one of them, directly return false;
    if(words1.length !== words2.length)  return false;
    var map = {};
    for(var pair of pairs) {
        if(map[pair[0]] === undefined) {
            map[pair[0]] = new Set();
        }
        map[pair[0]].add(pair[1]);
        if(map[pair[1]] === undefined) {
            map[pair[1]] = new Set();
        }
        map[pair[1]].add(pair[0]);
    }
    var visited = new Set();
    for(var i=0; i<words1.length; i++) {
        if(!dfs(words1[i], words2[i], visited, map)) return false;
        visited.clear();
    }
    return true;
};

var dfs = function(src, dest, visited, map) {
    if(src === dest) {
        return true;
    }
    visited.add(src);
   // If there is no similar word and dest not equal to src, directly return false;
    if(!map[src]) {
        return false;
    }
    for(var item of map[src]) {
        if(visited.has(item))  continue; // already checked
        if(dfs(item, dest, visited, map))  return true;
    }
    return false;
};

// Method 2, use union find
var areSentencesSimilarTwo = function(words1, words2, pairs) {
    if(words1.length !== words2.length)  return false;
    var root = {};
    for(var pair of pairs) {
        if(root[pair[0]] === undefined) {
            root[pair[0]] = pair[0];
        }
        var parent1 = findRoot(pair[0], root);
         if(root[pair[1]] === undefined) {
            root[pair[1]] = pair[1];
        }
        var parent2 = findRoot(pair[1], root);
        root[parent1] = parent2; // This is the key
    }
    
    for(var i=0; i<words1.length; i++) {
        if( words1[i] !== words2[i] && findRoot(words1[i], root)!== findRoot(words2[i], root))  
            return false;
    }
    return true;
};

var findRoot = function(word, root) {
   if(word === root[word]) {
       return word;
   }
   return findRoot(root[word], root);
};
