/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
For example:Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false;
    return _hasPathSum(root, sum, root.val);
};

var _hasPathSum = function(node, sum, curSum) {
    if(!node.left && !node.right){
        return curSum === sum;
    }
    if(node.left) {
        if(_hasPathSum(node.left, sum, curSum+node.left.val))  return true;
    }
    
    if(node.right) {
        if(_hasPathSum(node.right, sum, curSum+node.right.val))  return true;
    }
    return false;
};
