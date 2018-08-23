/*
Given an integer array with no duplicates. 
A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:
      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length === 0)  return null;
    var maxV = Math.max(...nums);
    
    var root = new TreeNode(maxV);
    var ind = nums.indexOf(maxV);
    
    var left = nums.slice(0, ind);
    var right = nums.slice(ind+1, nums.length);
    root.left = constructMaximumBinaryTree(left);
    root.right = constructMaximumBinaryTree(right);
    return root;
};