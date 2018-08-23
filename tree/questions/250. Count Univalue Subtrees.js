/*
Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

Example :

Input:  root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

Output: 4
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

var countUnivalSubtrees = function(root) {
    var count = [0];
    dfs(root, count);
    return count[0];
};

var dfs = function(root, count) {
    if(!root) return true;
    var leftUnival = dfs(root.left, count);
    var rightUnival = dfs(root.right, count);
    // means both left subtree and right substree has uniformed value on each node
    if(leftUnival && rightUnival) {  
        if(root.left && root.left.val !==root.val)  return false;
        if(root.right && root.right.val !==root.val)  return false;
        count[0]++;
        return true;
    } 
    return false;
}