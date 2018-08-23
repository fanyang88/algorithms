/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.
The encoded string should be as compact as possible.
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
    if(root === null) return '';
    var arr = helper(root, []);
    return arr.join(',');
};

var helper = function(node, arr){
    if(node) {
        arr.push(node.val);
        helper(node.left, arr);
        helper(node.right, arr);
    } else {
        arr.push('#');
    }
    return arr;
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === '')  return null;
    var root = construct(data.split(','));
    return root;
};

var construct = function(arr){
    var val = arr.shift();
    var node;
    if(val) {
        if(val === '#') {
            node = null;
        } else {
            node = new TreeNode(+val);
            node.left = construct(arr);
            node.right = construct(arr); 
        }
    }
    return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
