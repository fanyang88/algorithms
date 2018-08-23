/*
Given a binary tree, find the maximum path sum.
For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
For example:Given the below binary tree,
       1
      / \
     2   3
Return 6.
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
 * @return {number}
 */
 
var maxPathSum = function(root) {
    var res = [Number.NEGATIVE_INFINITY];
    _maxPathSum(root, res);
    return res[0];
};

var _maxPathSum = function(node, res) {
    if(!node)  return 0;
    var left = _maxPathSum(node.left, res);
    var right = _maxPathSum(node.right, res);
    
    // for this node, max could be the left+node, or right+node, or node itself
    var maxSingle =  Math.max(left+node.val, right+node.val, node.val);
    
    res[0] = Math.max(res[0], maxSingle, left+right+node.val);
   
    return maxSingle;
};
