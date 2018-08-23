/*
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as a binary tree 
in which the depth of the two subtrees of every node never differ by more than 1.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    if (Math.abs(Depth(root.left) - Depth(root.right)) >1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
    
    function Depth(node) {
        if(!node) return 0;
        return 1+ Math.max(Depth(node.left), Depth(node.right));
    }
};
