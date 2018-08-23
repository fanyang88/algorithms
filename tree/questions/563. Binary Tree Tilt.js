/*
Given a binary tree, return the tilt of the whole tree.
The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.
The tilt of the whole tree is defined as the sum of all nodes' tilt.
Example:Input: 
         1
       /   \
      2     3
Output: 1
Explanation: 
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
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
var findTilt = function(root) {
    if(!root)  return 0;
    var tilt= [0];
    _findTilt(root, tilt);
    return tilt[0];
};

var _findTilt= function(node, tilt) {
    if(!node)  return 0;
    var left = _findTilt(node.left, tilt);
    var right = _findTilt(node.right, tilt);
    tilt[0] += Math.abs(left - right);
    // return sum.
    return left+right+node.val;
};

