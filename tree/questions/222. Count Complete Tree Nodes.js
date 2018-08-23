/*
Given a complete binary tree, count the number of nodes.
Note:
Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, 
is completely filled, and all nodes in the last level are as far left as 
possible. It can have between 1 and 2h nodes inclusive at the last level h.
Example:
Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 
     1
    / \
   2   3 
  / \
 4   5
 for exmple: if height from root to left =2 not equal to root to right = 1
 we take root.left as a tree, root.right as a tree, and caculate each nodes number. 
 the left subtree is a complete tree since its left depth =right depth, return node number = 2*2-1=3
 the right subtree is a complete tree since its left depth =right depth, return node number = 1*2-1=1
 the total nodes = 1+3+1
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(!root)  return 0;
    var left = root, right = root, hl=0, hr=0;
    while(left) {
        hl++; 
        left = left.left;
    }
    while(right) {
        hr++; 
        right = right.right;
    }
    if(hl === hr) return Math.pow(2, hr)-1;
    return 1+countNodes(root.left) + countNodes(root.right);
};