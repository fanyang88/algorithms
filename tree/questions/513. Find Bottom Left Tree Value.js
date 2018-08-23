/*
Given a binary tree, find the leftmost value in the last row of the tree.
Example 1:
Input:
    2
   / \
  1   3
Output: 1
Example 2:
Input:
        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7
Output: 7
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * use BFS: use example 2:
 * push 1
 * push 3, 2 => 3, 2 
 * shift 3, push 6, 5 => 2, 6, 5
 * shift 2, push null, 4 => 6, 5, 4
 * shift 6
 * shift 5, push null, 7 => 4, 7
 * shift 4
 * shift 7 -> result
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(!root) return null;
    var queue = [], node;
    queue.push(root);
    while(queue.length>0) {
        node = queue.shift();
        if(node.right) {
            queue.push(node.right);
        }
        if(node.left) {
            queue.push(node.left);
        }
    }
    return node.val;
    
};
