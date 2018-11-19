/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
 
var rangeSumBST = function(root, L, R) {
    var res = [0];
    dfs(root, L, R, res);
    return res[0];
};

var dfs = function(root, L, R, res) {
    if(!root)  return;
    dfs(root.left, L, R, res);
    if(root.val <= R && root.val >= L) res[0]+= root.val;
    dfs(root.right, L, R, res);
};
