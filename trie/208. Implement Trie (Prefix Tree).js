// Implement a trie with insert, search, and startsWith methods.
// Note:
// You may assume that all inputs are consist of lowercase letters a-z.
// non -recursive version

/**
 * Initialize your data structure here.
 */

var TrieNode = function(data) {
    this.isWord = false;
    this.data = data;
    this.children = {};
};

var Trie = function() {
    this.root = new TrieNode('');
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
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

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
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

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
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

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


// recursive version
/**
 * Initialize your data structure here.
 */
var TriNode = function(data) {
    this.isWord = false;
    this.children = {};
    this.data = data;
};
 
var Trie = function() {
    this.root = new TriNode('');
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(!this.root) return;
    this._insertNode(this.root, word);
};

Trie.prototype._insertNode = function(node, word) {
    if(!node || !word) {
        return null;
    }
    var chr = word.charAt(0);
    word = word.substring(1);
    var childNode = node.children[chr];
    if(!childNode) {
        childNode = new TriNode(chr);
        node.children[chr] = childNode;
    }
    if(!word) {
        childNode.isWord = true;
    }
    this._insertNode(childNode, word);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if(!this.root) return false;
     return this._searchNode(this.root, word);
};

Trie.prototype._searchNode = function(node, word) {
     if(!node || !word) return false;
     var childNode = node.children[word.charAt(0)];
     word = word.slice(1);
     if(childNode) {
        if(childNode.isWord && !word) {
            return true;
        }
        else {
            return this._searchNode(childNode, word);
        }
    }
    else {
        return false;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if(!this.root) return false;
    return this._startWithPrefix(this.root, prefix);
};

Trie.prototype._startWithPrefix = function(node, prefix) {
    if(!node || !prefix) return false;
    var childNode = node.children[prefix.charAt(0)];
    prefix = prefix.slice(1);
    if(childNode) {
        if(!prefix) {
            return true;
        }
        else {
            return this._startWithPrefix(childNode, prefix);
        }
    }
    else {
        return false;
    }
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
