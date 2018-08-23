/*
Given a 2D board and a list of words from the dictionary, 
find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once in a word.

Example:

Input: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

Output: ["eat","oath"]
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    var m= board.length, n = board[0].length, res = new Set(), trie = new Trie();
    for(var word of words) {
        trie.insert(word);
    }
    var visited = new Set();
    for(var i=0; i<m; i++) {
        for(var j=0; j<n; j++) {
            dfs(visited, i, j, m, n, board, res, '', trie);
        }
    }
    return Array.from(res);
};

var dfs = function(visited, x, y, m, n, board, res, str, trie) {
    if(x <0 || x>=m || y<0 || y>=n ||visited.has(x+':'+y))  return;
    str += board[x][y];
    if(!trie.startsWith(str))  return;   // pruning
    if(trie.search(str))  
        res.add(str);
    
    visited.add(x+':'+y);
    dfs(visited, x-1, y, m, n, board, res, str, trie);
    dfs(visited, x+1, y, m, n, board, res, str, trie);
    dfs(visited, x, y-1, m, n, board, res, str, trie);
    dfs(visited, x, y+1, m, n, board, res, str, trie);
    visited.delete(x+':'+y);
}

var TrieNode = function(data) {
    this.isWord = false;
    this.data = data;
    this.children = {};
};

var Trie = function() {
    this.root = new TrieNode('');
};

Trie.prototype.insert = function(word) {
    if(!this.root || word.length === 0)  return;
    var cur = this.root;
    for(var i=0; i<word.length; i++) {
        var chr = word[i];
        if(!cur.children[chr]) {
            cur.children[chr] = new TrieNode(chr);
        }
        cur = cur.children[chr];
        if(i=== word.length-1) {
            cur.isWord = true;
        }
    }
};


Trie.prototype.search = function(word) {
    if(!this.root || word.length === 0)  return;
    var cur = this.root;
    for(var i=0; i<word.length; i++) {
        var chr = word[i];
        if(!cur.children[chr]) {
            return false;
        }
        cur = cur.children[chr];
        if(i=== word.length-1 && !cur.isWord) {
            return false;
        }
    }
    return true;
};


Trie.prototype.startsWith = function(prefix) {
    if(!this.root || prefix.length === 0)  return;
    var cur = this.root;
    for(var i=0; i<prefix.length; i++) {
        var chr = prefix[i];
        if(!cur.children[chr]) {
            return false;
        }
        cur = cur.children[chr];
    }
    return true;
};
