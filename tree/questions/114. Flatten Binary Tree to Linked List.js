/*
Given a binary tree, flatten it to a linked list in-place. For example, Given
         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
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
 * @return {void} Do not return anything, modify root in-place instead.
 *       1
          \
           2
          / \
         3   4
              \
               5
                \
                 6
对root的左子树进行处理，将左子树的根节点和左子树的右子树插入右子树中
接下来对节点2进行处理，同样将2的左子树插入右子树中
 */
var flatten = function(root) {
    if(!root) return;
    if(root.left) {
        var leftnode = root.left;
        var rightnode = root.right;
        root.right = leftnode;
        root.left = null;
        var p = root.right;
        while(p.right) {
            p = p.right;
        }
        p.right = rightnode;
    }
    flatten(root.right);
    
};
