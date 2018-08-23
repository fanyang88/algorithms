/*
Invert a binary tree.
     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * in order traverse
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)  return root;
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
};
