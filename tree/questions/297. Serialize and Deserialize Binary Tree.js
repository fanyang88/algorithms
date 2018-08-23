/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, 
or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization 
algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized 
to the original tree structure.
For example, you may serialize the following tree
    1
   / \
  2   3
     / \
    4   5
as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, 
so please be creative and come up with different approaches yourself.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var arr = [];
    _serialize(root, arr);
    return arr.join(',');
    
};

var _serialize = function(root, arr) {
    if(!root) {
        arr.push('#');
    } else {
        arr.push(root.val);
        _serialize(root.left, arr);
        _serialize(root.right, arr);
    }
    return;
};

// Another way to serialize binary tree.
var _serialize = function(root) {
    if(!root) {
        return '#';
    }
    var key = ''+ root.val + ',' + _serialize(root.left) + ',' + _serialize(root.right);
    return key;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === '')  return null;
    var arr = data.split(',');
    return _deserialize(arr);
};


var _deserialize = function(arr) {
    var val = arr.shift();
    var node;
    if(val) {
        if(val === '#') {
            node = null;
        } else {
            node = new TreeNode(+val);
            node.left = _deserialize(arr);
            node.right = _deserialize(arr);
        }
    }
    return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

