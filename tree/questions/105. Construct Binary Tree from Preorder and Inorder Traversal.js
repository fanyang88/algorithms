/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 
 
 preorder = {7,10,4,3,1,2,8,11}
  inorder = {4,10,3,1,7,11,8,2}

The first node in preorder alwasy the root of the tree. We can break the tree like:
1st round:
preorder:    {7}, {10,4,3,1}, {2,8,11}
inorder:     {4,10,3,1}, {7}, {11, 8,2}
root_ind= 4
                _______7______
               /              \
            {4,10,3,1}       {11,8,2}
        pre:10,4,3,1         pre: 2,8,11 (root_ind+1, pe):  ps=root_ind+1, is=1
        in: 4,10,3,1         in: 11,8,2  (root_ind+1, ie):  ps=root_ind+1, is=0
             10                  2
    root_ind=1          root_ind= 2+ offset(ps-is+1)
         ____________        ____________
        /            \      /            \
      {4}          {3,1}   {11,8}        null
      ....
 */
var buildTree = function(preorder, inorder) {
    if(inorder.length ===0)  return null;
    var root = new TreeNode(preorder[0]);
    var ind = inorder.indexOf(preorder[0]);
    var inorderLeft = inorder.slice(0, ind);
    var inorderRight = inorder.slice(ind+1, inorder.length);
    var preorderLeft = preorder.slice(1, inorderLeft.length+1);
    var preorderRight = preorder.slice(inorderLeft.length+1, preorder.length);
    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    return root;
};