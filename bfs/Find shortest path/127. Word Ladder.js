/*
Given two words (beginWord and endWord), and a dictionary's word list, 
find the length of shortest transformation sequence from beginWord to endWord, such that:
Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,
Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
*/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
using BFS:
start =hit
dict: "hot","dot","dog","lot","log", "cog"

Q: hit: 1             
pop hit, find hit neighboor: hot(2), delete hot in dict
dict: "dot","dog","lot","log", "cog"

Q: hot: 2
pop hot(2), find hot neighboor: dot(3), lot(3), delete dot, lot in dict
dict: dog","log", "cog"

Q: dot: 3 | lot: 3
pop lot(3), find lot neighboor: log(4), delete log in dict
dict: dog","cog"

Q: dot: 3 | log: 4
pop log(4), find log neighboor: cog(5), dog(5) delete cog, dog in dict
dict:  
Q: dot: 3 | cog: 5 | dog : 5
pop dog(5), no neighboor
dict: 
Q: dot(3), cog(5)
pop cog(5)  ==target, return 5
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var set = new Set();
    for(var word of wordList) {
        set.add(word);
    }
    set.delete(beginWord);
    var st = [[beginWord, 1]];
    while(st.length > 0) {
        var cur = st.shift();
        if(cur[0] === endWord)  return cur[1];
        for(var next of _findNeighbor(cur[0], set)) {
            st.push([next, cur[1]+1]);
        }
    }
    return 0;
};

var _findNeighbor = function(word, set) {
    var s = 'abcdefghijklmnopqrstuvwxyz', res = [];
    for(var i=0; i<word.length; i++) {
        for(var j=0; j<26; j++) {
            var perm = word.substring(0, i) + s[j] + word.substring(i+1);
            if(set.has(perm)) {
                res.push(perm);
                set.delete(perm);
            }
        }
    }
    return res;
};
