/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
Note: You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
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
 * @param {number} k
 * @return {number}
 * use in-order traverse, count all nodes till count  == k ,return res;
 */
var res;
var kthSmallest = function(root, k) {
    var count = [];
    count[0] = k;
    dfs(root, count, false);
    return res;
};

var dfs = function(root, count, stop) {
    if(!root || stop) {
        return;
    }
    dfs(root.left, count, stop);
    count[0] --;
    if(count[0]===0)  {
        stop = true;
        res= root.val;
        return;
    }
    dfs(root.right, count, stop);
}
