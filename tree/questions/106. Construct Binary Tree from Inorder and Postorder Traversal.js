/*
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 inorder = [9,3,15,20,7]
 postorder = [9,15,7,20,3]
                                3   inorder:[9][15, 20, 7]  postorder[9][15, 7, 20]
                            /       \
  inorder:[9],postorder[9] 9         20 inorder:[15]20[7]  postorder[15][7]20
                                /         \
    inorder:[15],postorder[15] 15          7  inorder:[7],postorder[7]
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length ===0)  return null;
    var rootVal = postorder[postorder.length-1];
    var root = new TreeNode(rootVal);
    var ind = inorder.indexOf(rootVal);
    var inorderLeft = inorder.slice(0, ind);
    var inorderRight = inorder.slice(ind+1, inorder.length);
    var postorderLeft = postorder.slice(0, inorderLeft.length);
    var postorderRight = postorder.slice(inorderLeft.length, postorder.length-1);
    root.left = buildTree(inorderLeft, postorderLeft);
    root.right= buildTree(inorderRight, postorderRight);
    return root;
};