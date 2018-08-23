/*
Two elements of a binary search tree (BST) are swapped by mistake.
Recover the tree without changing its structure.
Note:
A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 e.g:     3     2,4 swap by mistake need to swap back
        /   \
       4     5
      /     /
     1     2
since if we do in-order traverse, we found out, 4 >3 not correct, should push 4, 3 as well, continue traverse, 3>2 not correct,  should push 3, 2 as well, we swap the first one and last one in the stack.
          3
        /   \
       2     5
      /     /
     1     4
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var prev= [null];
    var swap = [];
    inorder(root, swap, prev);
    var temp = swap[swap.length-1].val;
    swap[swap.length-1].val  =swap[0].val;
    swap[0].val =temp;
    return;
};

var inorder = function(root, swap, prev) {
    if(!root)  return;
    inorder(root.left, swap, prev);
    if(prev[0]) {
        if(prev[0].val > root.val) {
            swap.push(prev[0]);
            swap.push(root);
        }
    }
    prev[0]= root;
    inorder(root.right, swap, prev);
}
