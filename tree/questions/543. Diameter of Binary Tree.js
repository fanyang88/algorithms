/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.
Example: Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
Note: The length of path between two nodes is represented by the number of edges between them.
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
 * For every node, length of longest path which pass it = MaxDepth of its left subtree + MaxDepth of its right subtree.
 */
var diameterOfBinaryTree = function(root) {
    // The longest path would be the bottom of the left/right leave from the left branch 
     // to the bottom of the left/right leave from the right branch 
     if(!root) return 0;
     var maxV =0;
     getMaxDepth(root);
     return maxV-1;
     
     function getMaxDepth(node) {
         if(!node) return 0;
         var left = getMaxDepth(node.left); // left defined here, not in main
         var right = getMaxDepth(node.right);
         maxV = Math.max(( left + right +1), maxV);
         return Math.max(left+1, right+1);
     }
     
};
