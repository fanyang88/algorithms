/*
In English, we have a concept called root, which can be followed by some other words to form another longer word - 
let's call this word successor. For example, the root an, followed by other, which can form another word another.
Now, given a dictionary consisting of many roots and a sentence. 
You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, 
replace it with the root with the shortest length.
You need to output the sentence after the replacement.
Example 1:
Input: dict = ["cat", "bat", "rat"]
sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
Note:
The input will only have lower-case letters.
1 <= dict words number <= 1000
1 <= sentence words number <= 1000
1 <= root length <= 100
1 <= sentence words length <= 1000
*/

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var TrieNode = function(data) {
    this.isWord = false;
    this.data = data;
    this.children = {};
};


var replaceWords = function(dict, sentence) {
    var res = '';
    this.root = new TrieNode('');
    for(var word of dict) {
        insert(this.root, word);
    }
    
    for(var word of sentence.split(' ')) {
        var prefix = findPrefix(this.root, word);
        res +=  prefix === '' ? (word + ' ') : (prefix + ' ');
    }
    return res.trim();
};

var insert = function(root, word) {
    if(!root || word.length === 0)  return;
    var cur = root;
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

var findPrefix = function(root, word) {
    var res= '';
    if(!root || word.length === 0)  return res;
    var cur = root;
    for(var i=0; i<word.length; i++) {
        var chr = word[i];
        // cur node is a word already, then it is the smallest length root
        if(cur.isWord) {
            return res;
        }
        // this word has no root exist in dict, otherwise, we can go all the way down to a leaf in the trie 
        if(!cur.children[chr]) {
            return '';  
        }
        res += chr;
        cur = cur.children[chr];
    }
    return res;
};
