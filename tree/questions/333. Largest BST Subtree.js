/*
Given a binary tree, find the largest subtree which is a Binary Search Tree (BST), 
where largest means subtree with largest number of nodes in it.
Note:
A subtree must include all of its descendants.
Here's an example:
    10
    / \
   5  15
  / \   \ 
 1   8   7
The Largest BST Subtree in this case is the highlighted one. 
The return value is the subtree's size, which is 3.
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
var largestBSTSubtree = function(root) {
    // if current root is a valid bst, we caculate its node and return;
    if(isValidBST(root, null, null))  {
        return countNodes(root);
    }
    // if the root is not a valid bst. check it's left sub and right sub, 
    // if one of them is a valid sub, get the node count.
    return Math.max(largestBSTSubtree(root.left), largestBSTSubtree(root.right));
};

var isValidBST = function(root, min, max) {
    if(!root)  return true;
    if(min!== null && min >= root.val) return false;
    if(max!== null && max <= root.val) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

var countNodes = function(root) {
    if(!root)  return 0;
    //if(!root.left && !root.right)  return 1;
    return 1+ countNodes(root.left) + countNodes(root.right);
};
