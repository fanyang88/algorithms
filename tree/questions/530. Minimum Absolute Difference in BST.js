/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
Input:
   1
    \
     3
    /
   2
Output:1
Explanation:The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * inorder traverse.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    var minDiff = [Number.MAX_VALUE];
    inorder(root, minDiff, [null]);
    return minDiff[0];
};

var inorder = function(node, minDiff, prev) {
    if(!node) return;
    inorder(node.left, minDiff, prev);
    if(prev[0]) {
        minDiff[0] = Math.min(minDiff[0], Math.abs(prev[0].val - node.val));
    }
    prev[0] = node;
    inorder(node.right, minDiff, prev);
};
