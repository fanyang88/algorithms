/*
Given a binary tree, find the length of the longest path where each node in the path has the same value. 
This path may or may not pass through the root.
Note: The length of path between two nodes is represented by the number of edges between them.
Example 1:
Input:        5
             / \
            4   5
           / \   \
          1   1   5
Output:    2
Example 2:
Input:        1
             / \
            4   5
           / \   \
          4   4   5
Output:2
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
    // simliar to 124, we need to get single path value, max store the sum of both.  
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    var res = [0];
    _maxPathSum(root, res);
    return res[0];
};

var _maxPathSum = function(node, res) {
    if(!node)  return 0;
    var left = _maxPathSum(node.left, res);
    var right = _maxPathSum(node.right, res);
    if(node.left && node.val === node.left.val) {
        left ++;  // plus root itself
    } else {
        left = 0;  // no path on the left equal to root.
    }
    if(node.right && node.val === node.right.val) {
        right ++;  // plus root itself
    } else { 
        right = 0; // no path on the right equal to root.
    }
    // for this node, max could be the left+node, or right+node, or node itself
    var maxSingle =  Math.max(left, right, 0);
    
    res[0] = Math.max(res[0], maxSingle, left+right, 0);
   
    return maxSingle;
};