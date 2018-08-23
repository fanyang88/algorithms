/*
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

*/

/**
 * Initialize your data structure here.
 */

var TrieNode = function(val) {
    this.val = val;
    this.children = {};
    this.isWord = false;
};

var WordDictionary = function() {
    this.root= new TrieNode('');
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(!this.root || word.length===0)  return;
    var cur = this.root;
    for(var i=0; i<word.length; i++) {
        if(!cur.children[word[i]]) {
            cur.children[word[i]] = new TrieNode(word[i]);
        }
        cur = cur.children[word[i]];
        if(i=== word.length-1) cur.isWord = true;
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.root);
};

WordDictionary.prototype.dfs = function(word, index, root) {
    if(index === word.length) return root.isWord;
    var chr = word[index];
    if(chr !== '.') {
        if(!root.children[chr])  return false;
        return this.dfs(word, index+1, root.children[chr]);
    } else {
        for(var key in root.children) {
            if(this.dfs(word, index+1, root.children[key]))  return true;
        }
    }
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */