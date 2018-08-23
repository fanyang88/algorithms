/*
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.
Example :
Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.
The given tree [4,2,6,1,3,null,null] is represented by the following diagram:
          4
        /   \
      2      6
     / \    
    1   3  

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 In-Order Traversal
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var minDiffInBST = function(root) {
    if(!root || (!root.left && !root.right))  return 0;
    var mininum = Number.MAX_SAFE_INTEGER;
    var arr = traverse(root, []);
    for(i=0; i< arr.length-1; i++) {
        mininum = Math.min(mininum, (arr[i+1] - arr[i]));
    }
    return mininum;
};

var traverse = function(node, arr) {
     if(node === null)  return;
     traverse(node.left, arr);
     arr.push(node.val);
     traverse(node.right, arr);
     return arr;
}
