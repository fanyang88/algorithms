/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var seq1 = [], seq2=[];
    getLeafSequence(root1, seq1);
    getLeafSequence(root2, seq2);
    if(seq1.length !== seq2.length)  return false;
    for(var i=0; i<seq1.length; i++) {
        if(seq1[i] !== seq2[i])  return false;
    }
    return true;
};

var getLeafSequence = function(root, res) {
    if(!root)  return;
    getLeafSequence(root.left, res);
    if(!root.left && !root.right) res.push(root.val);
    getLeafSequence(root.right, res);
};
