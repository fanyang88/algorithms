/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants 
(where we allow a node to be a descendant of itself).”

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. 
Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
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
 * @param {TreeNode} q
 * @return {TreeNode}
 if p, q both on root.left subtree, traverse the root.left till we find the node
 if p, q both on root.right subtree, traverse the root.right till we find the node
 if p, q one is on left subtree, other is on right subtree, return root;
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null || root === p || root === q) return root;
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    if(left && right)  return root;
    if(!left && right)  return right;
    return left;
};
