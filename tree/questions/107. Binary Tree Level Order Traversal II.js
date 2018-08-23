/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
For example:Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[[15,7],
  [9,20],
  [3]]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var res = [], stack= [], transport = [], node, size;
    stack.push(root);
    if(!root)  return res;
    
    while(stack.length>0) {
        size = stack.length;
        while(size>0) {
            size --;
            node = stack.shift();
            transport.push(node.val);
            
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
        res.push(transport);
        transport = [];
    }
    //reverse res
    return res.reverse();
};
