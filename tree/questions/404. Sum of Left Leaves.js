/*
Find the sum of all left leaves in a given binary tree.
Example:
    3
   / \
  9  20
    /  \
   15   7
There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *in-order traverse, mark left branch as true;
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    var sum = [0];
    inorder(root, sum, false);
    return sum[0];
};

var inorder = function(root, sum, isLeft) {
    if(!root)  return;
    inorder(root.left, sum, true);
    if(isLeft && !root.left && !root.right) {
        sum[0] += root.val;
    }
    inorder(root.right, sum, false);
};
