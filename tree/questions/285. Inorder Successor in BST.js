/*
Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
Note: If the given node has no in-order successor in the tree, return null.
Example 1:

Input: root = [2,1,3], p = 1

  2
 / \
1   3

Output: 2
Example 2:

Input: root = [5,3,6,2,4,null,null,1], p = 6

      5
     / \
    3   6
   / \
  2   4
 /   
1

Output: null
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// successor is larger than p in this most cloest distance.
var inorderSuccessor = function(root, p) {
    var answer = null;
   while(root) {
       if(root.val > p.val) {  // current root can be a potential answer
           answer = root; // record the potential
           root = root.left; // go smaller to find more
       } else {  // current root <=p, the potential answer is on right branch
           root = root.right;
       }
   }
    return answer;
};

