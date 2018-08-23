/*
Given two words (beginWord and endWord), and a dictionary's word list, 
find all shortest transformation sequence(s) from beginWord to endWord, such that:
Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,
Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
Return
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
Note:
Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 
 based on word ladder I, we need to construct two more thing on Bfs
 1. hashmap to map each string to its neighbors [string: [neigbors]]
 2. hashmap to map each string to distance to beginword [string: length]
 then we use dfs to find out all the shortest pathes.
 */
var findLadders = function(beginWord, endWord, wordList) {
    var st = [[beginWord, 0]], set = new Set(), map = {}, distance = {}, res= [];
    distance[beginWord] = 0;
    // put list in set for faster deletion.
    for(var word of wordList) {
        set.add(word);
    }
    set.delete(beginWord);
    while(st.length > 0) {
        var cur = st.shift();
        var nexts = _findNexts(cur[0], set);
        map[cur[0]]= nexts;
        for(var next of nexts) {
            if(distance[next] !== undefined)  continue;
            distance[next] = cur[1] +1;
            
            st.push([next, cur[1]+1]);
        }
    }
    dfs(beginWord, endWord, map, distance, [beginWord], res);
    return res;
};

var _findNexts = function(word, set) {
    var res = [], str = 'abcdefghijklmnopqrstuvwxyz';
    for(var i=0; i<word.length; i++) {
        for(var j=0; j<26; j++) {
            var newWord = word.substring(0, i) + str[j] + word.substring(i+1);
            if(set.has(newWord) && newWord !== word) {
                res.push(newWord);
            }
        }
    }
    return res;
};

var dfs = function(curWord, endWord, map, distance, cur, res) {
    if(curWord === endWord) {
        res.push(cur.slice(0));
        return;
    }
    
    for(var next of map[curWord]) {
        if(distance[next] === distance[curWord] +1) {
            cur.push(next);
            dfs(next, endWord, map, distance, cur, res);
            cur.pop();
        }   
    }
};