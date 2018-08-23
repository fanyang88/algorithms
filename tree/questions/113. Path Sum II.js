/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
For example:Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return[ [5,4,11,2],[5,8,4,5]]
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root) return [];
    var pathes =[], path = [];
    _pathSum(root, sum, root.val, pathes, [root.val]);
    return pathes;
};

var _pathSum = function(node, sum, curSum, pathes, path) {
    if(!node.left && !node.right) {
        if(curSum === sum) {
            pathes.push(path.slice());
        }
        return;
    }
    
    if(node.left) {
        path.push(node.left.val);
        _pathSum(node.left, sum, curSum + node.left.val, pathes, path);
        path.pop();
    }
    if(node.right) {
        path.push(node.right.val);
        _pathSum(node.right, sum, curSum + node.right.val, pathes, path);
        path.pop();
    } 
};
